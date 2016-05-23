# 29. - Abstraktní datové typy
>Abstraktní datové typy, seznam, fronta, zásobník, halda, strom, asociativní pole.

**Abstraktní datové typy (ADT)**

- matematický model nezávislý na konkrétní implementaci v konkrétním programovacím jazyce
- popisuje chování (možné operace) z hlediska uživatele dat
- často se u nich uvádí časová či paměťová složitost (důležité z hlediska efektivního návrhu různých algoritmu)
- uživatel používá pouze obecné rozhraní ADT a konkrétní implementace mu zůstává skryta
- ADT může mít více různých implementací, např. seznam lze implementovat jako pole nebo jako spojový seznam
- jazyky mají ve svých standartních knihovnách obvykle obsaženy optimalizované implementace ADT

**Datové struktury**

- narozdíl od ADT se jedná o konkrétní organizaci dat v paměti
- definuje je ten, kdo je implementuje
- například binární haldu lze uložit do pole

**Datové typy**

- určují rozsah hodnot a definované operace pro proměnou daného typu

## Vlastnosti
Nejdůležitější vlastnosti abstraktního typu dat jsou:

- **Univerzálnost:** - navržený adt je univerzální a může být použit v libovolném programu (jako hodnota libovolný datový typ)
- **Zapouzdření:** - vnitřní reprezentace je skryta za transparetní rozhraní, které je poskytováno uživateli (uživatel ví jak použít, ne jak je implementováno)
- **Integrita:** - do vnitřní struktury nelze zasahovat jinak, než přes definované rozhraní (zamezuje nechtěnému poškození dat)
- **Modularita:** - konkrétní implementaci implementaci na spodu je možné libovolně měnit (vylepšovat), aniž by bylo nutné přeisovat programy, které adt využívají (abstrakce modelu od konkrétní implementace)

Pokud je ADT programován objektově, jsou většinou tyto vlastnosti splněny.

## Základní operace
Na abstraktním datovém typu rozlišujeme tři druhy základních operací:

- **konstruktor** zodpovídá za správnou inicializaci a sestavené platné reprezentace datového typu na základě dodaných parametrů
- **selektor** slouží k získání hodnot (get, empty, peek)
- **modifikátor** provádí změnu hodnoty (add, remove, pop)

## Příklady
K základním abstraktním datovým typům můžeme zařadit následující konstrukce:

- **zásobník** (stack)
- **fronta** (queue)
- **seznam** (list)
- **množina** (set)
- **strom** (tree) - speciálním typem stromu je **halda** (heap)
- **zobrazení** (map) - také známé jako **asociativní pole** (hash)

### Seznam
- kontejner pro ukládání dat předem neznámé délky
- nerozdíl od množiny (set) se mohou stejné prvky opakovat

Typické operace:
- **add**: vložení hodnoty na konec seznamu
- **remove**: odstranění hodnoty z určitého indexu (prvky za se přisunou)
- **get**: čtení hodnoty z určitého indexu
- **empty**: testování, zda je seznam prázdný
- **size**: dotaz na velikost seznamu

Implementace je obvykle realizována jako:

- **Dynamické pole**
  - postaveno na statickém poli pevné velikosti
  - při vkládání kontrolujeme velikost a vnitřního pole a případně ho zvětšíme
  - v kontruktoru obvykle předáváme počáteční velikost vnitřního pole
  - díky vnitřnímu poli umožňuje rychlejší vyhledávání prvku dle indexu (je možné realizovat binární vyhledávání)
- **Spojových seznam**
  - jednotlivé prvky jsou reprezentovány vždy jako uzly, které mají odkaz na svého následníka (případně i předchůdce)
  - uzly je nutné při vyhledávání procházet postupně (pouze lineární vyhledávání)

