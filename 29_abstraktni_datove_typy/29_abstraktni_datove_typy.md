# 27. - Abstraktní datové typy
>Abstraktní datové typy, seznam, fronta, zásobník, halda, strom, asociativní pole.

**Abstraktní datové typy** jsou nezávislé na vlastní implementaci. Hlavním cílem je zjednodušit a zpřehlednit program, který provádí operace s daným datovým typem. Protože některé abstraktní datové typy jsou velmi užitečné a běžně používané, různé programovací jazyky používají tyto **ADT** jako primitivní datové typy, které jsou přidány do jejich standardních knihoven. Při programování je ADT reprezentován rozhraním, které skrývá vlastní implementaci. Programátor tak pouze využívá poskytované rozhraní a definované operace.  V praxi je rozdíl mezi abstraktním datovým typem a datovou strukturou použitou pro jeho implementaci. Například seznam jako ADT může být implementován jako pole, nebo jako spojový seznam. Výběr vhodné abstraktní datové struktury je tedy rozhodující pro design účinných algoritmů a pro odhad jejich složitosti.

**Datový typ** je rozsah hodnot, které může proměnná určitého datovému typu přijmout, a množina
operací (funkce, metody nebo procedury), které jsou pro tento datový typ specifikovány. "+" je například
definován pro numerické typy, a v některých programovacích jazycích pro typ string (řetězec). "-" je naproti
tomu zpravidla definován jen pro numerické typy dat.

## Vlastnosti
Nejdůležitější vlastnosti abstraktního typu dat jsou:

- **Všeobecnost implementace:** Jednou navržený ADT může být zabudován a bez problémů používán v jakémkoli programu.
- **Přesný popis:** Propojení mezi implementací a rozhraním musí být jednoznačné a úplné.
- **Jednoduchost:** Při používání se uživatel nemusí starat o vnitřní realizaci a správu ADT v paměti.
- **Zapouzdření:** Rozhraní by mělo být pojato jako uzavřená část. Uživatel by měl přesně vědět, co ADT dělá, ale ne jak to dělá.
- **Integrita:** Uživatel nemůže zasahovat do vnitřní struktury dat. Tím se výrazně sníží riziko nechtěného smazání nebo změna již uložených dat.
- **Modularita:** „Stavebnicový“ princip programování je přehledný a umožňuje snadnou výměnu části kódu. Při hledání chyb mohou být jednotlivé moduly považovány za kompaktní celky. Při zlepšování ADT není nutné zasahovat do celého programu.

Pokud je ADT programován objektově, jsou většinou tyto vlastnosti splněny.

## Operace
Na abstraktním datovém typu rozlišujeme tři druhy operací: **konstruktor**, **selektor** a **modifikátor**. Operace, která ze zadaných parametrů vytváří novou hodnotu abstraktního datového typu, se nazývá konstruktor. Úkolem *konstruktoru* je sestavení platné vnitřní reprezentace hodnoty na základě dodaných parametrů. Operace označovaná jako *selektor* slouží k získání hodnot, které tvoří složky nebo vlastnosti konkrétní hodnoty abstraktního datového typu, a konečně operace typu *modifikátor* provádí změnu hodnoty datového typu.

## Příklady
K základním abstraktním datovým typům můžeme zařadit následující konstrukce:

- **zásobník** (stack)
- **fronta** (queue)
- **seznam** (list)
- **množina** (set)
- **strom** (tree) - speciálním typem stromu je **halda** (heap)
- **zobrazení** (map) - také známá jako **asociativní pole** (hashmap)

### Seznam

### Fronta

### Zásobník

### Strom

### Halda

### Asociativní pole