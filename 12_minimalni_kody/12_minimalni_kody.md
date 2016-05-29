# 12. - Minimální kódy

> Minimální kódy, princip, použití, konstrukce Huffmanova kódu, aritmetické kódy

###Kódování
- (Kódování znaků je trestem programátorů za všechny jejich hříchy a nežádoucí dědictví z dob minulých, kdy se šetřilo každým bitem, které do dnešní doby přežívá díky zkostnatělosti Microsoftu :D)
- Kódování je proces transformace dat (např. pomocí speciální znakové tabulky) do podoby definované příslušným kódovacím algoritmem, za účelem prevence ztráty (či znehodnocení) dat při přenosu nebo snížení celkového objemu dat apod.

###Kraftova nerovnost
Kraftova nerovnost je věta užívaná v teorii kódování. Udává omezení na délky kódových slov, které musí splňovat daný kód, aby mohl být kódem prefixovým. Zobecnění Kraftovy nerovnosti pro libovolný jednoznačně dekódovatelný kód se pak nazývá McMillanova věta.

Matematicky lze Kraftovu nerovnost formulovat takto: Uvažujme \scriptstyle D-znakový prefixový kód kódující  r různých zpráv pomocí kódových slov délek ![l_1, l_2, \ldots, l_r ](https://latex.codecogs.com/svg.latex?l_1%2C%20l_2%2C%20%5Cldots%2C%20l_r). Pak musí být splněna nerovnost

![](https://upload.wikimedia.org/math/f/5/a/f5ad6c8b0d3c2bfdbe7d77700592aab4.png)

Naopak, pokud přirozená čísla ![l_1, l_2, \ldots, l_r ](https://latex.codecogs.com/svg.latex?l_1%2C%20l_2%2C%20%5Cldots%2C%20l_r) splňují výše uvedenou nerovnost, tak existuje prefixový kód s D znaky a délkami kódových slov ![l_1, l_2, \ldots, l_r ](https://latex.codecogs.com/svg.latex?l_1%2C%20l_2%2C%20%5Cldots%2C%20l_r).

####McMillanova věta
McMillanova věta je tvrzení z oblasti teorie informace, které dává do vztahu délky kódových slov jednoznačně dekódovatelných kódů. Jedná se o zobecnění Kraftovy nerovnosti, která je primárně dokázána pro prefixové kódy (ty tvoří podmnožinu množiny jednoznačně dekódovatelných kódů). Větu lze vyslovit v následujícím znění:

Délky slov ![l_i](https://latex.codecogs.com/svg.latex?l_i) libovolného jednoznačně dekódovatelného D-znakového kódu splňují nerovnost

![](https://upload.wikimedia.org/math/b/4/9/b49a15762132fae47ad9f53c05211b4d.png)

>Pozn: Číslo D tedy představuje počet znaků, pomocí nichž kódujeme zprávy přicházející ze zdroje, pro binární kód je D = 2, což odpovídá znakům 0 a 1. Po zakódování takovýmto kódem tedy z dané zprávy dostaneme posloupnost nul a jedniček. Pro ternární kódy máme D = 3 (tj. znaky 0, 1, 2) atd. Čísla ![l_1, l_2, \ldots](https://latex.codecogs.com/svg.latex?l_1%2C%20l_2%2C%20%5Cldots) pak označují délky jednotlivých kódových slov. To znamená, máme-li danou i-tou zprávu, tak ![l_i](https://latex.codecogs.com/svg.latex?l_i) udává počet znaků v posloupnosti použité pro zakódování této zprávy, např. pro \scriptstyle i-tou zprávu, jejíž kódové slovo je 00101, je ![l_i](https://latex.codecogs.com/svg.latex?l_i) = 5 .

####Komprese dat
- algoritmy pro snížení objemu dat
	- ztrátová komprese (např. jpeg)
	- bezztrátová komprese (minimální kódy)
	
##Minimální kód

- algoritmy snažící se bezztrátově zredukovat velké množství informace
- RLE Run lenght encoding – opakování znaků 
- Statistické metody
	- Huffmanovo kódování
	- Aritmetické kódování
	- Shannon-Fanovo kódování
- Slovníkové metody
	- LZ77 (PNG)
	- LZ78
	- LZW (GIF) 

###RLE
- Použití: zřídka pro kompresi textů, častěji pro obrazovou informaci
- Princip: opakující se symboly se kódují dvojicí (počet opakování , symbol)
- Na výstupní stream se pak často aplikuje některá ze statistických metod (velmi rozdílná pravděpodobnost hlavně u počtu opakování)
- Příklad
	- Vstup: AAAABBCDDDDABD
    - Výstup: 4A2B1C4D1A1B1D
- pro jaké obrázky RLE výhodné?
	- obrázek s mnoha vodorovnými čarami
-  pro jaké obrázky RLE neefektivní?
	-   obrázek se svislými čarami 
	- obrázek, kde se neopakují hodnoty sousedních pixelů (např. šachovnice)
	-  může nastat i případ „záporné komprese“ → zvětšení výsledného souboru 

###Huffmanův minimální kód  
- též známé jako prefixový kód
- využívá optimálního (nejkratšího) prefixového kódu  (kód žádného znaku není 
prefixem jiného znaku).
- **Princip**: Metoda je založená na stanovení četnosti výskytů jednotlivých 
znaků v kódovaném souboru a kódování znaků s největší četností 
slovem s nejkratší délkou. 

#####Algoritmus kódování: 
1. Zjištění četnosti jednotlivých znaků v kódovaném souboru (nebo absolutní počet) 
2. Vytvoření binárního stromu (Huffmanova kódu jednotlivých znaků) 
3. Ohodnocení uzlů stromu – přiřazení kódů 
4. Nahrazení znaků jednotlivými kódy (posloupností bitů) 

**Výhody**: velmi rychlá komprese a dekomprese, jednoduchý algoritmus \
**Nevýhody**: nutnost uložení binárního stromu nebo jiné informace pro jeho opětovné 
sestavení, slabší kompresní poměr 

![ukazka huffmana](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/ukazka_huff.png)

###Aritmetické kódování
- Aritmetické kódování reprezentuje zprávu jako podinterval intervalu <0,1)
- Výstupem je jedno racionální číslo a tabulka četností
	- pomocí tabulky zjistíme poměrné rozdělení jednotlivých znaků a následně z daného racionálního čísla sestavíme řetězec

![ukazka aritm. kod](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/aritm_kod.png)

#####Komprese
- zjistíme pravděpodobnostní rozdělení jednotlivých znaků
	- pomocí toho sestrojíme intervaly v rozmezi <0;1)
Př.
text : aab
a : 2/3
b : 1/3
- a <0,2/3) b<2/3,1)
	- a je první v textu  -> roztahujeme interval <0,2/3)
- a <0,4/9) b<4/9,2/3)
	- a je druhý prvek  -> roztahujeme interval <0,4/9)
- a <0,8/27) b<8/27,4/9)
	- b je poslední písmeno -> vybereme číslo z intervalu <8/27,4/9)
Konkrétní číslo se pak vybírá takové, aby šlo zapsat pomocí co nejméně informace

- vybrané číslo se spolu s pravděpodobnostní tabulkou uloží (to je výsledek aritmetické komprese)

#####Dekomprese
- Postupuje se podobně, rozdělíme nejdřív interval <0;1), podle toho do kterého intervalu dané číslo spadá, takový je první znak atd.
 
