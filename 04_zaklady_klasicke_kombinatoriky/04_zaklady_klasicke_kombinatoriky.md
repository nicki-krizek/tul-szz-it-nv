# 4. Základy klasické kombinatoriky

> Základy klasické kombinatoriky – princip inkluze a exkluze, Dirichletův princip, zobecněný binomický koeficient, subfaktoriály, Fibonacciho, Catalanova a Stirlingova čísla, problematika rozkladů – varianty, (ne)rozlišitelné objekty, (ne)rozlišitelné skupiny, využití diofantických rovnic a vytvořujících funkcí v oblasti rozkladů.

## Problematika

Máme n objektů, vybíráme k-tice.

### Variace k-té třídy

= *uspořádané* k-tice prvků

#### Bez opakování (všechny prvky různé)

| 1. | 2. | ... | k. |
| -- | -- | --- | -- |
| n  | n-1 | ...| n-k+1 |

![A^k_n = n \cdot (n-1) \cdot \ldots \cdot (n-k+1) = \frac{n!}{(n-k)!}](https://latex.codecogs.com/svg.latex?A%5Ek_n%20%3D%20n%20%5Ccdot%20%28n-1%29%20%5Ccdot%20%5Cldots%20%5Ccdot%20%28n-k&plus;1%29%20%3D%20%5Cfrac%7Bn%21%7D%7B%28n-k%29%21%7D)

**Příklad**: Mám k dispozici pět lidí. Kolika způsoby z nich můžu vybrat trojici?

###S opakováním

| 1. | 2. | ... | k. |
| -- | -- | --- | -- |
| n  | n | ...| n |

![\overline{A}^k_n = n^k](https://latex.codecogs.com/svg.latex?%5Coverline%7BA%7D%5Ek_n%20%3D%20n%5Ek)

**Příklad**: Kolik různých binárních čísel lze sestavit pomocí tří bitů?

### Permutace
= variace, kde ![k = n](https://latex.codecogs.com/svg.latex?k%20%3D%20n) (uspořádané n-tice)

#### Bez opakování

![P(n) = A^n_n = n!](https://latex.codecogs.com/svg.latex?P%28n%29%20%3D%20A%5En_n%20%3D%20n%21)

![P(n) = n \cdot P(n-1); P(0) = 1](https://latex.codecogs.com/svg.latex?P%28n%29%20%3D%20n%20%5Ccdot%20P%28n-1%29%3B%20P%280%29%20%3D%201)

**Příklad**: Na ústní zkoušku dorazilo sedm studentů. Kolik existuje různých pořadí, ve kterém mohou studenti jít postupně ke zkoušce?

#### S opakováním

- ![n_1](https://latex.codecogs.com/svg.latex?n_1) ... prvků 1. druhu
- ![n_2](https://latex.codecogs.com/svg.latex?n_2) ... prvků 2. druhu
- ...
- ![n_k](https://latex.codecogs.com/svg.latex?n_k) ... prvků k. druhu

![P(n_1, n_2, \ldots, n_k) = \frac{(n_1 + n_2 + \ldots + n_k)}{n_1! \cdot n_2! \cdot \ldots \cdot n_k!}](https://latex.codecogs.com/svg.latex?P%28n_1%2C%20n_2%2C%20%5Cldots%2C%20n_k%29%20%3D%20%5Cfrac%7B%28n_1%20&plus;%20n_2%20&plus;%20%5Cldots%20&plus;%20n_k%29%7D%7Bn_1%21%20%5Ccdot%20n_2%21%20%5Ccdot%20%5Cldots%20%5Ccdot%20n_k%21%7D)

### Kombinace k-té třídy

= *neuspořádané k-tice*

#### Bez opakování

n různých objektů, každý v jednom exempláři

![C^k_n = \frac{A^k_n}{k!} = \frac{n!}{k! \cdot (n-k)!};~~0 \leq k \leq n](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20%5Cfrac%7BA%5Ek_n%7D%7Bk%21%7D%20%3D%20%5Cfrac%7Bn%21%7D%7Bk%21%20%5Ccdot%20%28n-k%29%21%7D%3B%7E%7E0%20%5Cleq%20k%20%5Cleq%20n)

![\binom{n}{k}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Bk%7D) ... kombinační číslo "n nad k" (*binomick koeficient*)

**Vlastnosti**

  - ![C^k_n = P(k, n-k)](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20P%28k%2C%20n-k%29) (charakteristický vektor - pro každý prvek určím zda je/není v kombinaci)
  - ![C^k_n = C^{n-k}_n](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20C%5E%7Bn-k%7D_n) ... symetrie
  - ![C^k_n = C^k_{n-1} + C^{k-1}_{n-1}](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20C%5Ek_%7Bn-1%7D%20&plus;%20C%5E%7Bk-1%7D_%7Bn-1%7D) ... Pascalova identita
  - ![\sum^n_{k=0} C^k_n = 2^n](https://latex.codecogs.com/svg.latex?%5Csum%5En_%7Bk%3D0%7D%20C%5Ek_n%20%3D%202%5En)
  - ![\sum^n_{k=0} (-1)^k C^k_n = 0](https://latex.codecogs.com/svg.latex?%5Csum%5En_%7Bk%3D0%7D%20%28-1%29%5Ek%20C%5Ek_n%20%3D%200)

#### S opakováním

n různých exemplářů, každý v libovolném počtu

![\overline{C}^k_n = P(n-1, k) = C^k_{n+k-1}](https://latex.codecogs.com/svg.latex?%5Coverline%7BC%7D%5Ek_n%20%3D%20P%28n-1%2C%20k%29%20%3D%20C%5Ek_%7Bn&plus;k-1%7D)

**Odvození**:

- 1 reprezentuje, že vyberu objekt
- 0 se použije jako oddělovač
- sestavím bitový řetězec, kde použiju n-1 oddělovačů a k výběrů

## Základní kombinatorická pravidla

### Pravidlo součtu

![A \cap B = \varnothing; | A \cup B | = |A| + |B|](https://latex.codecogs.com/svg.latex?A%20%5Ccap%20B%20%3D%20%5Cvarnothing%3B%20%7C%20A%20%5Ccup%20B%20%7C%20%3D%20%7CA%7C%20&plus;%20%7CB%7C)

Počet způsobů, jak vybrat objekt z A nebo B, je roven součtu mohutností množin A a B. 

### Pravidlo součinu

![A \cap B = \varnothing; | A \times B | = |A| \cdot |B|](https://latex.codecogs.com/gif.latex?A%20%5Ccap%20B%20%3D%20%5Cvarnothing%3B%20%7C%20A%20%5Ctimes%20B%20%7C%20%3D%20%7CA%7C%20%5Ccdot%20%7CB%7C)

Počet způsobů, jak vybrat uspořádanou dvojici ![(a, b),~a \in A,~b \in B](https://latex.codecogs.com/gif.latex?%28a%2C%20b%29%2C%7Ea%20%5Cin%20A%2C%7Eb%20%5Cin%20B) je roven násobku mohutnosti množin.

### Dirichletův princip

Při libovolném rozdělení n objektů do k skupin platí, že alespoň jedna skupina obsahuje alespoň ![\left \lceil \frac{n}{k} \right \rceil](https://latex.codecogs.com/gif.latex?%5Cleft%20%5Clceil%20%5Cfrac%7Bn%7D%7Bk%7D%20%5Cright%20%5Crceil) objektů.

Prakticky: n krabiček, n+1 kuliček ... jedna krabička musí obsahovat dvě kuličky

### Princip inkluze a exkluze

Některé kombinatorické úlohy je jednodušší řešit tak, že nehledám, které objekty splňují dané vlastnosti, ale místo toho najdu objekty, které dané vlastnosti *nesplňují* a ty odečtu od celku.

![N](https://latex.codecogs.com/svg.latex?N) ... počet objektů

![\alpha_i](https://latex.codecogs.com/svg.latex?%5Calpha_i) ... potenciální vlastnosti objektů

![N(\alpha_i)](https://latex.codecogs.com/svg.latex?N%28%5Calpha_i%29) ... objekty, které mají vlastnost ![\alpha_i](https://latex.codecogs.com/svg.latex?%5Calpha_i)

![N(\overline{\alpha_i})](https://latex.codecogs.com/svg.latex?N%28%5Coverline%7B%5Calpha_i%7D%29) ... objekty, které **nemají** vlastnost ![\alpha_i](https://latex.codecogs.com/svg.latex?%5Calpha_i)

![\\ N(\overline{\alpha_1}, \overline{\alpha_2}, \ldots, \overline{\alpha_n}) = N\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~- N(\alpha_1) - N(\alpha_2) - \ldots - N(\alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~+ N(\alpha_1, \alpha_2) + N(\alpha_1, \alpha_3) + \ldots + N(\alpha_{n-1}, \alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~- N(\alpha_1, \alpha_2, \alpha_3) - N(\alpha_1, \alpha_2, \alpha_4) - \ldots - N(\alpha_{n-2}, \alpha_{n-1}, \alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ \ldots \\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ + (-1)^n N(\alpha_1, \alpha_2, \ldots, \alpha_n)](https://latex.codecogs.com/svg.latex?%5B%5C%5C%20N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%2C%20%5Cldots%2C%20%5Coverline%7B%5Calpha_n%7D%29%20%3D%20N%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20-%20%5Cldots%20-%20N%28%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_3%29%20&plus;%20%5Cldots%20&plus;%20N%28%5Calpha_%7Bn-1%7D%2C%20%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_3%29%20-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_4%29%20-%20%5Cldots%20-%20N%28%5Calpha_%7Bn-2%7D%2C%20%5Calpha_%7Bn-1%7D%2C%20%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%20%5Cldots%20%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%20&plus;%20%28-1%29%5En%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Cldots%2C%20%5Calpha_n%29)

![n = 2:](https://latex.codecogs.com/svg.latex?n%20%3D%202%3A)

![N(\overline{\alpha_1}, \overline{\alpha_2}) = N - N(\alpha_1) - N(\alpha_2) + N(\alpha_1, \alpha_2)](https://latex.codecogs.com/svg.latex?N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%29%20%3D%20N%20-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29)

![n = 3:](https://latex.codecogs.com/svg.latex?n%20%3D%203%3A)

![N(\overline{\alpha_1}, \overline{\alpha_2}, \overline{\alpha_3}) = N - N(\alpha_1) - N(\alpha_2) - N(\alpha_3)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~+ N(\alpha_1, \alpha_2) + N(\alpha_1, \alpha_2) + N(\alpha_2, \alpha_3)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~- N(\alpha_1, \alpha_2, \alpha_3)
](https://latex.codecogs.com/svg.latex?N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%2C%20%5Coverline%7B%5Calpha_3%7D%29%20%3D%20N%20-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20-%20N%28%5Calpha_3%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_2%2C%20%5Calpha_3%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_3%29)



