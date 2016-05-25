# 26. - Základní architektury počítačů
>Základní architektury počítačů, architektury mikroprocesorů, architektury signálových a grafických procesorů, architektury mikrořadičů, hodnocení výkonnosti počítačů, Amdahlův zákon, výkonnostní rovnice procesoru, srovnání systémů CISC a RISC.

## Základní pojmy
**Procesorem** se rozumí základní jednotka počítače, tj. logický automat pro zpracování informací, obsahující aritmetickou jednotku a řadič (počítač bez periferních zařízení a bez hlavní paměti), chování je definováno programem.

**Mikroprocesor** je malý procesor vyráběný technologií velké integrace, určen především na výpočty a logické funkce, je přednostně orientován na operace nad slovy. Mikroprocesor nemůže samostatně pracovat! 

**Mikrořadič** (microcontroller, monolitický mikropočítač, jednočipový mikropočítač) je mikropočítač v jednom integrovaném obvodu. Většinou k němu stačí připojit krystalový rezonátor, napájení, vstupní a výstupní zařízení a samozřejmě vložit program, podle něhož bude pracovat.

## Architektury počítačů
*Architektura počítačů je metoda vytváření počítačových systémů z menších celků.*

Architektura je globální pohled na všechny podstatné vlastnosti počítačů, zahrnuje:

- **strukturu** – popis propojení jednotlivých funkčních bloků
- **organizaci** – popis dynamických interakcí FB a řízení styku mezi nimi
- **realizaci** – popis návrhu a vnitřní struktury jednotlivých FB
- **funkci** – popis chování počítače jako celku

Počítač tvoří:

- **CPU** (Central Processing Unit) - procesor
- **ALU** (Arithmetical and Logical Unit) – aritmeticko-logická jednotka
- **CU** (Control / Central Unit) – řadič, řídicí jednotka

### Von Neumanova koncepce
Charakteristické vlastnosti lze shrnout do následujících bodů:

1. struktura počítače je nezávislá na typu řešené úlohy, počítač se programuje obsahem paměti
2. instrukce a operandy jsou v téže paměti
3. paměť je rozdělena do buněk stejné velikosti, jejich pořadová čísla se používají jako adresy
4. program je tvořen posloupností elementárních příkazů (instrukcí), které se provádějí jednotlivě v pořadí, v němž jsou zapsány do paměti
5. změna pořadí provádění instrukcí se vyvolá instrukcí podmíněného nebo nepodmíněného skoku
6. pro reprezentaci instrukcí i čísel se používají dvojkové signály a dvojková číselná soustava
7. programem řízené zpracování dat probíhá v počítači samočinně (tok dat řídí řadič)
8. zpracování dat probíhá v tzv. diskrétním režimu (během výpočtu nelze s počítačem komunikovat)
9. vstupy (resp. výstupy) jsou koncipovány jako datové zdroje (resp. výsledky) a jsou tedy přímo napojeny na ALU.

**Nevýhodou je možnost mylně interpretovat data jako program.**

![Von Neumannova koncepce](26_vonneumann.png)

*Von Neumannova koncepce*

### Harvardská koncepce
Základní principy (rozdíly vůči von Neumannově archit.):

1. paměť programu je oddělena od paměti dat - možnost ve stejném okamžiku načítat instrukci a přistupovat k datové paměti - datová a programová paměť mohou mít odlišnou organizaci
2. oddělené sběrnice
3. řízení procesoru je odděleno od řízení vstupních a výstupních jednotek (nejsou napojeny přímo na ALU)

**Možnost rychlejšího zpracování většího objemu dat.**

![Harvardská koncepce](26_harvard.png)

*Harvardská koncepce*

*Rychlé moderní procesory spojují obě architektury. Uvnitř procesoru je použita Harvardská architektura, kde se paměť cache dělí na paměť instrukcí a paměť pro data. Ovšem celý procesor se „z venku“ chová jako procesor s architekturou von Neumannovou, protože načítá data i program z hlavní paměti na jednou.*

## Architektura procesoru
**Procesor se skládá z:**

- **řídicí jednotky** CU (Control Unit) – řadič
- **aritmeticko-logické jednotky** ALU (Arithmetic Logic Unit)
- **sady registrů** RS (Register Set), které uchovávají různé hodnoty během práce počítače (zápisníková paměť) ALU + RS je někdy označuje jako operační jednotka
- **programového čítače** PC (Program Counter) – často se uvádí jako jeden registr RS nebo součást řadiče
- **vnitřní sběrnice** - řeší spojení mezi bloky CPU (typy - datová, adresová, řídicí), od každého typu může být v architektuře i více sběrnic

![Model Procesoru](26_model_procesoru.png)

*Model Procesoru*

**Existují 2 koncepce řadičů:**

- řadič je speciální sekvenční automat, který má čítač a dekodér (je dražší, ale rychlejší) – obvodový řadič (založen na kombinačních logických obvodech)
- dekódování operačního znaku vykonává řídicí paměť, ve které jsou mikroprogramy uloženy – mikroprogramový řadič (založen na výběru z paměti ROM).

