# 12. - Minimální kódy

> Minimální kódy, princip, použití, konstrukce Huffmanova kódu, aritmetické kódy

###Kódování
- Kódování je proces transformace dat (např. pomocí speciální znakové tabulky) do podoby definované příslušným kódovacím algoritmem, za účelem prevence ztráty (či znehodnocení) dat při přenosu nebo snížení celkového objemu dat apod.

**Kódování** je změna vstupní zprávy na zprávu jinou, narozdíl od šifrování není cílem zprávu utajit. Kódujeme za účelem:

- **zmenšení objemu** přenášené zprávy ( *kompresní kódy* - minimální(huffmanův kód), aritmetické, slovníkové)
- **zabezepečení** zprávy proti chybám (*opravné kódy* - CRC, Hamming, Paritní bit)

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

####Prefixový kód
- žádné kódové slovo není prefixem jiného kódového slova
- každý prefixový kód je jednoznačně dekódovatelný
- lze je dekódovat znak po znaku(průběžně)

##Minimální(nejkratší) kód
- je prefixový kód, který má ze všech prefixových kódů dané zdrojové abecedy nejkratší střední délku kódového slova
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

![rle](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/rle1.png)


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

![ukazka huffmana2](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/ukazka_huff2.png)

###Aritmetické kódování
- Aritmetické kódování reprezentuje zprávu jako podinterval intervalu <0,1)
- Výstupem je jedno racionální číslo a tabulka četností
	- pomocí tabulky zjistíme poměrné rozdělení jednotlivých znaků a následně z daného racionálního čísla sestavíme řetězec

![ukazka aritm. kod](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/aritm_kod.png)

![ukazka aritm. kod2](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/aritm_kod2.png)

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
 

##Extra

![bezp. kod](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/bezp_kody.png)

###Paritní bit
- lichá parita - kontrolní bit doplní jedničku(nebo nulu) tak, aby byl v daném řádku (či sloupci) lichý počet jedniček
- sudá parita - kontrolní bit doplní jedničku(nebo nulu) tak, aby byl v daném řádku (či sloupci) sudý počet jedniček

###Hammingův bezpečnostní kód
- rozšířený hammingův kód (8,4) je schopný detekovat 2 chyby a opravit 1 chybu
- hammingův kód (7,4) je schopný opravit 1 chybu

####Kódování
Zakódovaný řetězec pro 5 informačních bitů (a je informační bit) je ve tvaru \
![B = p_1p_2a_1p_3a_2a_3a_4p_4a_5](https://latex.codecogs.com/svg.latex?B%20%3D%20p_1p_2a_1p_3a_2a_3a_4p_4a_5)
- paritní bity jsou na pozicích mocniny 2 (tedy 1,2,4,8,16,... 

![hamming](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/hamming.png)

- první paritní bit kontroluje všechny bity, co mají nastaven least significant bit v bitové reprezentaci pozice (pořadí)
- druhý paritní bit kontroluje všechny bity, co mají nastaven second least significant bit v bitové reprezentaci pozice (pořadí)
- ... 
- tedy první paritní bit se počítá jako XOR bitů na lichých pozicích 3,5,7,9... apod.

####Dekódování
- vypočítá se tzv. Syndromový vektor, kde je jeho jednotlivé prvky vypočítají podobně jako paritní bity při kódování
- pokud je tento vektor nenulový, chyba je pak na pozici číselného vyjádření vektoru
- pokud je nulový, přijmutý řetězec je bez chyb

**Rozšířený Hammingův kód**
- pokud je přidán celkový bit parity, tak je kód schopen detekovat (nikoli opravit) 2 chyby
  
###CRC bezpečnostní kód (Cyclic redundancy check)
- cyklické kódy vychází z polynomu
- slouží k detekci chyb, ale neupravují je
- Optimální n-bitové CRC umí detekovat jakoukoli 2-bitovou chybu v čísle ![2^n-1](https://latex.codecogs.com/svg.latex?2%5En-1) (data). Běžné hodnoty n jsou 5, 8, 12, 16 a 32

![b = [1,0,0,1,1]\\B_x = x^4 + x + 1](https://latex.codecogs.com/svg.latex?b%20%3D%20%5B1%2C0%2C0%2C1%2C1%5D%20%5C%5C%20B_x%20%3D%20x%5E4%20&plus;%20x%20&plus;%201)

- algoritmus převede vstupní řetězec na polynom, vynásobího polynomem CRC a výsledek projde přes modulo 2, to co zbyde je výstup CRC 

![crc](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/12_minimalni_kody/crc.png)

Často používané

- 9 bits (CRC-8)
- 17 bits (CRC-16)
- 33 bits (CRC-32)
- 65 bits (CRC-64)