Spojové seznamy (linked list) mohou existovat **jednosměrné** a **obousměrné**.V jednosměrném seznamu odkazuje každá položka na položku následující a v obousměrném seznamu odkazuje položka na následující i předcházející položky. Zavádí se také ukazatel nebo reference na aktuální (vybraný) prvek seznamu. Na konci (a začátku) seznamu musí být definována zarážka označující konec seznamu.Pokud vytvoříme cyklus tak, že konec seznamu navážeme na jeho počátek, jedná se o **kruhový seznam**. Viz následující ukázky.

![Jednosměrný seznam](29_jendosmerny_seznam.png)

*Jednosměrný seznam*

![Obousměrný seznam](29_obousmerny_seznam.png)

*Obousměrný seznam*

![Kruhový seznam](29_kruhovy_seznam.png)

*Kruhový seznam*

### Fronta

- prvek, který byl nejdříve přidán, bude také nejdříve odebrán
- anglické označení First In First Out (FIFO)
- implementace pomocí spojových seznamů (výhodný je obousměrný) nebo pole
- využití:
  - plánování procesů v OS (FCFS)
  - meziprocesová komunikace - roura (pipe)
  - síťová komunikace - buffer pro datové pakety (switch, bridge, router)

Typické operace:

- **enqueue**: vložení hodnoty na konec fronty
- **dequeue**: odstranění hodnoty ze začátku fronty
- **front**: čtení hodnoty na začátku fronty
- **empty**: testování, zda je fronta prázdná
- **size**: dotaz na velikost fronty

![Fronta](29_fronta.png)

*Fronta*

### Zásobník

- prvek, který byl naposled přidán bude nejdříve odebrán
- anglické označení Last In First Out (LIFO)
- implementace pomocí pole nebo spojových seznamů

Typické operace:

- **push**: vložení hodnoty na vrchol zásobníku,
- **pop**: odstranění hodnoty z vrcholu zásobníku
- **top**: čtení hodnoty z vrcholu zásobníku
- **empty**: testování, zda je zásobník prázdný
- **size**: dotaz na velikost zásobníku

![Zásobník](29_zasobnik.png)

*Zásobník*

### Strom

- hierarchická struktura
- každý uzel může mít několik synů (přímých potomků)
- všechny uzly kromě kořenového uzlu mají právě jednoho otce
- uzel, který nemá žádné potomky (je koncový) se nazývá *list*
- vlastnost býti stromem je rekurzivní, každý podstrom je také strom
- použití:
  - halda
  - vyhledávací strom

![Strom](29_strom.png)

*Strom*

**Vlastnosti:**

- **N-arita** - Kolik smí mít každý uzel maximálně potomků, z tohoto hlediska patří mezi neoblíbenější binární stromy (každý uzel má 0, 1 nebo 2 potomky).
- **Hloubka uzlu** - Hloubka uzlu je délka cesty od kořene k uzlu
- **Výška stromu** - Je rovna hodnotě maximální délky stromu.
- **Šířka stromu** - Počet uzlů na stejné úrovni.
- **Vyváženost** - Strom je vyvážený, jestliže má uzly rovnoměrně rozložené tak, že má nejmenší možnou výšku.

**Procházení stromem:**

1. Průchod do šířky

  Projdou se nejprve všechny uzly stromu v jedné hloubce a až poté se pokračuje do další hladiny, kde se opět projdou všechny uzly v dané hloubce.

2. Průchod do hloubky

  Procházení začíná v kořeni stromu a postupuje se po potomcích uzlu. Procházení končí, když už v žádné větvi není nenavšívený potomek.


  - *Preorder*
    - proveď akci
    - projdi levý podstrom
    - projdi pravý podstrom
  - *Inorder*
    - projdi levý podstrom
    - proveď akci
    - projdi pravý podstrom
  - *Postorder*
    - projdi levý podstrom
    - projdi pravý podstrom
    - proveď akci

**Příklad průchodu stromem**

![Ukázka stromu](29_strom_preorder_inorder_postorder.png)

*Ukázka stromu*

N = navštívený uzel, L = levý, R = pravý