**Kategorie procesorů:**

- Univerzální (Intel, AMD, …)
- Grafické (Nvidia, ATI, …)
- Signálové (TI, AD, …)
- Aplikační (pro mobilní telefony, …)
- Multimediální (TI, Mpact, …)
- Speciální (šifrovací, kompresní, hrací, …)

**Architektura souboru instrukcí** (ISA)

Souhrn vlastností počítačového systému viděného z pohledu programátora v strojovém jazyce (koncept struktury, funkčního chování)

*Skládá se z:*

- seznamu instrukcí procesoru
- datových typů
- dostupných režimů, jež jsou k dispozici
- seznamu registrů
- pravidel pro manipulaci s výjimkami a přerušeními

*Dělíma na:*

- **Střadačově orientovaná ISA** (dominantní střadač)
- **Zásobníkově orientovaná ISA** (vše se děje přes zásobník [java bytecode procesory])
- **ISA s univerzálními registry** (nejpoužívanější architektura, mnoho univerzálních registrů)

*Instrukční cyklus:*

- načtení instrukce (instruction fetch)
- dekódování (instruction decode)
- načtení operandů (operand fetch)
- vykonání operace (execution)
- obsluha paměti (memory)
- zápis výsledku (write back)

**Vývoj procesorů lze rozdělit do několika fází:**

- **Subskalární procesory** (Tradiční sekvenční provádění instrukcí.)
- **Skalární procesory** (Sekvenční zpracování částečně nahrazeno zpracováním paralelním (např. zřetězené zpracování, či něklok jednotek), v každý okamžik se dokončí jen jedna instrukce.)
- **Superskalární procesory** (Umí dokončit více instrukcí za jeden cyklus.)

**Procesory dělíme podle typu na:**

**CISC**

Complex Instruction Set Computer. Dříve byly operační paměti výrazně pomalejší než procesory (doba přístupu byla několik taktů CPU), zpomalování výpočtů opakovaným načítáním instrukcí, snaha rozšiřovat instrukční soubor, mnoho složitých instrukcí používaných jen zřídka.

- proměnná délka instrukcí
- zpracování instrukcí ve více strojových cyklech (CPI ~ 5-10)
- velký počet adresovacích módů
- díky vysoké složitosti byl řadič navržen na principu paměti s mikroprogramy (ROM)
- řídicí obvody zabírají na čipu přibližně 60% místa
- pro překlad programů bývá zpravidla jednodušší překladač
- používá se zpravidla GPR ISA (varianta R-M, M-M)
- s postupem doby se začíná používat zřetězené zpracování (zejména s rozkladem na mikroinstrukce)

**RISC**

Reduced Instruction Set Computer, (použit poprvé 1974) počátkem 80.let první RISC procesory. Snaha přesunout některé složité a zřídka používané CISC instrukce z mikroprogramů do programů (zvětšení počtu instrukcí v programu, ale snížení CPI).

- malý počet relativně jednoduchých instrukcí (důležitý není až tak počet, ale jednoduchost) (asi 40–150)
- jednoduché instrukce umožňují vyšší frekvenci
- implementováno proudové zpracování instrukcí - v každém taktu se většinou dokončí jedna instrukce (CPI < 1,5)
- instrukce mají většinou pevnou délku a malý počet formátů,
- řadič s pevnou logikou místo mikroprogramování (rychlé)
- řídicí obvody zabírají pouze 6–10 % místa (obvodový řadič)
- velký počet programově dostupných registrů (32–192)
- operace s daty pouze nad registry (2 zdrojové, 1 cílový)
- registry jsou víceúčelové (jednodušší překladače)
- přístup do paměti pouze pomocí instrukcí přesunu (mluvíme o architektuře L/S – instrukce Load a Store)
- malý počet adresových módů (3–5)
- ortogonální instrukční soubor (ve všech instrukcích, které používají registr procesoru jako zdrojový nebo cílový operand, lze použít libovolný registr)
- pro zvýšení účinnosti pipeline optimalizující kompilátor pro naplánování instrukcí
- nejčastěji harvardská architektura

**PostRISC (CRISC)**

*Do této kategorie je možné zařadit většinu současných CPU*

- kombinace CISC a RISC (navenek CISCové, ale vnitřní konstrukci mají RISCovou)
- instrukce trvají různě dlouhou dobu
- instrukce se rozloží na jednoduché mikroinstrukce
- proudové zpracování mikroinstrukcí
- větší množství paralelních operací
- spekulativní provádění instrukcí
- nadále dochází k dalšímu rozšiřování instrukční sady, zaměřené hlavně do multimediální oblasti a grafiky
- většinou se zachovává zpětná kompatibilita

## Architektura mikrořadičů

## Hodnocení výkonu
### Výkonostní rovnice
Výkonnostní rovnice CPU: TCPU = IC.CPI.Tclk
oproti CISC je u programů CPI výrazně nižší než nárůst IC => výkon roste, navíc je
možné zvýšit Tclk

### Amhdálův zákon
doplnit