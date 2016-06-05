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
- pro jaké obrázky RLE výhodné?
	- obrázek s mnoha vodorovnými čarami
-  pro jaké obrázky RLE neefektivní?
	-   obrázek se svislými čarami 
	- obrázek, kde se neopakují hodnoty sousedních pixelů (např. šachovnice)
	-  může nastat i případ „záporné komprese“ → zvětšení výsledného souboru 

*Kódování:**

1. Postupně čteme znaky na vstupu a ukládáme si počet jejich opakování.
2. Když se znak změní, zapíšeme na výstup hodnotu čítače a opakovaný znak.
3. Čítač resetujeme na jedničku a pokračujeme pro nový znak od opět od bodu jedna.

| A | A | A |  A | F | F | F |  F |  C | H | H |  H |
|:-:|:-:|:-:|:--:|:-:|:-:|:-:|:--:|:--:|:-:|:-:|:--:|
|   |   |   | 4A |   |   |   | 4F | 1C |   |   | 3H |

Výsledek: AAAAFFFFCHHH (12 znaků) => **4A4F1C3H** (8 znaků)

Kompresní poměr: (nová délka) / (stará délka) = 8 / 12 = 0.66 => **66%**

**Dekódování:**
Postup dekódování je obdobný, čteme vstup a jakmile narazíme na číslo tak ho přepíšeme jako rozvinutý tvar opakujících se znaků za číslem.

_Tento postup není specifický pro textové soubory, lze ho s úpravami aplikovat i pro binární reprezentaci._

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

Příklad: znakový řetězec **ABRAKADABRA**

1. Zjistím jednotlivé četnosti: A (5x – 0,46), B (2x – 0,18), R (2x – 0,18), D (1x – 0,09), K (1x – 0,09)
2. Sestrojím tabulku četností:
 - Levý sloupec seřazeno dle četnosti, dále pak podle abecedy. (závislé na implementaci)
 - Posledním dvou nejméně četným znakům přiřadím 0 a 1. (pořadí opět závislé na implementaci)
 - Do dalšího sloupce přesunu vyhodnocené znaky jako jeden složený a zbytek jen opíšu.
 - Opět vše seřadím a kroky opakuji analogicky až do konce.
3. Výsledný kód je spojením dílčích kódů vzniklých při spojování. (čteno odzadu) 
4. A(1), B(01), R(001), D(0000), K(0001)

| Četnost | Kód  | Četnost  | Kód | Četnost | Kód  | Četnost | Kód |
|--------|---|---------|---|----------|---|-----------|---|
| A 0,46 |   | A 0,46  |   | A 0,46   |   | DKRB 0,54 | 0 |
| B 0,18 |   | B 0,18  |   | DKR 0,36 | 0 | A 0,46    | 1 |
| R 0,18 |   | DK 0,18 | 0 | B 0,18   | 1 |           |   |
| D 0,09 | 0 | R 0,18  | 1 |          |   |           |   |
| K 0,09 | 1 |         |   |          |   |           |   |

Výsledný řetězec: **ABRAKADABRA** (11 znaků - 88 bitů) = 1 01 001 1 0001 1 0000 1 01 001 1 = **10100110001100001010011** (23 bitů)

*Výsledek je distribuován spolu s tabulkou kódu, díky prefixovosti je pak možné řetězec jednoznačné rekonstruovat opětovným přepsáním zpět.*

**Kompresní poměr:** (nový počet bitů) / (původní počet bitů) = 23 / 88 = 0,26 = **26%**

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

- první paritní bit kontroluje všechny bity, co mají nastaven least significant bit v bitové reprezentaci pozice (např. 1 -> **1** ; 3 -> 1**1** ; 5 -> 10**1**), kromě sebe samozřejmě, tu hodnotu teprve musí vypočítat
- druhý paritní bit kontroluje všechny bity, co mají nastaven second least significant bit v bitové reprezentaci pozice (napr 2 -> **1**0 ; 3 -> **1**1 ; 6 -> 1**1**0)
- ... 
- tedy první paritní bit se počítá jako XOR bitů na lichých pozicích 3,5,7,9... apod.

####Dekódování
- vypočítá se tzv. Syndromový vektor, kde je jeho jednotlivé prvky vypočítají podobně jako paritní bity při kódování
	- vektor je stejně dlouhý jako počet paritních bitů, které byly použity při jeho zakódování
	- první prvek syndromu se vypočítá jako XOR pozic, které opět mají ve své bin. reprezentaci LSB, tentokrát i s paritním bitem
	- ...
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