- Preorder (NLR): F, B, A, D, C, E, G, I, H
- Inorder (LNR): A, B, C, D, E, F, G, H, I
- Postorder (LRN): A, C, E, D, B, H, I, G, F
- Procházení do šířky (po vrstvách) Level-order: F, B, G, A, D, I, C, E, H

#### Halda
- stromová struktura splňující vlastnost haldy, tj. pokud ![B](https://latex.codecogs.com/gif.latex?B) je potomek ![A](https://latex.codecogs.com/gif.latex?A), tak
  - ![x(B) \geq x(A)](https://latex.codecogs.com/gif.latex?x%28B%29%20%5Cgeq%20x%28A%29) pro *max heap* nebo
  - ![x(B) \leq x(A)](https://latex.codecogs.com/gif.latex?x%28B%29%20%5Cleq%20x%28A%29) pro *min heap*
- vlastnost býti haldou je rekurzivní, všechny podstromy haldy jsou také haldy
- tvar stromu je buď perfektně vyvážený, nebo pokud je poslední úroveň stromu nekompletní, uzly plní strom zleva doprava
- efektivita operací haldy je klíčová pro mnoho algoritmů
- často se používá pro implementaci prioritní fronty (na tomto principu funguje heapsort)

![Binární minimální halda](29_binarni_min_halda.png)

*Binární minimální halda*

Operace s haldou:

- INSERT - přidání nového prvku do haldy
- DELETE MAX nebo DELETE MIN - vyjmutí kořenu v max heap nebo v min heap
- DELETE(v) - smaže uzel „v“
- MIN, MAX - vrátí minimální resp. maximální klíč v haldě
- DECREASE KEY(v, okolik) - zmenšení klíče uzlu „v“ o hodnotu „okolik“
- INCRESE KEY(v, okolik) - zvětšení klíče uzlu „v“ o hodnotu „okolik“
- MERGE - spojení dvou hald do jedné nové validní haldy obsahující všechny prvky obou původních
- MAKE - dostane pole N prvku a vytvoří z nich haldu

Složitost operací:

- Stavba haldy - ![\mathcal{O}(n)](https://latex.codecogs.com/gif.latex?%5Cmathcal%7BO%7D%28n%29)
- Získání hodnoty kořene - ![\mathcal{O}(1)](https://latex.codecogs.com/gif.latex?%5Cmathcal%7BO%7D%281%29)
- Vložení/odstranění/nalezení prvku - ![\mathcal{O}(\log_2 n)](https://latex.codecogs.com/gif.latex?%5Cmathcal%7BO%7D%28%5Clog_2%20n%29)
- Sloučení hald - ![\mathcal{O}(n)](https://latex.codecogs.com/gif.latex?%5Cmathcal%7BO%7D%28n%29)

Binární haldu lze reprezentovat do pole (pro prvek n indexováný od nuly):

- 2n+1 hodnota pro levý podstrom
- 2n+2 hodnota pro pravý podstrom

### Zobrazení (Asociativní pole)
- prvkům z množiny klíčů přiřazuje nejvýše jednu hodnotu (klíč => hodnota)
- různá označení (Hash, HashMap, HashTable, AsociativeArray, Dictionary)
  - mapa (Java, C++)
  - slovník (.NET, Python)
  - asociativní pole (Javascript, PHP)
- v porovnání s obecným polem může být klíčem i nečíselný typ datový typ klíče musí pouze implementovat operaci porovnání
- rychlé hledání podle klíče
- nelze prohledávat podle částečného klíče
- z klíče nelze přímo spočítat umístění prvku v poli - používá se *hashovací funkce*

Více viz hašování v otázce [30. Vyhledávání](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/29_abstraktni_datove_typy/29_abstraktni_datove_typy.md).

## Odkazy

http://www.cs.vsb.cz/benes/vyuka/upr/texty/adt/index.html

https://cs.wikipedia.org/wiki/Abstraktn%C3%AD_datov%C3%BD_typ

https://www.algoritmy.net/article/30/Zasobnik
