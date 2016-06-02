# 2. - Základy teorie dělitelnosti

> Základy teorie dělitelnosti – základní pojmy (NSD, NSN, Eukleidův algoritmus), řetězové zlomky, kongruence modulo m, úplná a redukovaná soustava zbytků, počítání v (Zm, +, .), řešení kongruencí 1. stupně a jejich soustav.

## Základní pojmy

Relace *býti dělitelem* ... ![\mid](https://latex.codecogs.com/svg.latex?%7C)

![b \mid a \leftrightarrow \exists q \in \mathbb{Z}: a = b \cdot q](https://latex.codecogs.com/svg.latex?b%20%5Cmid%20a%20%5Cleftrightarrow%20%5Cexists%20q%20%5Cin%20%5Cmathbb%7BZ%7D%3A%20a%20%3D%20b%20%5Ccdot%20q)

![b](https://latex.codecogs.com/svg.latex?b) dělí ![a](https://latex.codecogs.com/svg.latex?a) právě tehkdy, když existuje nějaké celé číslo ![q](https://latex.codecogs.com/svg.latex?q), že ![a = b \cdot q](https://latex.codecogs.com/svg.latex?a%20%3D%20b%20%5Ccdot%20q)

- ![b](https://latex.codecogs.com/svg.latex?b) ... *dělitel* čísla ![a](https://latex.codecogs.com/svg.latex?a)
- ![a](https://latex.codecogs.com/svg.latex?a) ... *násobek* čísla ![b](https://latex.codecogs.com/svg.latex?b)
- ![q](https://latex.codecogs.com/svg.latex?q) ... podíl

**Společný dělitel**

![d \in \mathbb{N}^+](https://latex.codecogs.com/svg.latex?d%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;) je *společný dělitel* čísel ![a,b \in \mathbb{Z}](https://latex.codecogs.com/svg.latex?a%2Cb%20%5Cin%20%5Cmathbb%7BZ%7D), jestliže

![d \mid a~\wedge~d \mid b](https://latex.codecogs.com/svg.latex?d%20%5Cmid%20a%7E%5Cwedge%7Ed%20%5Cmid%20b) ... (dělí obě čísla beze zbytku)

**Společný násobek**

![D \in \mathbb{N}^+](https://latex.codecogs.com/svg.latex?D%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;) je *společný násobek* čísel  ![a, b \in \mathbb{N}^+](https://latex.codecogs.com/svg.latex?a%2C%20b%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;), jestliže

![a \mid D~\wedge~b \mid D](https://latex.codecogs.com/svg.latex?a%20%5Cmid%20D%7E%5Cwedge%7Eb%20%5Cmid%20D) ... (obě čísla dělí tento násobek beze zbytku)

![max(a, b) \leq D \leq a \cdot b](https://latex.codecogs.com/svg.latex?max%28a%2C%20b%29%20%5Cleq%20D%20%5Cleq%20a%20%5Ccdot%20b)

### Největší společný dělitel (NSD)

![NSD(a, b)](https://latex.codecogs.com/svg.latex?NSD%28a%2C%20b%29) ... **největší společný dělitel** čísel ![a, b](https://latex.codecogs.com/svg.latex?a%2C%20b)

Pokud ![a, b \in \mathbb{Z} - \{0\}](https://latex.codecogs.com/svg.latex?a%2C%20b%20%5Cin%20%5Cmathbb%7BZ%7D%20-%20%5C%7B0%5C%7D), pak ![NSD(a, b)](https://latex.codecogs.com/svg.latex?NSD%28a%2C%20b%29) existuje vždy a je určen jednoznačně.

Platí: ![1 \leq NSD(a, b) \leq min(a, b)](https://latex.codecogs.com/svg.latex?1%20%5Cleq%20NSD%28a%2C%20b%29%20%5Cleq%20min%28a%2C%20b%29)

![NSD(a, b) = 1](https://latex.codecogs.com/svg.latex?NSD%28a%2C%20b%29%20%3D%201) čísla jsou **nesoudělná**

#### Jak nalézt NSD?

1. metoda hrubé síly
2. Euklidův algoritmus
3. dvojkový NSD algortimus
4. pomocí kanonických rozkladů

Pro více čísel:

- kanonické rozklady (prvočísla)
- udělám NSD dvou a postupně přidávám další čísla ![NSD(a, b, c) = NSD(NSD(a, b), c)](https://latex.codecogs.com/svg.latex?NSD%28a%2C%20b%2C%20c%29%20%3D%20NSD%28NSD%28a%2C%20b%29%2C%20c%29)

### Nejmenší společný násobek (NSN)

![NSN(a, b)](https://latex.codecogs.com/svg.latex?NSN%28a%2C%20b%29) ... nejmenší společný násobek čísel ![a, b](https://latex.codecogs.com/svg.latex?a%2C%20b)

Existuje a je určen jednoznačně.

#### Jak nalézt NSN?

1. metoda hrubé síly
2. Euklidův algoritmus

Pro více čísel: obdobně jako u NSD.

### Souvislost mezi NSD a NSN

![a \cdot b = NSN(a, b) \cdot NSD(a, b)](https://latex.codecogs.com/svg.latex?a%20%5Ccdot%20b%20%3D%20NSN%28a%2C%20b%29%20%5Ccdot%20NSD%28a%2C%20b%29)


### Kanonické rozklady

![192 = 2^6 \cdot 3](https://latex.codecogs.com/svg.latex?192%20%3D%202%5E6%20%5Ccdot%203)

![108 = 2^2 \cdot 3^3](https://latex.codecogs.com/svg.latex?108%20%3D%202%5E2%20%5Ccdot%203%5E3)

![180 = 2^2 \cdot 3^2 \cdot 5](https://latex.codecogs.com/svg.latex?180%20%3D%202%5E2%20%5Ccdot%203%5E2%20%5Ccdot%205)

Pro nalezení ![NSD(192, 108, 180)](https://latex.codecogs.com/svg.latex?NSD%28192%2C%20108%2C%20180%29) vezmu z rozkladů ty prvočísla, která se vyskytují *ve všech* rozkladech a to v jejich *nejmenší* mocnině.

![NSD(192, 108, 180) = 2^2 \cdot 3 = 12](https://latex.codecogs.com/svg.latex?NSD%28192%2C%20108%2C%20180%29%20%3D%202%5E2%20%5Ccdot%203%20%3D%2012)

Pro nalezení ![NSN(192, 108, 180)](https://latex.codecogs.com/svg.latex?NSN%28192%2C%20108%2C%20180%29) vezmu z rozkladů *všechna* prvočísla a to v jejich *nejvyšší* mocnině.

![NSN(192, 108, 180) = 2^6 \cdot 3^3 \cdot 5 = 8640](https://latex.codecogs.com/svg.latex?NSN%28192%2C%20108%2C%20180%29%20%3D%202%5E6%20%5Ccdot%203%5E3%20%5Ccdot%205%20%3D%208640)

### Euklidův algoritmus

![a = b \cdot q_0 + r](https://latex.codecogs.com/svg.latex?a%20%3D%20b%20%5Ccdot%20q_0%20&plus;%20r)

![b = r_1 \cdot q_1 + r_2](https://latex.codecogs.com/svg.latex?b%20%3D%20r_1%20%5Ccdot%20q_1%20&plus;%20r_2)

NSD je poslední nenulový zbytek (![r_{n-1}](https://latex.codecogs.com/svg.latex?r_%7Bn-1%7D)).

#### Příklad

Nalezněte ![NSD(192, 108)](https://latex.codecogs.com/svg.latex?NSD%28192%2C%20108%29) a ![NSN(192, 108)](https://latex.codecogs.com/svg.latex?NSN%28192%2C%20108%29)

| ![a](https://latex.codecogs.com/svg.latex?a) | ![b](https://latex.codecogs.com/svg.latex?b) | ![q](https://latex.codecogs.com/svg.latex?q) | ![r](https://latex.codecogs.com/svg.latex?r) |
| ---:  | ---: | ---: | ---: |
| 192 | 108 | 1 | 84 |
| 108 | 84 | 1 | 24 |
| 84 | 24 | 3 | **12** |
| 24 | 12 | 2 | 0 |

![NSD(192, 108) = 12](https://latex.codecogs.com/svg.latex?NSD%28192%2C%20108%29%20%3D%2012)

![NSN(192, 108) = \frac{192 \cdot 108}{NSD(192, 108)} = 1728](https://latex.codecogs.com/svg.latex?NSN%28192%2C%20108%29%20%3D%20%5Cfrac%7B192%20%5Ccdot%20108%7D%7BNSD%28192%2C%20108%29%7D%20%3D%201728)

### Řetězové zlomky

Číslo má ukončený rozvoj v řetězový zlomek právě tehdy, když je racionální.

Pro tvorbu zlomku se využijí koeficienty ![q](https://latex.codecogs.com/svg.latex?q) z Euklidova rozvoje.

![\frac{192}{108} = 1 + \frac{1}{1 + \frac{1}{3 + \frac{1}{2}}}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cfrac%7B192%7D%7B108%7D%20%3D%201%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7B1%7D%7B3%20&plus;%20%5Cfrac%7B1%7D%7B2%7D%7D%7D)

## Kongruence modulo m

Řekneme, že čísla ![a, b \in \mathbb{Z}](https://latex.codecogs.com/svg.latex?a%2C%20b%20%5Cin%20%5Cmathbb%7BZ%7D) jsou *kongruentní modulo* ![m \in \mathbb{N} - \{0, 1\}](https://latex.codecogs.com/svg.latex?%20m%20%5Cin%20%5Cmathbb%7BN%7D%20-%20%5C%7B0%2C%201%5C%7D), jestliže po vydělení číslem ![m](https://latex.codecogs.com/svg.latex?m) dávají stejný zbytek.

Zápis ... ![a \equiv b (m)](https://latex.codecogs.com/svg.latex?a%20%5Cequiv%20b%20%28m%29)

![a \equiv b (m) \leftrightarrow m \mid (a - b) \leftrightarrow \exists t: a = b + m \cdot t](https://latex.codecogs.com/svg.latex?a%20%5Cequiv%20b%20%28m%29%20%5Cleftrightarrow%20m%20%5Cmid%20%28a%20-%20b%29%20%5Cleftrightarrow%20%5Cexists%20t%3A%20a%20%3D%20b%20&plus;%20m%20%5Ccdot%20t)

### Početní pravidla

Nechť ![a_1 \equiv b_1 (m)~\wedge~a_2 \equiv b_2 (m)](https://latex.codecogs.com/svg.latex?a_1%20%5Cequiv%20b_1%20%28m%29%7E%5Cwedge%7Ea_2%20%5Cequiv%20b_2%20%28m%29), potom platí:

- ![a_1 + a_2 \equiv b_1 + b_2 (m)](https://latex.codecogs.com/svg.latex?a_1%20&plus;%20a_2%20%5Cequiv%20b_1%20&plus;%20b_2%20%28m%29),
- ![a_1 \cdot a_2 \equiv b_1 \cdot b_2 (m)](https://latex.codecogs.com/svg.latex?a_1%20%5Ccdot%20a_2%20%5Cequiv%20b_1%20%5Ccdot%20b_2%20%28m%29),
- ![d | NSD(a_1, b_1)~\wedge~NSD(d, m) = 1 \rightarrow \frac{a_1}{d} \equiv \frac{b_1}{d} (m)](https://latex.codecogs.com/svg.latex?d%20%7C%20NSD%28a_1%2C%20b_1%29%7E%5Cwedge%7ENSD%28d%2C%20m%29%20%3D%201%20%5Crightarrow%20%5Cfrac%7Ba_1%7D%7Bd%7D%20%5Cequiv%20%5Cfrac%7Bb_1%7D%7Bd%7D%20%28m%29).

Konguence *se stejným modulem* lze upravovat.

**Možné operace**

![k \in \mathbb{N}^+](https://latex.codecogs.com/svg.latex?k%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;)

- převod členů na jednu stranu ... ![a_1 - b_1 \equiv 0 (m)](https://latex.codecogs.com/svg.latex?a_1%20-%20b_1%20%5Cequiv%200%20%28m%29)
- vynásobení obou stran konstantou ... ![k \cdot a_1 \equiv k \cdot b_1 (m)](https://latex.codecogs.com/svg.latex?k%20%5Ccdot%20a_1%20%5Cequiv%20k%20%5Ccdot%20b_1%20%28m%29)
- přičtení konstanty k oboum stranám ... ![a_1 + k \equiv b_1 + k (m)](https://latex.codecogs.com/svg.latex?a_1%20&plus;%20k%20%5Cequiv%20b_1%20&plus;%20k%20%28m%29)
- umocnění obou stran konstantou ... ![a_1^k \equiv b_1^k (m)](https://latex.codecogs.com/svg.latex?a_1%5Ek%20%5Cequiv%20b_1%5Ek%20%28m%29)

**Změna modulo**

- ![a \equiv b (m) \rightarrow \forall k \in \mathbb{N}^+: k \cdot a \equiv k \cdot b~(k \cdot m)](https://latex.codecogs.com/svg.latex?a%20%5Cequiv%20b%20%28m%29%20%5Crightarrow%20%5Cforall%20k%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;%3A%20k%20%5Ccdot%20a%20%5Cequiv%20k%20%5Ccdot%20b%7E%28k%20%5Ccdot%20m%29)
- ![a \equiv b (m), d \mid m \rightarrow a \equiv b (d)](https://latex.codecogs.com/svg.latex?a%20%5Cequiv%20b%20%28m%29%2C%20d%20%5Cmid%20m%20%5Crightarrow%20a%20%5Cequiv%20b%20%28d%29)
- ![a \equiv b (m),~d \mid NSD(a, b, m) \rightarrow \frac{a}{d} \equiv \frac{b}{d} (\frac{m}{d})](https://latex.codecogs.com/svg.latex?a%20%5Cequiv%20b%20%28m%29%2C%7Ed%20%5Cmid%20NSD%28a%2C%20b%2C%20m%29%20%5Crightarrow%20%5Cfrac%7Ba%7D%7Bd%7D%20%5Cequiv%20%5Cfrac%7Bb%7D%7Bd%7D%20%28%5Cfrac%7Bm%7D%7Bd%7D%29)
- ![a \equiv b (m_1)~\wedge~a \equiv b (m_2) \rightarrow a \equiv b (NSN(m_1, m_2))](https://latex.codecogs.com/svg.latex?a%20%5Cequiv%20b%20%28m_1%29%7E%5Cwedge%7Ea%20%5Cequiv%20b%20%28m_2%29%20%5Crightarrow%20a%20%5Cequiv%20b%20%28NSN%28m_1%2C%20m_2%29%29)

### Rozklad na třídy ekvivalence

Kongruence je (viz [9. Gramatiky - Vlastnosti binárních relací](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/09_gramatiky/09_gramatiky.md#vlastnosti-bin%C3%A1rn%C3%ADch-relac%C3%AD)):
  - reflexivní ![\forall a \in A: a \varrho a](https://latex.codecogs.com/svg.latex?%5Cforall%20a%20%5Cin%20A%3A%20a%20%5Cvarrho%20a),
  - symetrická ![\forall a, b \in A: a \varrho b \leftrightarrow b \varrho a](https://latex.codecogs.com/svg.latex?%5Cforall%20a%2C%20b%20%5Cin%20A%3A%20a%20%5Cvarrho%20b%20%5Cleftrightarrow%20b%20%5Cvarrho%20a),
  - tranzitivní ![\forall a, b, c \in A: a \varrho b \wedge b \varrho c \rightarrow a \varrho c](https://latex.codecogs.com/svg.latex?%5Cforall%20a%2C%20b%2C%20c%20%5Cin%20A%3A%20a%20%5Cvarrho%20b%20%5Cwedge%20b%20%5Cvarrho%20c%20%5Crightarrow%20a%20%5Cvarrho%20c).

Tzn., relace ![\equiv_m](https://latex.codecogs.com/svg.latex?%5Cequiv_m) (býti kongruentní modulo m) na množině ![\mathbb{Z}](https://latex.codecogs.com/svg.latex?%5Cmathbb%7BZ%7D) definuje rozklad množiny na třídy ekvivalence, které se nazývají *zbytkové třídy modulo m*.

### Soustava nejmenších nezáporných zbytků modulo m

Pro výpočty se používají reprezentanti ze zbytkových tříd, označované např. [2]. To označuje třídu, do které spadají všechna čísla, která po dělení m dávají zbytek 2. V zápisech se potom obvykle vynechávají hranaté závorky.

![Z_m = \{0, 1, \ldots, m - 1 \}](https://latex.codecogs.com/svg.latex?Z_m%20%3D%20%5C%7B0%2C%201%2C%20%5Cldots%2C%20m%20-%201%20%5C%7D) ... **úplná soustava nejmenších nezáporných zbytků modlulo m**

![Zbytková třída modulo m](02_rozklad_celych_cisel_na_zbytkove_tridy.jpg)

*Zbytková třída modulo ![m](https://latex.codecogs.com/svg.latex?m)*

**Redukovaná soustava zbytků modulo m**

- zůstanou pouze zbytky, které jsou nesoudělné s ![m](https://latex.codecogs.com/svg.latex?m)
- označení ![Z_m^*](https://latex.codecogs.com/svg.latex?Z_m%5E*)

![Z_5^* = \{1, 2, 3, 4\}](https://latex.codecogs.com/svg.latex?Z_5%5E*%20%3D%20%5C%7B1%2C%202%2C%203%2C%204%5C%7D)

![Z_6^* = \{1, 5\}](https://latex.codecogs.com/svg.latex?Z_6%5E*%20%3D%20%5C%7B1%2C%205%5C%7D)

## Počítání v ![(Z_m, +, \cdot)](https://latex.codecogs.com/svg.latex?%5Clarge%20%28Z_m%2C%20&plus;%2C%20%5Ccdot%29)

### Sčítání modulo m

- existuje *neutrální prvek* ... ![0](https://latex.codecogs.com/svg.latex?0) (po jeho přičtení se výsledek nezmění)
- ke všem prvkům lze nalézt *opačný prvek* (tzn. takový, že po jeho přičtení dostávám výsledek ![0](https://latex.codecogs.com/svg.latex?0))

**Příklad** v ![Z_4](https://latex.codecogs.com/svg.latex?Z_4)

- ![1 + 1 = 2](https://latex.codecogs.com/svg.latex?1%20&plus;%201%20%3D%202)
- ![1 + 3 = 0](https://latex.codecogs.com/svg.latex?1%20&plus;%203%20%3D%200)
- ![3 + 2 = 1](https://latex.codecogs.com/svg.latex?3%20&plus;%202%20%3D%201)

| + | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
|**0**| 0 | 1 | 2 | 3 |
|**1**| 1 | 2 | 3 | 0 |
|**2**| 2 | 3 | 0 | 1 |
|**3**| 3 | 0 | 1 | 2 |

### Násobení modulo m

- existuje *neutrální prvek* ... ![1](https://latex.codecogs.com/svg.latex?1) (po vynásobení 1 se výsledek nezmění)
- k jednotlivým prvkům může existovat *inverzní prvek* ... ![a^{-1}](https://latex.codecogs.com/svg.latex?a%5E%7B-1%7D) (![a \cdot a^{-1} = 1](https://latex.codecogs.com/svg.latex?a%20%5Ccdot%20a%5E%7B-1%7D%20%3D%201))

**Příklad** v ![Z_5](https://latex.codecogs.com/svg.latex?Z_5)

| ![\cdot](https://latex.codecogs.com/svg.latex?%5Ccdot) | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
|**1**| 1 | 2 | 3 | 4 |
|**2**| 2 | 4 | 1 | 3 |
|**3**| 3 | 1 | 4 | 2 |
|**4**| 4 | 3 | 2 | 1 |

Pozn.: Pokud cokoliv vynásobím prvek ze třídy 0, bude i výsledek 0.

- ![2x \equiv 3 (5)](https://latex.codecogs.com/svg.latex?2x%20%5Cequiv%203%20%285%29)
- potřebuju se zbavit 2, v tabulce najdu jakým číslem to musím vynásobit, abych dostal 1 ... musím násobit 3
- ![2x \equiv 3 (5)~/\cdot3](https://latex.codecogs.com/svg.latex?2x%20%5Cequiv%203%20%285%29%7E/%5Ccdot3)
- ![2 \cdot 3 = 1](https://latex.codecogs.com/svg.latex?2%20%5Ccdot%203%20%3D%201)
- ![3 \cdot 3 = 4](https://latex.codecogs.com/svg.latex?3%20%5Ccdot%203%20%3D%204)
- ![x \equiv 4 (5)](https://latex.codecogs.com/svg.latex?x%20%5Cequiv%204%20%285%29)

Řešení *nemusí existovat*, např. ![3x \equiv 2 (6)](https://latex.codecogs.com/svg.latex?3x%20%5Cequiv%202%20%286%29)

## Řešení kongruencí prvního stupně

![ax \equiv b(m)](https://latex.codecogs.com/svg.latex?ax%20%5Cequiv%20b%28m%29)

**Existence řešení**

Nemá řešení pro ![NSD(a, m) \nmid b](https://latex.codecogs.com/svg.latex?NSD%28a%2C%20m%29%20%5Cnmid%20b).

### Existuje jedno řešení

Pokud ![NSD(a, m) = 1](https://latex.codecogs.com/svg.latex?NSD%28a%2C%20m%29%20%3D%201), existuje právě jedno řešení.

**Příklad**

![269x \equiv 11 (379)](https://latex.codecogs.com/svg.latex?269x%20%5Cequiv%2011%20%28379%29)

1. Ověření existence (právě jednoho) řešení

  ![NSD(269, 379) = \mathbf{1}](https://latex.codecogs.com/svg.latex?NSD%28269%2C%20379%29%20%3D%20%5Cmathbf%7B1%7D)

2. Euklidův algoritmus pro ![https://latex.codecogs.com/svg.latex?NSD%28a%2C%20m%29%20%3D%201](https://latex.codecogs.com/svg.latex?m%2C%20a)

  | ![a](https://latex.codecogs.com/svg.latex?a) | ![b](https://latex.codecogs.com/svg.latex?b) | ![q](https://latex.codecogs.com/svg.latex?q) | ![r](https://latex.codecogs.com/svg.latex?r) |
  | ---:  | ---: | ---: | ---: |
  | 379 | 269 | 1 | 110 |
  | 269 | 110 | 2 | 49 |
  | 110 | 49 | 2 | 12 |
  | 49 | 12 | 4 | 1 |
  | 12 | 1 | 12 | 0 |

3. **Přibližné zlomky**

  ![P_i = q_i \cdot P_{i-1} + P_{i-2};~P_{-1} = 1,~P_0 = q_0](https://latex.codecogs.com/svg.latex?P_i%20%3D%20q_i%20%5Ccdot%20P_%7Bi-1%7D%20&plus;%20P_%7Bi-2%7D%3B%7EP_%7B-1%7D%20%3D%201%2C%7EP_0%20%3D%20q_0)

  | ![i](https://latex.codecogs.com/svg.latex?i) | -1 | 0 | 1 | 2 | 3 | 4 |
  | --- | --- | --- | --- | --- | --- | --- |
  | ![P_i](https://latex.codecogs.com/svg.latex?P_i) | 1 | 1 | 3 | 7 | **31** | *379* |
  | ![q_i](https://latex.codecogs.com/svg.latex?q_i) | - | 1 | 2 | 2 | 4 | 12 |

4. ![x \equiv (-1)^n \cdot P_{n-1} \cdot b](https://latex.codecogs.com/svg.latex?x%20%5Cequiv%20%28-1%29%5En%20%5Ccdot%20P_%7Bn-1%7D%20%5Ccdot%20b)

  ![n = 4,~P_3 = 31,~b = 11](https://latex.codecogs.com/svg.latex?n%20%3D%204%2C%7EP_3%20%3D%2031%2C%7Eb%20%3D%2011)

  ![x \equiv \mathbf{341} (379)](https://latex.codecogs.com/svg.latex?x%20%5Cequiv%20%5Cmathbf%7B341%7D%20%28379%29)

### Existuje více řešení

Pokud ![NSD(a, m) \mid b](https://latex.codecogs.com/svg.latex?NSD%28a%2C%20m%29%20%5Cmid%20b), existuje více řešení.

**Příklad**

![807x \equiv 33 (1137)](https://latex.codecogs.com/svg.latex?807x%20%5Cequiv%2033%20%281137%29)

1. Ověření existence a zjištění počtu řešení

  ![NSD(807, 1137) = \mathbf{3}](https://latex.codecogs.com/svg.latex?NSD%28807%2C%201137%29%20%3D%20%5Cmathbf%7B3%7D)

2. Vydělení kongruence ![NSD(a, m)](https://latex.codecogs.com/svg.latex?NSD%28a%2C%20m%29)

  ![269x_0 = 11 (379)](https://latex.codecogs.com/svg.latex?269x_0%20%3D%2011%20%28379%29)

3. Nalezení řešení ![x_0](https://latex.codecogs.com/svg.latex?x_0)

  Pro tuto kongruenci se použije výše popsaný postup pro nalezení jednoho řešení.

  ![x_0 \equiv 341 (379)](https://latex.codecogs.com/svg.latex?x_0%20%5Cequiv%20341%20%28379%29)

4. Nalezení zbývajících řešení.

  Další řešení jsou pouze násobky ![x_0](https://latex.codecogs.com/svg.latex?x_0) menší než ![m](https://latex.codecogs.com/svg.latex?m).

  ![x \equiv \mathbf{341, 720, 1099}~(1137)](https://latex.codecogs.com/svg.latex?x%20%5Cequiv%20%5Cmathbf%7B341%2C%20720%2C%201099%7D%7E%281137%29)

## Řešení soustav kongruencí

### Čínská věta o zbytku

*Podmínka řešitelnosti*: V soustavě jsou všechny m po dvou nesoudělné.

**Příklad**

![x \equiv 2(5),~x \equiv 3(8),~x \equiv 6(11),~x \equiv 4(9)](https://latex.codecogs.com/svg.latex?x%20%5Cequiv%202%285%29%2C%7Ex%20%5Cequiv%203%288%29%2C%7Ex%20%5Cequiv%206%2811%29%2C%7Ex%20%5Cequiv%204%289%29)

1. ![M = m_1 \cdot m_2 \cdot \ldots \cdot m_n = 5 \cdot 8 \cdot 11 \cdot 9 = 3960](https://latex.codecogs.com/svg.latex?M%20%3D%20m_1%20%5Ccdot%20m_2%20%5Ccdot%20%5Cldots%20%5Ccdot%20m_n%20%3D%205%20%5Ccdot%208%20%5Ccdot%2011%20%5Ccdot%209%20%3D%203960)

2. Vytvořím kongruence ![M_i = \frac{M}{m_i},~M_i x_i \equiv 1 (m_i)](https://latex.codecogs.com/svg.latex?M_i%20%3D%20%5Cfrac%7BM%7D%7Bm_i%7D%2C%7EM_i%20x_i%20%5Cequiv%201%20%28m_i%29)

  - ![M_1 = 792,~792x_1 \equiv 1 (5)](https://latex.codecogs.com/svg.latex?M_1%20%3D%20792%2C%7E792x_1%20%5Cequiv%201%20%285%29)
  - ![M_2 = 495,~495x_2 \equiv 1 (8)](https://latex.codecogs.com/svg.latex?M_2%20%3D%20495%2C%7E495x_2%20%5Cequiv%201%20%288%29)
  - ![M_3 = 360,~360x_3 \equiv 1 (11)](https://latex.codecogs.com/svg.latex?M_3%20%3D%20360%2C%7E360x_3%20%5Cequiv%201%20%2811%29)
  - ![M_4 = 440,~440x_4 \equiv 1 (9)](https://latex.codecogs.com/svg.latex?M_4%20%3D%20440%2C%7E440x_4%20%5Cequiv%201%20%289%29)

3. Vyřeším kongruence

  - ![x_1 \equiv 3(5)](https://latex.codecogs.com/svg.latex?x_1%20%5Cequiv%203%285%29)
  - ![x_2 \equiv 7(8)](https://latex.codecogs.com/svg.latex?x_2%20%5Cequiv%207%288%29)
  - ![x_3 \equiv 7(11)](https://latex.codecogs.com/svg.latex?x_3%20%5Cequiv%207%2811%29)
  - ![x_4 \equiv 8(9)](https://latex.codecogs.com/svg.latex?x_4%20%5Cequiv%208%289%29)

4. Naleznu řešení původní soustavy.

  ![x \equiv x_0 (M)](https://latex.codecogs.com/svg.latex?x%20%5Cequiv%20x_0%20%28M%29)

  ![x_0 = M_1 x_1 b_1 + M_2 x_2 b_2 + \ldots + M_n x_n b_n = \ldots = 44347](https://latex.codecogs.com/svg.latex?x_0%20%3D%20M_1%20x_1%20b_1%20&plus;%20M_2%20x_2%20b_2%20&plus;%20%5Cldots%20&plus;%20M_n%20x_n%20b_n%20%3D%20%5Cldots%20%3D%2044347)

  ![x \equiv 44347 (3960)](https://latex.codecogs.com/svg.latex?x%20%5Cequiv%2044347%20%283960%29)

  ![x \equiv \mathbf{787} (3960)](https://latex.codecogs.com/svg.latex?x%20%5Cequiv%20%5Cmathbf%7B787%7D%20%283960%29)

### Zobecněná Čínská věta o zbytku

Umožňuje řešit obecné soustavy kongruencí, kde

![\forall i \neq j : NSD(m_i, m_j) \mid (b_i - b_j)](https://latex.codecogs.com/svg.latex?%5Cforall%20i%20%5Cneq%20j%20%3A%20NSD%28m_i%2C%20m_j%29%20%5Cmid%20%28b_i%20-%20b_j%29)

