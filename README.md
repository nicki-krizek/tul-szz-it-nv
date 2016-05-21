# Materiály ke SZZ na TUL (NV IT)

Repozitář obsahuje vypracované otázky ke **SZZ na TUL v roce 2015/2016 pro magisterské studium, obor Informační technolgie**.  Za kvalitu ani pravdivost informací neručíme, jedná se o kompilaci informací sesbíraných různě po internetu. Kvůli takto převzatým materiálům (viz níže) ani blíže nespecifikujeme licenci. Materiály jsme vypracovali tímto stylem, aby byly snadno dustupné všem. V případě, že si nějaký z materiálů nárokujete, neváhejte se nám ozvat.

Pokud naleznete nějakou chybu, budeme rádi za pull request s opravou.

## Rozcestník
- Předběžné datum: [Harmonogram SZZ - červen 2016 #1](https://github.com/tomaskrizek/tul-szz-it-nv/issues/1)
- Složení komise a co od ní můžeme čekat: [SSZ - 14. - 16. června 2016 #2](https://github.com/tomaskrizek/tul-szz-it-nv/issues/2)
- Stav vypracování a diskuze k jednotlivým otázkám: [Tematické okruhy ke SZZ 2015/2016 #3](https://github.com/tomaskrizek/tul-szz-it-nv/issues/3)
- Jak SZZ bude probíhat a kolik je času na co: [Standardní průběh SZZ #4](https://github.com/tomaskrizek/tul-szz-it-nv/issues/4)
- Jak se mohu do vypracovávání zapojit:  [Vypracovávání materiálů a formátování #5](https://github.com/tomaskrizek/tul-szz-it-nv/issues/5)


**Vše potřebné lze nalézt také v [issues](https://github.com/tomaskrizek/tul-szz-it-nv/issues).**


## Seznam otázek

1. Základy teorie grafů – souvislost, kostra grafu, eulerovské, hamiltonovské a rovinné grafy. Vybrané grafové algoritmy – prohledávání grafu, minimální kostra, nejkratší cesta.

2. Základy teorie dělitelnosti – základní pojmy (NSD, NSN, Eukleidův algoritmus), řetězové zlomky, kongruence modulo m, úplná a redukovaná soustava zbytků, počítání v (Zm, +, .), řešení kongruencí 1. stupně a jejich soustav.

3. Rekurentní vztahy – základní pojmy, řešení, (ne)homogenní, (ne)lineární rekurentní vztahy, řešení lineárních rekurentních vztahů s konstantními koeficienty a jejich soustav (otázka existence a jednoznačnosti řešení), využití vytvořujících funkcí.

4. Základy klasické kombinatoriky – princip inkluze a exkluze, Dirichletův princip, zobecněný binomický koeficient, subfaktoriály, Fibonacciho, Catalanova a Stirlingova čísla, problematika rozkladů – varianty, (ne)rozlišitelné objekty, (ne)rozlišitelné skupiny, využití diofantických rovnic a vytvořujících funkcí v oblasti rozkladů.

5. Vytvořující funkce (obyčejná, exponenciální), otevřený a uzavřený tvar, základní operace s vytvořujícími funkcemi, vytvořující funkce (uzavřený tvar) základních posloupností, věžové polynomy.

6. [Problematika řazení – základní algoritmy a jejich složitost.](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/06_problematika_razeni/06_problematika_razeni.md)

7. Časová náročnost algoritmů. Průměrné a nejhorší chování. Úlohy P, NP a NP-úplné.

8. Definice konečného automatu, jazyky rozpoznávané konečnými automaty.

9. [Gramatiky, Chomského hierarchie, vztah gramatik ke konečným strojům.](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/09_gramatiky/09_gramatiky.md)

10. Turingův stroj, problém zastavení, totální a parciální rozhodnutelnost tříd problémů, rekurzivní a rekurzivně spočetné množiny, jejich vztah.

11. Pojmy šifrování, kódování, symetrické šifry (afinní, Vigener, Hill, jednoduchá transpozice), asymetrické šifry (RSA), Feistelovy šifry, princip, příklady (DES, AES, NDS).

12. Minimální kódy, princip, použití, konstrukce Huffmanova kódu, aritmetické kódy.

13. Operační systém a jeho základní úlohy – správa paměti, správa procesů, životní cyklus procesu, přidělování procesoru, správa periferií, problém uváznutí a metody jeho předcházení.

14. Databázové systémy – relační a objektový model dat, NoSQL databáze (typy škálování, teorém CAP).

15. Normalizace v relačním modelu, bezztrátová dekompozice, datové modelování (ER/ERA diagramy), funkční analýza (DFD diagramy), optimalizace databázových struktur (typy indexů a případy jejich využití).

16. Jazyk SQL (DDL, DML, množinové operace), uložené procedury a spouště v SQL, transakce (ACID, typy konfliktů, stupně izolace).

17. Programování síťových operací, koncepce socketů a jejich využití, blokující a neblokující komunikační operace.

18. [WWW aplikace, programování na straně klienta a serveru, jejich možnosti a omezení, nejběžnější používané prostředky a jazyky, uchovávání stavové informace, cookie.](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/18_www_aplikace/18_www_aplikace.md)

19. Alternativní přístupy k programování – funkcionální programování a Lambda kalkulus, náhrada cyklu rekurzí, logické programování, rezoluční mechanismus a jazyk Prolog.

20. Deterministické číslicové signály – popis v časové oblasti, periodicita, DTFT/DFT spektrum, krátkodobá spektrální analýza (STFT) + využití okénkových funkcí, vzorkovací teorém, kvantizace.

21. LTI číslicové systémy – vlastnosti (linearita, kauzalita, stabilita), impulsní odezva (FIR/IIR), frekvenční charakteristika, přenosová funkce, skupinové zpoždění, lineární diferenční rovnice konstantními koeficienty, systém s lineární a minimální fází.

22. Návrh číslicových filtrů – toleranční schéma, základní druhy filtrů (DP, HP, PP, PZ, Allpass), návrh FIR filtrů (metoda oken, metoda vzorkování frekvenční charakteristiky), typy IIR filtrů, porovnání vlastností FIR/IIR filtrů.

23. DFT/FFT (radix-2) – vlastnosti a výpočetní složitost, linearní a kruhová konvoluce, rychlý výpočet lineární konvoluce pomocí FFT (metoda overlap-add, overlap-save).

24. Rozdělení a architektury programovatelných zákaznických obvodů, jazyky pro popis technických prostředků, charakteristické rysy jazyka VHDL.

25. Zásady návrhu elektronických systémů (základní struktura systému, pravidla synchronního návrhu, přenos signálů mezi časovými doménami).

26. Základní architektury počítačů, architektury mikroprocesorů, architektury signálových a grafických procesorů, architektury mikrořadičů, hodnocení výkonnosti počítačů, Amdahlův zákon, výkonnostní rovnice procesoru, srovnání systémů CISC a RISC.

27. [Paralelní systémy, kategorie, paralelizace zpracování, víceprocesorové systémy, programování v paralelních a distribuovaných systémech – přístupy, prostředky, metody vzájemné synchronizace.](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/27_paralelni_systemy/27_paralelni_systemy.md)

28. Významné průmyslové komunikační systémy a sběrnice v počítačových systémech (CAN, Ethernet, Modbus, SPI, I2C, RS-232, USB, PCI-e, SATA), topologie, charakteristické vlastnosti.

29. [Abstraktní datové typy, seznam, fronta, zásobník, halda, strom, asociativní pole.](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/29_abstraktni_datove_typy/29_abstraktni_datove_typy.md)

30. [Vyhledávání lineární a binární, datové struktury optimalizované pro vyhledávání a práce s nimi, binární vyhledávací strom, 2-3 strom, B strom, hashování.](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/30_vyhledavani/30_vyhledavani.md)

## Převzaté materiály

Některé obrázky nebo materiály nemusí být naše vlastní a mohou být odněkud přejaté. Vzhledem k tomu, že je někdy obtížné dohledat licenční podmínky užití obrázku, mohlo se stát, že jsme něco použili neoprávněně. Pokud nararazíte na nějaký obrázek či materiál, k němuž máte práva, a nesouhlasíte s jeho použitím v těchto materiálech, dejte nám prosím vědět, abychom ho mohli odstranit.

## Used content

Please note that some content may not be ours. If you are the owner of an content we have used without your permission and you do not agree with its use as a part of this educational material, please contact us so we may remove it.

## Kontakt

Tomáš Křížek: tomas.krizek(at)mailbox.org

Jan Gabriel: jan.gabriel(at)jxg.cz

