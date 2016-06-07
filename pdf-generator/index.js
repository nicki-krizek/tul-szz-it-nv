var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');
var phantom = require('phantom');
var PDFMerge = require('pdf-merge');

// Mensi nastaveni
var pathToPdfTK = "C:\\tmp\\pdftk.exe"; // cesta k programu pdftk, ktery se da stahnout zde - https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/pdftk_free-2.02-win-setup.exe

// Dale neni treba nic nastavovat
var urls = fs.readFileSync('urls.txt').toString().split("\n"); // soubor s adresama jednotlivych otazek, asi netreba menit, jen kdyby se neco menilo
var htmlpage = fs.readFileSync('page.html').toString(); // pomocna HTML stranka, do ktere se vlozi ukradeny kod z GitHubu a vyrendruje v wkhtmltopdf
var i = 0;
var pdfFiles = [];

// Slo by to udelat i paralerne a puvodne jsem to tak mel, ale nic moc to navic neprineslo...
function next() {
    console.log("=> Zpracovávaná URL: " + urls[i]);
    
    phantom.create().then(ph => {
        _ph = ph;
        return _ph.createPage();
    }).then(page => {
        var url = urls[i].trim();
        console.log("=== Open page: '" + url + "'");
        _page = page;
        return _page.open(url);
    }).then(status => {
        console.log(status);
        if(status == "success") {
          console.log("== Page laod success");
          return _page.evaluate(function() { return document.getElementById("readme").innerHTML; });
        }
        else {
          return null;
        }
    }).then(content => {
        console.log("== Replace relative to absolute paths");
        _page.close();
        _ph.exit();
        // Zde se nahrdi relativni cesty k obrazkum asbolutnimi
        return htmlpage.replace("<replaceme />", content.split('src="/').join('style="display:block; margin: 0 auto;" src="https://github.com/'));
    }).then(content => {
        console.log("== Gen HTML to PDF");
        var pdfFile = 'pdf/' + i + '.pdf';
        pdfFiles.push(pdfFile);
        
        // Pro ulozeni HTML stavu pred PDFkovanim odkomentuj nasledujici radek a vytvor slozku html
        //fs.writeFileSync("html/" + i + ".html", content);
        
        // Generovani PDF, to zpozdeni pro javascript ani potreba moc neni, ale pro jistotu
        wkhtmltopdf(content, { output: pdfFile, javascriptDelay: 1000 }, function (err, stream) {
          if(err) {
            console.log(err);
            return;
          }      
          
          i++;
        
          if(i < urls.length) {
            // Vse OK a jdeme na dalsi URL!
            next();
          }
          else {
            console.log("=== All urls done, merge PDF files");
            var pdfMerge = new PDFMerge(pdfFiles, pathToPdfTK);
            
            // Slouceni jednotlivych PDF v jedno obri PDF :)
            pdfMerge.asNewFile('SSZ-Generated.pdf').merge(function(err, filePath) {
              if(err) {
                console.log(err);
              }
              else {
                console.log("=== Merge done - all tasks done! ");
                // Vse hotovo
              }
            });
          }
        });
    });   
}

// Pusti se akce pro prvni URL
next();