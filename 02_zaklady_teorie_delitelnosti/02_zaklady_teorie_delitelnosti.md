# 2. - Základy teorie dělitelnosti

> Základy teorie dělitelnosti – základní pojmy (NSD, NSN, Eukleidův algoritmus), řetězové zlomky, kongruence modulo m, úplná a redukovaná soustava zbytků, počítání v (Zm, +, .), řešení kongruencí 1. stupně a jejich soustav.

## Základní pojmy

Relace *býti dělitelem* ... ![\mid](https://latex.codecogs.com/gif.latex?%7C)

![b \mid a \leftrightarrow \exists q \in \mathbb{Z}: a = b \cdot q](https://latex.codecogs.com/gif.latex?b%20%5Cmid%20a%20%5Cleftrightarrow%20%5Cexists%20q%20%5Cin%20%5Cmathbb%7BZ%7D%3A%20a%20%3D%20b%20%5Ccdot%20q)

![b](https://latex.codecogs.com/gif.latex?b) dělí ![a](https://latex.codecogs.com/gif.latex?a) právě tehkdy, když existuje nějaké celé číslo ![q](https://latex.codecogs.com/gif.latex?q), že ![a = b \cdot q](https://latex.codecogs.com/gif.latex?a%20%3D%20b%20%5Ccdot%20q)

- ![b](https://latex.codecogs.com/gif.latex?b) ... *dělitel* čísla ![a](https://latex.codecogs.com/gif.latex?a)
- ![a](https://latex.codecogs.com/gif.latex?a) ... *násobek* čísla ![b](https://latex.codecogs.com/gif.latex?b)
- ![q](https://latex.codecogs.com/gif.latex?q) ... podíl

**Společný dělitel**

![d \in \mathbb{N}^+](https://latex.codecogs.com/gif.latex?d%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;) je *společný dělitel* čísel ![a,b \in \mathbb{Z}](https://latex.codecogs.com/gif.latex?a%2Cb%20%5Cin%20%5Cmathbb%7BZ%7D), jestliže

![d \mid a~\wedge~d \mid b](https://latex.codecogs.com/gif.latex?d%20%5Cmid%20a%7E%5Cwedge%7Ed%20%5Cmid%20b) ... (dělí obě čísla beze zbytku)

**Společný násobek**

![D \in \mathbb{N}^+](https://latex.codecogs.com/gif.latex?D%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;) je *společný násobek* čísel  ![a, b \in \mathbb{N}^+](https://latex.codecogs.com/gif.latex?a%2C%20b%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;), jestliže

![a \mid D~\wedge~b \mid D](https://latex.codecogs.com/gif.latex?a%20%5Cmid%20D%7E%5Cwedge%7Eb%20%5Cmid%20D) ... (tento násobek dělí obě čísla)

![max(a, b) \leq D \leq a \cdot b](https://latex.codecogs.com/gif.latex?max%28a%2C%20b%29%20%5Cleq%20D%20%5Cleq%20a%20%5Ccdot%20b)

### Největší společný dělitel (NSD)

![NSD(a, b)](https://latex.codecogs.com/gif.latex?NSD%28a%2C%20b%29) ... **největší společný dělitel** čísel ![a, b](https://latex.codecogs.com/gif.latex?a%2C%20b)

Pokud ![a, b \in \mathbb{Z} - \{0\}](https://latex.codecogs.com/gif.latex?a%2C%20b%20%5Cin%20%5Cmathbb%7BZ%7D%20-%20%5C%7B0%5C%7D), pak ![NSD(a, b)](https://latex.codecogs.com/gif.latex?NSD%28a%2C%20b%29) existuje vždy a je určen jednoznačně.

Platí: ![1 \leq NSD(a, b) \leq min(a, b)](https://latex.codecogs.com/gif.latex?1%20%5Cleq%20NSD%28a%2C%20b%29%20%5Cleq%20min%28a%2C%20b%29)

![NSD(a, b) = 1](https://latex.codecogs.com/gif.latex?NSD%28a%2C%20b%29%20%3D%201) čísla jsou **nesoudělná**

#### Jak nalézt NSD?

1. metoda hrubé síly
2. Euklidův algoritmus
3. dvojkový NSD algortimus
4. pomocí kanonických rozkladů

Pro více čísel:

- kanonické rozklady (prvočísla)
- udělám NSD dvou a postupně přidávám další čísla ![NSD(a, b, c) = NSD(NSD(a, b), c)](https://latex.codecogs.com/gif.latex?NSD%28a%2C%20b%2C%20c%29%20%3D%20NSD%28NSD%28a%2C%20b%29%2C%20c%29)

### Nejmenší společný násobek (NSN)

![NSN(a, b)](https://latex.codecogs.com/gif.latex?NSN%28a%2C%20b%29) ... nejmenší společný násobek čísel ![a, b](https://latex.codecogs.com/gif.latex?a%2C%20b)

Existuje a je určen jednoznačně.

#### Jak nalézt NSN?

1. metoda hrubé síly
2. Euklidův algoritmus

Pro více čísel: obdobně jako u NSD.

### Souvislost mezi NSD a NSN

![a \cdot b = NSN(a, b) \cdot NSD(a, b)](https://latex.codecogs.com/gif.latex?a%20%5Ccdot%20b%20%3D%20NSN%28a%2C%20b%29%20%5Ccdot%20NSD%28a%2C%20b%29)

### Euklidův algoritmus

![a = b \cdot q_0 + r](https://latex.codecogs.com/gif.latex?a%20%3D%20b%20%5Ccdot%20q_0%20&plus;%20r)

![b = r_1 \cdot q_1 + r_2](https://latex.codecogs.com/gif.latex?b%20%3D%20r_1%20%5Ccdot%20q_1%20&plus;%20r_2)

NSD je poslední nenulový zbytek (![r_{n-1}](https://latex.codecogs.com/gif.latex?r_%7Bn-1%7D)).

#### Příklad

Nalezněte ![NSD(192, 108)](https://latex.codecogs.com/gif.latex?NSD%28192%2C%20108%29) a ![NSN(192, 108)](https://latex.codecogs.com/gif.latex?NSN%28192%2C%20108%29)

| ![a](https://latex.codecogs.com/gif.latex?a) | ![b](https://latex.codecogs.com/gif.latex?b) | ![q](https://latex.codecogs.com/gif.latex?q) | ![r](https://latex.codecogs.com/gif.latex?r) |
| ---:  | ---: | ---: | ---: |
| 192 | 108 | 1 | 84 |
| 108 | 84 | 1 | 24 |
| 84 | 24 | 3 | **12** |
| 24 | 12 | 2 | 0 |

![NSD(192, 108) = 12](https://latex.codecogs.com/gif.latex?NSD%28192%2C%20108%29%20%3D%2012)

![NSN(192, 108) = \frac{192 \cdot 108}{NSD(192, 108)} = 1728](https://latex.codecogs.com/gif.latex?NSN%28192%2C%20108%29%20%3D%20%5Cfrac%7B192%20%5Ccdot%20108%7D%7BNSD%28192%2C%20108%29%7D%20%3D%201728)

### Řetězové zlomky

Číslo má ukončený rozvoj v řetězový zlomek právě tehdy, když je racionální.

Pro tvorbu zlomku se využijí koeficienty ![q](https://latex.codecogs.com/gif.latex?q) z Euklidova rozvoje.

![\frac{192}{108} = 1 + \frac{1}{1 + \frac{1}{3 + \frac{1}{2}}}](https://latex.codecogs.com/gif.latex?%5Clarge%20%5Cfrac%7B192%7D%7B108%7D%20%3D%201%20&plus;%20%5Cfrac%7B1%7D%7B1%20&plus;%20%5Cfrac%7B1%7D%7B3%20&plus;%20%5Cfrac%7B1%7D%7B2%7D%7D%7D)

## Kongruence modulo m

Řekneme, že čísla ![a, b \in \mathbb{Z}](https://latex.codecogs.com/gif.latex?a%2C%20b%20%5Cin%20%5Cmathbb%7BZ%7D) jsou *kongruentní modulo* m \in \mathbb{N} - \{0, 1\}, jestliže po vydělení číslem ![m](https://latex.codecogs.com/gif.latex?m) dávají stejný zbytek.

Zápis ... ![a \equiv b (m)](https://latex.codecogs.com/gif.latex?a%20%5Cequiv%20b%20%28m%29)

![a \equiv b (m) \leftrightarrow m \mid (a - b) \leftrightarrow \exists t: a = b + m \cdot t](https://latex.codecogs.com/gif.latex?a%20%5Cequiv%20b%20%28m%29%20%5Cleftrightarrow%20m%20%5Cmid%20%28a%20-%20b%29%20%5Cleftrightarrow%20%5Cexists%20t%3A%20a%20%3D%20b%20&plus;%20m%20%5Ccdot%20t)

### Početní pravidla

Nechť ![a_1 \equiv b_1 (m)~\wedge~a_2 \equiv b_2 (m)](https://latex.codecogs.com/gif.latex?a_1%20%5Cequiv%20b_1%20%28m%29%7E%5Cwedge%7Ea_2%20%5Cequiv%20b_2%20%28m%29), potom platí:

- ![a_1 + a_2 \equiv b_1 + b_2 (m)](https://latex.codecogs.com/gif.latex?a_1%20&plus;%20a_2%20%5Cequiv%20b_1%20&plus;%20b_2%20%28m%29),
- ![a_1 \cdot a_2 \equiv b_1 \cdot b_2 (m)](https://latex.codecogs.com/gif.latex?a_1%20%5Ccdot%20a_2%20%5Cequiv%20b_1%20%5Ccdot%20b_2%20%28m%29)
- ![d | NSD(a_1, b_1)~\wedge~NSD(d, m) = 1 \rightarrow \frac{a_1}{d} \equiv \frac{b_1}{d} (m)](https://latex.codecogs.com/gif.latex?d%20%7C%20NSD%28a_1%2C%20b_1%29%7E%5Cwedge%7ENSD%28d%2C%20m%29%20%3D%201%20%5Crightarrow%20%5Cfrac%7Ba_1%7D%7Bd%7D%20%5Cequiv%20%5Cfrac%7Bb_1%7D%7Bd%7D%20%28m%29)

Konguence *se stejným modulem* lze upravovat.

**Možné operace**

![k \in \mathbb{N}^+](https://latex.codecogs.com/gif.latex?k%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;)

- převod členů na jednu stranu ... ![a_1 - b_1 \equiv 0 (m)](https://latex.codecogs.com/gif.latex?a_1%20-%20b_1%20%5Cequiv%200%20%28m%29)
- vynásobení obou stran konstantou ... ![k \cdot a_1 \equiv k \cdot b_1 (m)](https://latex.codecogs.com/gif.latex?k%20%5Ccdot%20a_1%20%5Cequiv%20k%20%5Ccdot%20b_1%20%28m%29)
- přičtení konstanty k oboum stranám ... ![a_1 + k \equiv b_1 + k (m)](https://latex.codecogs.com/gif.latex?a_1%20&plus;%20k%20%5Cequiv%20b_1%20&plus;%20k%20%28m%29)
- umocnění obou stran konstantou ... ![a_1^k \equiv b_1^k (m)](https://latex.codecogs.com/gif.latex?a_1%5Ek%20%5Cequiv%20b_1%5Ek%20%28m%29)

**Změna modulo**

- ![a \equiv b (m) \rightarrow \forall k \in \mathbb{N}^+: k \cdot a \equiv k \cdot b~(k \cdot m)](https://latex.codecogs.com/gif.latex?a%20%5Cequiv%20b%20%28m%29%20%5Crightarrow%20%5Cforall%20k%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;%3A%20k%20%5Ccdot%20a%20%5Cequiv%20k%20%5Ccdot%20b%7E%28k%20%5Ccdot%20m%29)
- ![a \equiv b (m), d \mid m \rightarrow a \equiv b (d)](https://latex.codecogs.com/gif.latex?a%20%5Cequiv%20b%20%28m%29%2C%20d%20%5Cmid%20m%20%5Crightarrow%20a%20%5Cequiv%20b%20%28d%29)
- ![a \equiv b (m),~d \mid NSD(a, b, m) \rightarrow \frac{a}{d} \equiv \frac{b}{d} (\frac{m}{d})](https://latex.codecogs.com/gif.latex?a%20%5Cequiv%20b%20%28m%29%2C%7Ed%20%5Cmid%20NSD%28a%2C%20b%2C%20m%29%20%5Crightarrow%20%5Cfrac%7Ba%7D%7Bd%7D%20%5Cequiv%20%5Cfrac%7Bb%7D%7Bd%7D%20%28%5Cfrac%7Bm%7D%7Bd%7D%29)
- ![a \equiv b (m_1)~\wedge~a \equiv b (m_2) \rightarrow a \equiv b (NSN(m_1, m_2))](https://latex.codecogs.com/gif.latex?a%20%5Cequiv%20b%20%28m_1%29%7E%5Cwedge%7Ea%20%5Cequiv%20b%20%28m_2%29%20%5Crightarrow%20a%20%5Cequiv%20b%20%28NSN%28m_1%2C%20m_2%29%29)

### Rozklad na třídy ekvivalence

Kongruence je (viz [9. Gramatiky - Vlastnosti binárních relací](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/09_gramatiky/09_gramatiky.md#vlastnosti-bin%C3%A1rn%C3%ADch-relac%C3%AD):
  - reflexivní,
  - symetrická,
  - tranzitivní.

Tzn., relace ![\equiv_m](https://latex.codecogs.com/gif.latex?%5Cequiv_m) (býti kongruentní modulo m) na množině ![\mathbb{Z}](https://latex.codecogs.com/gif.latex?%5Cmathbb%7BZ%7D) definuje rozklad množiny na třídy ekvivalence, které se nazývají *zbytkové třídy modulo m*.

### Soustava nejmenších nezáporných zbytků modulo m

Pro výpočty se používají reprezentanti ze zbytkových tříd, označované např. [2]. To označuje třídu, do které spadají všechna čísla, která po dělení m dávají zbytek 2. V zápisech se potom obvykle vynechávají hranaté závorky.

![Z_m = \{0, 1, \ldots, m - 1 \}](https://latex.codecogs.com/gif.latex?Z_m%20%3D%20%5C%7B0%2C%201%2C%20%5Cldots%2C%20m%20-%201%20%5C%7D) ... **úplná soustava nejmenších nezáporných zbytků modlulo m**

**Redukovaná soustava zbytků modulo m**

- zůstanou pouze zbytky, které jsou nesoudělné s ![m](https://latex.codecogs.com/gif.latex?m)
- označení ![Z_m^*](https://latex.codecogs.com/gif.latex?Z_m%5E*)

![Z_5^* = \{1, 2, 3, 4\}](https://latex.codecogs.com/gif.latex?Z_5%5E*%20%3D%20%5C%7B1%2C%202%2C%203%2C%204%5C%7D)

![Z_6^* = \{1, 5\}](https://latex.codecogs.com/gif.latex?Z_6%5E*%20%3D%20%5C%7B1%2C%205%5C%7D)

## Počítání v ![(Z_m, +, \cdot)](https://latex.codecogs.com/gif.latex?%5Clarge%20%28Z_m%2C%20&plus;%2C%20%5Ccdot%29)

### Sčítání modulo m

### Násobení modulo m


