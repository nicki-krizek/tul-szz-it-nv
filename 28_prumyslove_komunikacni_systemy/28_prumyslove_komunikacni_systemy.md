# 28. - Průmyslové komunikační systémy
>Významné průmyslové komunikační systémy a sběrnice v počítačových systémech (CAN, Ethernet, Modbus, SPI, I2C, RS-232, USB, PCI-e, SATA), topologie, charakteristické vlastnosti.

**Průmyslové komunikační systémy** vznikly pro usnadnění řízení rozsáhlých procesů v průmyslu. Patří sem například strojní, letadlový, automobilový, potravinový průmysl atd.

Komunikační systémy pro tato odvětví by měly být:

- **robustní** - decentralizované řešení rozložené po celé “hale”
- **oddolné** - nutné rychlé a bezporuchové měření spolu s ovládáním akčních členů (to i v zarušeném prostředí)
-  **spolehlivé** - zpravidla nutnost dodržet zpracování v určitém intervalu (worst time)
-  **dostupné** - používají se stovky metrů, cena tedy hraje významnou roli
- **flexibilní** - nutnost přizpůsobit systém požadavkům zákazníka

**Časté jsou různé standartizační komise, které zabraňují drahým vendor lockům.**

**Pomyslné rozdělení**

Uvedená směs sběrnic je hodně různoroda a můžeme jí rozdělit do několika pomyslných skupin podle specifického použití. (neoficiální dělení)

- **Průmyslové** (CAN, RS-232 a asi i Ethernet)
    - pracují na vzdálenost desítky metrů
    - nejsou potřeba velké přenosové rychlosti
    - odolné proti rušení (kompromis na úkor přenosové rychlosti)
    - hardware je obvykle odolný na vysoké teploty, prach a elektromagnetické záření
    - povětšinou sériové (dlouhé paralelní sběrnice jsou drahé)
    - topologie bývá řetězová (od jednoho prvku k druhému, levnější než vše svádět do centrální jednotky)
- **Mikrokontrolerové** (SPI, I2C)
    - komunikují na krátkou vzdálenost (mezi komponenty na desce nebo mezi systémy)
    - nenáročná implementace (realizováno na jednoduchém hardware, integrace)
    - obvykle také sériové
    - nejsou potřeba velké přenosové rychlosti
    - obvykle spojené na pevno (nemá konektor)
- **Počítačové** (USB, PCI-e, SATA)
    - krátká až středně dlouhá komunikační vzdálenost
    - obvykle velké nároky na přenosovou rychlost (pro sysokou rychlost paralelní)

## Sběrnice
Sběrnice mohou být:

- **sériové** (všechny uvedené)
- **paralelní** (málo používané)

Důvody k postupnému přechodu na sériové sběrnice jsou v zásadě dva. Synchronizace přenosu jednotlivých bitů paralelně je při vyšších rychlostech velmi složitá a narážíme na technologické limity, proto může být sériová sběrnice paradoxně rychlejší. Vodiče pro sériovou komunikaci jsou mnohem tenčí a praktičtější, to se také následně odráží na výsledné ceně. Pro realizaci delších sběrnic se jedná o poměrně významný faktor.

### CAN

### RS-232

### Ethernet

### SPI

### I2C

### USB

### SATA

### PCI-e

## Protokoly

### Modbus

###ProfiNet

### ProfiBus

