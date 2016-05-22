# 2. - Základy teorie dělitelnosti

> Základy teorie dělitelnosti – základní pojmy (NSD, NSN, Eukleidův algoritmus), řetězové zlomky, kongruence modulo m, úplná a redukovaná soustava zbytků, počítání v (Zm, +, .), řešení kongruencí 1. stupně a jejich soustav.

## Základní pojmy

Relace *býti dělitelem* ![\mid](https://latex.codecogs.com/gif.latex?%7C)

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

![NSD(a, b)] ... **největší společný dělitel** čísel ![a, b](https://latex.codecogs.com/gif.latex?a%2C%20b)

Pokud ![a, b \in \mathbb{Z} - \{0\}](https://latex.codecogs.com/gif.latex?a%2C%20b%20%5Cin%20%5Cmathbb%7BZ%7D%20-%20%5C%7B0%5C%7D), pak ![NSD(a, b)](https://latex.codecogs.com/gif.latex?NSD%28a%2C%20b%29) existuje vždy a je určen jednoznačně.

Platí: ![1 \leq NSD(a, b) \leq min(a, b)](https://latex.codecogs.com/gif.latex?1%20%5Cleq%20NSD%28a%2C%20b%29%20%5Cleq%20min%28a%2C%20b%29)

![NSD(a, b) = 1](https://latex.codecogs.com/gif.latex?NSD%28a%2C%20b%29%20%3D%201) čísla jsou **nesoudělná**

#### Jak nalézt NSD?

1. metoda hrubé síly
2. Euklidův algoritmus
3. dvojkový NSD algortimus
4. pomocí kanonických rozkladů

- pro více čísel:
  - kanonické rozklady (prvočísla)
  - udělám NSD dvou a postupně přidávám další čísla ![NSD(a, b, c) = NSD(NSD(a, b), c)](https://latex.codecogs.com/gif.latex?NSD%28a%2C%20b%2C%20c%29%20%3D%20NSD%28NSD%28a%2C%20b%29%2C%20c%29)

### Nejmenší společný násobek (NSN)

![NSN(a, b)](https://latex.codecogs.com/gif.latex?NSN%28a%2C%20b%29) ... nejmenší společný násobek čísel ![a, b](https://latex.codecogs.com/gif.latex?a%2C%20b)

Existuje a je určen jednoznačně.

#### Jak nalézt NSN?

1. metoda hrubé síly
2. Euklidův algoritmus

- pro více čísel: obdobně jako u NSD

### Souvislost mezi NSD a NSN

![a \cdot b = NSN(a, b) \cdot NSD(a, b)](https://latex.codecogs.com/gif.latex?a%20%5Ccdot%20b%20%3D%20NSN%28a%2C%20b%29%20%5Ccdot%20NSD%28a%2C%20b%29)

### Euklidův algoritmus

![a = b \cdot q_0 + r](https://latex.codecogs.com/gif.latex?a%20%3D%20b%20%5Ccdot%20q_0%20&plus;%20r)

![b = r_1 \cdot q_1 + r_2](https://latex.codecogs.com/gif.latex?b%20%3D%20r_1%20%5Ccdot%20q_1%20&plus;%20r_2)

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


