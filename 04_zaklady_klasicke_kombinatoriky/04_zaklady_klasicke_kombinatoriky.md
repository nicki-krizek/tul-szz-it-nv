# 4. Základy klasické kombinatoriky

> Základy klasické kombinatoriky – princip inkluze a exkluze, Dirichletův princip, zobecněný binomický koeficient, subfaktoriály, Fibonacciho, Catalanova a Stirlingova čísla, problematika rozkladů – varianty, (ne)rozlišitelné objekty, (ne)rozlišitelné skupiny, využití diofantických rovnic a vytvořujících funkcí v oblasti rozkladů.

## Problematika

Máme n objektů, vybíráme k-tice.

![Rozdělení](04_rozdeleni.png)

*Rozdělení pojmů*

### Variace k-té třídy

= *uspořádané* k-tice prvků

- **Bez opakování** (všechny prvky různé)

  | 1. | 2. | ... | k. |
  | --- | --- | --- | --- |
  | n  | n-1 | ...| n-k+1 |

  ![A^k_n = n \cdot (n-1) \cdot \ldots \cdot (n-k+1) = \frac{n!}{(n-k)!}](https://latex.codecogs.com/svg.latex?A%5Ek_n%20%3D%20n%20%5Ccdot%20%28n-1%29%20%5Ccdot%20%5Cldots%20%5Ccdot%20%28n-k&plus;1%29%20%3D%20%5Cfrac%7Bn%21%7D%7B%28n-k%29%21%7D)

  **Příklad**: Na startu stojí šest závodníků, kolika způsoby se mohou závodnící umístit na stupni vítězů.

- **S opakováním**

  | 1. | 2. | ... | k. |
  | --- | --- | --- | --- |
  | n  | n | ...| n |

  ![\overline{A}^k_n = n^k](https://latex.codecogs.com/svg.latex?%5Coverline%7BA%7D%5Ek_n%20%3D%20n%5Ek)

  **Příklad**: Kolik různých binárních čísel lze sestavit pomocí tří bitů?

### Permutace
= variace, kde ![k = n](https://latex.codecogs.com/svg.latex?k%20%3D%20n) (uspořádané n-tice)

- **Bez opakování**

  ![P(n) = A^n_n = n!](https://latex.codecogs.com/svg.latex?P%28n%29%20%3D%20A%5En_n%20%3D%20n%21)

  ![P(n) = n \cdot P(n-1); P(0) = 1](https://latex.codecogs.com/svg.latex?P%28n%29%20%3D%20n%20%5Ccdot%20P%28n-1%29%3B%20P%280%29%20%3D%201)

  **Příklad**: Na ústní zkoušku dorazilo sedm studentů. Kolik existuje různých pořadí, ve kterém mohou studenti jít postupně ke zkoušce?

- **S opakováním**

  - ![n_1](https://latex.codecogs.com/svg.latex?n_1) ... prvků 1. druhu
  - ![n_2](https://latex.codecogs.com/svg.latex?n_2) ... prvků 2. druhu
  - ...
  - ![n_k](https://latex.codecogs.com/svg.latex?n_k) ... prvků k. druhu

  ![P(n_1, n_2, \ldots, n_k) = \frac{(n_1 + n_2 + \ldots + n_k)!}{n_1! \cdot n_2! \cdot \ldots \cdot n_k!}](https://latex.codecogs.com/gif.latex?P%28n_1%2C%20n_2%2C%20%5Cldots%2C%20n_k%29%20%3D%20%5Cfrac%7B%28n_1%20&plus;%20n_2%20&plus;%20%5Cldots%20&plus;%20n_k%29%21%7D%7Bn_1%21%20%5Ccdot%20n_2%21%20%5Ccdot%20%5Cldots%20%5Ccdot%20n_k%21%7D)

  **Příklad**: Osm studentů má na koleji připraveno ubytování ve třech pokojích. Dva jsou třílůžkové a jedna Dvoulužkový. Kolik je způsobů rozdělení studentů do pokojů?

### Kombinace k-té třídy

= *neuspořádané k-tice*

- **Bez opakování**

  n různých objektů, každý v jednom exempláři

  ![C^k_n = \frac{A^k_n}{k!} = \frac{n!}{k! \cdot (n-k)!};~~0 \leq k \leq n](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20%5Cfrac%7BA%5Ek_n%7D%7Bk%21%7D%20%3D%20%5Cfrac%7Bn%21%7D%7Bk%21%20%5Ccdot%20%28n-k%29%21%7D%3B%7E%7E0%20%5Cleq%20k%20%5Cleq%20n)

  ![\binom{n}{k}](https://latex.codecogs.com/svg.latex?%5Cbinom%7Bn%7D%7Bk%7D) ... kombinační číslo "n nad k" (*binomický koeficient*)

  **Vlastnosti**

  - ![C^k_n = P(k, n-k)](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20P%28k%2C%20n-k%29) (charakteristický vektor - pro každý prvek určím zda je/není v kombinaci)
  - ![C^k_n = C^{n-k}_n](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20C%5E%7Bn-k%7D_n) ... symetrie
  - ![C^k_n = C^k_{n-1} + C^{k-1}_{n-1}](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20C%5Ek_%7Bn-1%7D%20&plus;%20C%5E%7Bk-1%7D_%7Bn-1%7D) ... Pascalova identita
  - ![\sum^n_{k=0} C^k_n = 2^n](https://latex.codecogs.com/svg.latex?%5Csum%5En_%7Bk%3D0%7D%20C%5Ek_n%20%3D%202%5En)
  - ![\sum^n_{k=0} (-1)^k C^k_n = 0](https://latex.codecogs.com/svg.latex?%5Csum%5En_%7Bk%3D0%7D%20%28-1%29%5Ek%20C%5Ek_n%20%3D%200)

  **Příklad**: Mám k dispozici pět lidí. Kolika způsoby z nich můžu vybrat trojici?

- **S opakováním**

  n různých exemplářů, každý v libovolném počtu

  ![\overline{C}^k_n = P(n-1, k) = C^k_{n+k-1}](https://latex.codecogs.com/svg.latex?%5Coverline%7BC%7D%5Ek_n%20%3D%20P%28n-1%2C%20k%29%20%3D%20C%5Ek_%7Bn&plus;k-1%7D)

  **Odvození**:

  - 1 reprezentuje, že vyberu objekt
  - 0 se použije jako oddělovač
  - sestavím bitový řetězec, kde použiju n-1 oddělovačů a k výběrů

  **Příklad**: V hospodě mají 4 druhy piva, kolika způsoby si mohu dát 2 libovolná.

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

Některé kombinatorické úlohy je jednodušší řešit tak, že nehledám, které objekty **splňují** dané vlastnosti, ale místo toho najdu objekty, které dané vlastnosti **nesplňují** a ty odečtu od celku.

![N](https://latex.codecogs.com/svg.latex?N) ... počet objektů

![\alpha_i](https://latex.codecogs.com/svg.latex?%5Calpha_i) ... potenciální vlastnosti objektů

![N(\alpha_i)](https://latex.codecogs.com/svg.latex?N%28%5Calpha_i%29) ... objekty, které **mají** vlastnost ![\alpha_i](https://latex.codecogs.com/svg.latex?%5Calpha_i)

![N(\overline{\alpha_i})](https://latex.codecogs.com/svg.latex?N%28%5Coverline%7B%5Calpha_i%7D%29) ... objekty, které **nemají** vlastnost ![\alpha_i](https://latex.codecogs.com/svg.latex?%5Calpha_i)

![\\ N(\overline{\alpha_1}, \overline{\alpha_2}, \ldots, \overline{\alpha_n}) = N\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~- N(\alpha_1) - N(\alpha_2) - \ldots - N(\alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~+ N(\alpha_1, \alpha_2) + N(\alpha_1, \alpha_3) + \ldots + N(\alpha_{n-1}, \alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ - N(\alpha_1, \alpha_2, \alpha_3) - N(\alpha_1, \alpha_2, \alpha_4) - \ldots - N(\alpha_{n-2}, \alpha_{n-1}, \alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ \ldots \\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ + (-1)^n N(\alpha_1, \alpha_2, \ldots, \alpha_n)](https://latex.codecogs.com/svg.latex?%5C%5C%20N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%2C%20%5Cldots%2C%20%5Coverline%7B%5Calpha_n%7D%29%20%3D%20N%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20-%20%5Cldots%20-%20N%28%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_3%29%20&plus;%20%5Cldots%20&plus;%20N%28%5Calpha_%7Bn-1%7D%2C%20%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%20-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_3%29%20-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_4%29%20-%20%5Cldots%20-%20N%28%5Calpha_%7Bn-2%7D%2C%20%5Calpha_%7Bn-1%7D%2C%20%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%20%5Cldots%20%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%20&plus;%20%28-1%29%5En%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Cldots%2C%20%5Calpha_n%29)

![n = 2:](https://latex.codecogs.com/svg.latex?n%20%3D%202%3A)

![N(\overline{\alpha_1}, \overline{\alpha_2}) = N - N(\alpha_1) - N(\alpha_2) + N(\alpha_1, \alpha_2)](https://latex.codecogs.com/svg.latex?N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%29%20%3D%20N%20-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29)

![n = 3:](https://latex.codecogs.com/svg.latex?n%20%3D%203%3A)

![N(\overline{\alpha_1}, \overline{\alpha_2}, \overline{\alpha_3}) = N - N(\alpha_1) - N(\alpha_2) - N(\alpha_3)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~+ N(\alpha_1, \alpha_2) + N(\alpha_1, \alpha_2) + N(\alpha_2, \alpha_3)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~- N(\alpha_1, \alpha_2, \alpha_3)
](https://latex.codecogs.com/svg.latex?N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%2C%20%5Coverline%7B%5Calpha_3%7D%29%20%3D%20N%20-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20-%20N%28%5Calpha_3%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_2%2C%20%5Calpha_3%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_3%29)

![Vennův diagram znázorňující princip exkluze a inkluze](04_princip_inkluze_exkluze.jpg)

*Vennův diagram znázorňující princip inkluze a exkluze pro tři vlastnosti*

## Zobecněný binomický koeficient

Viz kombinace bez opakování.

![C^k_n = \frac{n!}{k! \cdot (n-k)!};~~0 \leq k \leq n](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%20%5Cfrac%7Bn%21%7D%7Bk%21%20%5Ccdot%20%28n-k%29%21%7D%3B%7E%7E0%20%5Cleq%20k%20%5Cleq%20n)

![C^k_n = 0;~~ 0 \leq n < k](https://latex.codecogs.com/svg.latex?C%5Ek_n%20%3D%200%3B%7E%7E%200%20%5Cleq%20n%20%3C%20k)

![C^{-k}_n = C^{-k}_{-n} = 0;~~ 0 < k](https://latex.codecogs.com/svg.latex?C%5E%7B-k%7D_n%20%3D%20C%5E%7B-k%7D_%7B-n%7D%20%3D%200%3B%7E%7E%200%20%3C%20k)

![C^k_{-n} = (-1)^k C^k_{n+k-1};~~ 0 \leq k, 0 < n](https://latex.codecogs.com/svg.latex?C%5Ek_%7B-n%7D%20%3D%20%28-1%29%5Ek%20C%5Ek_%7Bn&plus;k-1%7D%3B%7E%7E%200%20%5Cleq%20k%2C%200%20%3C%20n)

| ![\\k \rightarrow \\ n \downarrow](https://latex.codecogs.com/svg.latex?%5C%5Ck%20%5Crightarrow%20%5C%5C%20n%20%5Cdownarrow) | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| -3 | **1** | **-3** | **6** | **-10** |
| -2 | 1 | -2 | 3 | -4 |
| -1 | 1 | -1 | 1 | -1 |
| *0* | *1* | *0* | *0* | *0* |
| 1 | 1 | 1 | 0 | 0 |
| 2 |  **1** | 2 | 1 | 0 |
| 3 | 1 | **3** | 3 | 1 |
| 4 | 1 | 4 | **6** | 4 |
| 5 | 1 | 5 | 10 | **10** |

Pozn.: Na levé straně (![k < 0](https://latex.codecogs.com/svg.latex?k%20%3C%200)) jsou samé nuly.

### Binomická věta

![(x+y)^n = \sum^n_{k=0} C^k_n \cdot x^k \cdot y^{n-k}](https://latex.codecogs.com/svg.latex?%28x&plus;y%29%5En%20%3D%20%5Csum%5En_%7Bk%3D0%7D%20C%5Ek_n%20%5Ccdot%20x%5Ek%20%5Ccdot%20y%5E%7Bn-k%7D)

### Multinomický vzorec

Zobecnění binomické věty pro více proměnných.

![(x_1 + x_2 + \ldots + x_r)^n = \sum_{\substack{(n_1, n_2, \ldots, n_r)\\ n_1 + n_2 + \ldots + n_r = n \\0 \leq n_i}} P(n_1, n_2, \ldots, n_r) \cdot x_1^{n_1} \cdot x_2^{n_2}\cdot \ldots \cdot x_r^{n_r}](https://latex.codecogs.com/svg.latex?%28x_1%20&plus;%20x_2%20&plus;%20%5Cldots%20&plus;%20x_r%29%5En%20%3D%20%5Csum_%7B%5Csubstack%7B%28n_1%2C%20n_2%2C%20%5Cldots%2C%20n_r%29%5C%5C%20n_1%20&plus;%20n_2%20&plus;%20%5Cldots%20&plus;%20n_r%20%3D%20n%20%5C%5C0%20%5Cleq%20n_i%7D%7D%20P%28n_1%2C%20n_2%2C%20%5Cldots%2C%20n_r%29%20%5Ccdot%20x_1%5E%7Bn_1%7D%20%5Ccdot%20x_2%5E%7Bn_2%7D%5Ccdot%20%5Cldots%20%5Ccdot%20x_r%5E%7Bn_r%7D)

### Newtonův vzorec

Nechť ![|x| < 1, \alpha \in \mathbb{R}](https://latex.codecogs.com/svg.latex?%7Cx%7C%20%3C%201%2C%20%5Calpha%20%5Cin%20%5Cmathbb%7BR%7D), potom:

![(1 + x)^{\alpha} = 1 + \alpha x + \frac{\alpha(\alpha - 1)}{2!}x^2 + \frac{\alpha(\alpha - 1)(\alpha - 2)}{3!}x^3 + \ldots + \frac{\alpha(\alpha - 1)\cdot \ldots \cdot (\alpha - k + 1)}{k!}x^k](https://latex.codecogs.com/svg.latex?%281%20&plus;%20x%29%5E%7B%5Calpha%7D%20%3D%201%20&plus;%20%5Calpha%20x%20&plus;%20%5Cfrac%7B%5Calpha%28%5Calpha%20-%201%29%7D%7B2%21%7Dx%5E2%20&plus;%20%5Cfrac%7B%5Calpha%28%5Calpha%20-%201%29%28%5Calpha%20-%202%29%7D%7B3%21%7Dx%5E3%20&plus;%20%5Cldots%20&plus;%20%5Cfrac%7B%5Calpha%28%5Calpha%20-%201%29%5Ccdot%20%5Cldots%20%5Ccdot%20%28%5Calpha%20-%20k%20&plus;%201%29%7D%7Bk%21%7Dx%5Ek)

## Catalanova čísla

![C_n = \binom{2n}{n} - \binom{2n}{n-1} = \frac{1}{n+1} \cdot \binom{2n}{n}](https://latex.codecogs.com/svg.latex?C_n%20%3D%20%5Cbinom%7B2n%7D%7Bn%7D%20-%20%5Cbinom%7B2n%7D%7Bn-1%7D%20%3D%20%5Cfrac%7B1%7D%7Bn&plus;1%7D%20%5Ccdot%20%5Cbinom%7B2n%7D%7Bn%7D)

**Základní problém**

- Mám šachvnici [m, n]
- Pohybuju se vždy o jeden krok ve směru x nebo ve směru y
- Kolik způsoby se lze dostat z počátku do [m, n] **aniž bych překročil diagonálu**? ... ![C_n](https://latex.codecogs.com/svg.latex?C_n)

**Praktické problémy**

- Kolika způsoby lze správně uzávorkovat výraz ![x_1 \cdot x_2 \cdot \ldots \cdot x_n](https://latex.codecogs.com/svg.latex?x_1%20%5Ccdot%20x_2%20%5Ccdot%20%5Cldots%20%5Ccdot%20x_n)?
  - Musí být dodrženo pravidlo, že v libovolné části výrazu je na levé straně více nebo stejně otevíracích závorek než uzavíracích.
  - Počet způsobů ![C_n](https://latex.codecogs.com/svg.latex?C_n)

- *Kolik permutací lze realizovat pomocí zásobníku?*
  - Nelze vybírat z prázdného zásobníku
  - Vybírat lze pouze zeshora, stejně tak vkládat
  - Počet způsobů opět ![C_n](https://latex.codecogs.com/svg.latex?C_n)

### Subfaktoriály

Kolik existuje permutací, ve kterých žádný prvek není na svém místě?

Použije se princip IE, kde ![\alpha_i](https://latex.codecogs.com/svg.latex?%5Calpha_i) je vlastnost, že ![i](https://latex.codecogs.com/svg.latex?i)-tý prvek je na svém místě.

![D(n) = N(\overline{\alpha_1}, \overline{\alpha_2}, \ldots, \overline{\alpha_n}) = N - \sum_{i=1}^n N(\alpha_i) + \sum_{1\leq i_1 < i_2 \leq n} N(\alpha_{i_1}, \alpha_{i_2}) - \ldots](https://latex.codecogs.com/svg.latex?D%28n%29%20%3D%20N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%2C%20%5Cldots%2C%20%5Coverline%7B%5Calpha_n%7D%29%20%3D%20N%20-%20%5Csum_%7Bi%3D1%7D%5En%20N%28%5Calpha_i%29%20&plus;%20%5Csum_%7B1%5Cleq%20i_1%20%3C%20i_2%20%5Cleq%20n%7D%20N%28%5Calpha_%7Bi_1%7D%2C%20%5Calpha_%7Bi_2%7D%29%20-%20%5Cldots)

![\\
N = n! \\
N(\alpha_i) = (n-1)!~\ldots~C^1_n \\
N(\alpha_{i_1}, \alpha_{i_2}) = (n-2)!~\ldots~C^2_n](https://latex.codecogs.com/svg.latex?%5C%5C%20N%20%3D%20n%21%20%5C%5C%20N%28%5Calpha_i%29%20%3D%20%28n-1%29%21%7E%5Cldots%7EC%5E1_n%20%5C%5C%20N%28%5Calpha_%7Bi_1%7D%2C%20%5Calpha_%7Bi_2%7D%29%20%3D%20%28n-2%29%21%7E%5Cldots%7EC%5E2_n)

![D_n = n! - C^1_n(n-1)! + C^2_n(n-2)! - \ldots + (-1)^nC^n_n0!](https://latex.codecogs.com/svg.latex?D_n%20%3D%20n%21%20-%20C%5E1_n%28n-1%29%21%20&plus;%20C%5E2_n%28n-2%29%21%20-%20%5Cldots%20&plus;%20%28-1%29%5EnC%5En_n0%21)

![D_n = n! - \frac{n!(n-1)!}{1!(n-1)!} + \frac{n!(n-2)!}{2!(n-2)!} - \ldots + (-1)^n \frac{n!0!}{n!0!}](https://latex.codecogs.com/svg.latex?D_n%20%3D%20n%21%20-%20%5Cfrac%7Bn%21%28n-1%29%21%7D%7B1%21%28n-1%29%21%7D%20&plus;%20%5Cfrac%7Bn%21%28n-2%29%21%7D%7B2%21%28n-2%29%21%7D%20-%20%5Cldots%20&plus;%20%28-1%29%5En%20%5Cfrac%7Bn%210%21%7D%7Bn%210%21%7D)

![D_n = n! \underbrace{\begin{bmatrix}
1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \ldots + (-1)^n\frac{1}{n!}
\end{bmatrix}}_{rozvoj~rady~e^{-1}}](https://latex.codecogs.com/svg.latex?D_n%20%3D%20n%21%20%5Cunderbrace%7B%5Cbegin%7Bbmatrix%7D%201%20-%20%5Cfrac%7B1%7D%7B1%21%7D%20&plus;%20%5Cfrac%7B1%7D%7B2%21%7D%20-%20%5Cfrac%7B1%7D%7B3%21%7D%20&plus;%20%5Cldots%20&plus;%20%28-1%29%5En%5Cfrac%7B1%7D%7Bn%21%7D%20%5Cend%7Bbmatrix%7D%7D_%7Brozvoj%7Erady%7Ee%5E%7B-1%7D%7D)

![D(n) = \frac{n!}{e}](https://latex.codecogs.com/svg.latex?D%28n%29%20%3D%20%5Cfrac%7Bn%21%7D%7Be%7D)

![D_k(n)](https://latex.codecogs.com/svg.latex?D_k%28n%29) ... počet permutací na n-prvkové množině, kde právě k prvků je na svém místě

![D_k(n) = C^k_n D(n-k)](https://latex.codecogs.com/svg.latex?D_k%28n%29%20%3D%20C%5Ek_n%20D%28n-k%29)

### Fibonacciho čísla

![F(0) = 0](https://latex.codecogs.com/svg.latex?F%280%29%20%3D%200)

![F(1) = 1](https://latex.codecogs.com/svg.latex?F%281%29%20%3D%201)

![F(n) = F(n-1) + F(n-2)](https://latex.codecogs.com/svg.latex?F%28n%29%20%3D%20F%28n-1%29%20&plus;%20F%28n-2%29)

## Rozklady

- **Nerozlišitelné objekty**
  - _Rozlišitelné skupiny_
    - Bez omezení
    - Neprázdné skupiny
    - S omezujícími podmínkami
  - _Nerozlišitelné skupiny_
- **Rozlišitelné objekty**
 - _Rozlišitelné skupiny_
 - _Nerozlišitelné skupiny_

### Nerozlišitelné objekty do rozlišitelných skupin

Rozděluji n nerozlišitelných objektů do k rozlišitelných skupin.

1. Bez omezení

  Odpovídá počtu řešení diofantické rovnice:

  ![x_1 + x_2 + \ldots + x_k = n](https://latex.codecogs.com/svg.latex?x_1%20&plus;%20x_2%20&plus;%20%5Cldots%20&plus;%20x_k%20%3D%20n)

  - Vytvářím bitový řetězec, kde
  - 1 je objekt,
  - 0 je oddělovač skupin.

  ![P(n, k-1) = c^{k-1}_{n+k-1}](https://latex.codecogs.com/svg.latex?P%28n%2C%20k-1%29%20%3D%20c%5E%7Bk-1%7D_%7Bn&plus;k-1%7D)

  **Vytvořující funkce**

  ![f(x) = \underbrace{(1 + x + x^2 + \ldots + x^{n_1})}_{1.~prihradka} \cdot \underbrace{(1 + x + x^2 + \ldots + x^{n_2})}_{2.~prihradka} \cdot \ldots \cdot \underbrace{(1 + x + x^2 + \ldots + x^{n_k})}_{k.~prihradka}](https://latex.codecogs.com/svg.latex?f%28x%29%20%3D%20%5Cunderbrace%7B%281%20&plus;%20x%20&plus;%20x%5E2%20&plus;%20%5Cldots%20&plus;%20x%5E%7Bn_1%7D%29%7D_%7B1.%7Eprihradka%7D%20%5Ccdot%20%5Cunderbrace%7B%281%20&plus;%20x%20&plus;%20x%5E2%20&plus;%20%5Cldots%20&plus;%20x%5E%7Bn_2%7D%29%7D_%7B2.%7Eprihradka%7D%20%5Ccdot%20%5Cldots%20%5Ccdot%20%5Cunderbrace%7B%281%20&plus;%20x%20&plus;%20x%5E2%20&plus;%20%5Cldots%20&plus;%20x%5E%7Bn_k%7D%29%7D_%7Bk.%7Eprihradka%7D)

  ![f(x) = (1 + x + x^2 + \ldots ) = \mathbf{\frac{1}{(1-x)^k}}](https://latex.codecogs.com/svg.latex?f%28x%29%20%3D%20%281%20&plus;%20x%20&plus;%20x%5E2%20&plus;%20%5Cldots%20%29%20%3D%20%5Cmathbf%7B%5Cfrac%7B1%7D%7B%281-x%29%5Ek%7D%7D)

2. Skupiny jsou *neprázdné*

  - k objektů umístím natvrdo (po jednom do každé skupiny)
  - Tvořím bitový řetězec ze zbytku objektů a oddělovačů.

  ![P(n-k, k-1) = C^{k-1}_{n-1}](https://latex.codecogs.com/svg.latex?P%28n-k%2C%20k-1%29%20%3D%20C%5E%7Bk-1%7D_%7Bn-1%7D)

  **Vytvořující funkce**

  ![f(x) = \mathbf{\frac{x^k}{(1-x)^k}}](https://latex.codecogs.com/svg.latex?f%28x%29%20%3D%20%5Cmathbf%7B%5Cfrac%7Bx%5Ek%7D%7B%281-x%29%5Ek%7D%7D)

3. Omezení počtů jednotlivých skupin

  U skupin můžu specifikovat, kolik má obsahovat nejméně a nejvíce objektů.

  ![x_1 + x_2 + \ldots + \x_k = n;~~a_i \leq x_i \leq b_i](https://latex.codecogs.com/svg.latex?x_1%20&plus;%20x_2%20&plus;%20%5Cldots%20&plus;%20%5Cx_k%20%3D%20n%3B%7E%7Ea_i%20%5Cleq%20x_i%20%5Cleq%20b_i)

  Převede se na standardní tvar.

  ![y_1 + y_2 + \ldots + y_k = m;~~0 \leq y_i \leq c_i](https://latex.codecogs.com/svg.latex?y_1%20&plus;%20y_2%20&plus;%20%5Cldots%20&plus;%20y_k%20%3D%20m%3B%7E%7E0%20%5Cleq%20y_i%20%5Cleq%20c_i)

  Potom se řeší pomocí principu inkluze a exkluze, kde:

  ![N = P(k-1, m)](https://latex.codecogs.com/svg.latex?N%20%3D%20P%28k-1%2C%20m%29)

  ![\alpha_i : c_i + 1 \leq y_i](https://latex.codecogs.com/svg.latex?%5Calpha_i%20%3A%20c_i%20&plus;%201%20%5Cleq%20y_i)

### Nerozlišitelné objekty do nerozlišitelných skupin

- Mám n nerozlišitelných objektů.
- Počet skupin nepředepisuji.
- = *počet rozkladů přirozeného čísla n na nezáporné sčítance*
- odpovídá počtu řešení diofantické rovnice

![x_1 + 2x_2 + 3x_3 \ldots + nx_n = n,~~0 \leq x_i](https://latex.codecogs.com/svg.latex?x_1%20&plus;%202x_2%20&plus;%203x_3%20%5Cldots%20&plus;%20nx_n%20%3D%20n%2C%7E%7E0%20%5Cleq%20x_i)

**Vytvořující funkce**

![f(x) = \underbrace{(1 + x + x^2 + \ldots)}_{1.} \cdot \underbrace{(1 + x^2 + x^4 + x^6 + \ldots)}_{2.} \cdot \ldots \underbrace{\cdot (1 + x^n + x^{2n} + \ldots )}_{n.}](https://latex.codecogs.com/svg.latex?f%28x%29%20%3D%20%5Cunderbrace%7B%281%20&plus;%20x%20&plus;%20x%5E2%20&plus;%20%5Cldots%29%7D_%7B1.%7D%20%5Ccdot%20%5Cunderbrace%7B%281%20&plus;%20x%5E2%20&plus;%20x%5E4%20&plus;%20x%5E6%20&plus;%20%5Cldots%29%7D_%7B2.%7D%20%5Ccdot%20%5Cldots%20%5Cunderbrace%7B%5Ccdot%20%281%20&plus;%20x%5En%20&plus;%20x%5E%7B2n%7D%20&plus;%20%5Cldots%20%29%7D_%7Bn.%7D)

![1.~\ldots ~ \frac{1}{1-x}](https://latex.codecogs.com/svg.latex?1.%7E%5Cldots%20%7E%20%5Cfrac%7B1%7D%7B1-x%7D)

![2.~\ldots ~ \frac{1}{1-x^2}](https://latex.codecogs.com/svg.latex?2.%7E%5Cldots%20%7E%20%5Cfrac%7B1%7D%7B1-x%5E2%7D)

...

![n.~\ldots ~ \frac{1}{1-x^n}](https://latex.codecogs.com/svg.latex?n.%7E%5Cldots%20%7E%20%5Cfrac%7B1%7D%7B1-x%5En%7D)

![f(x) = \mathbf{\prod^n_{i=1} \frac{1}{1-x^i}}](https://latex.codecogs.com/svg.latex?f%28x%29%20%3D%20%5Cmathbf%7B%5Cprod%5En_%7Bi%3D1%7D%20%5Cfrac%7B1%7D%7B1-x%5Ei%7D%7D)

### Rozlišitelné objekty do rozlišitelných skupin

- n rozlišitelných objektů
- k rozlišitelných skupin
- = počet rozkladů množiny na k tříd
- = počet ekvivalencí na množině, které mají k tříd ekvivalence
- = Stirling subset number

![Rozklad množiny o n prvcích na k tříd ekvivalence](04_rozklad_mnoziny.jpg)

*Rozklad množiny o ![n](https://latex.codecogs.com/svg.latex?n) prvcích na ![k](https://latex.codecogs.com/svg.latex?k) tříd ekvivalence*

**Stirling subset number**

![0 \leq k \leq n](https://latex.codecogs.com/svg.latex?0%20%5Cleq%20k%20%5Cleq%20n)

![\begin{Bmatrix}n\\k\end{Bmatrix}](https://latex.codecogs.com/svg.latex?%5Cbegin%7BBmatrix%7Dn%5C%5Ck%5Cend%7BBmatrix%7D)

![\begin{Bmatrix}n\\0\end{Bmatrix} = \begin{Bmatrix}
1,~ n=0~~\\
0,~ n \in \mathbb{N}^+
\end{Bmatrix}](https://latex.codecogs.com/svg.latex?%5Cbegin%7BBmatrix%7Dn%5C%5C0%5Cend%7BBmatrix%7D%20%3D%20%5Cbegin%7BBmatrix%7D%201%2C%7E%20n%3D0%7E%7E%5C%5C%200%2C%7E%20n%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;%20%5Cend%7BBmatrix%7D)

![\begin{Bmatrix}n\\1\end{Bmatrix} = \begin{Bmatrix}n\\n\end{Bmatrix} = 1,~n \in \mathbb{N}^+](https://latex.codecogs.com/svg.latex?%5Cbegin%7BBmatrix%7Dn%5C%5C1%5Cend%7BBmatrix%7D%20%3D%20%5Cbegin%7BBmatrix%7Dn%5C%5Cn%5Cend%7BBmatrix%7D%20%3D%201%2C%7En%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;)

![\begin{Bmatrix}n\\n-1\end{Bmatrix} = \binom{n}{2}](https://latex.codecogs.com/svg.latex?%5Cbegin%7BBmatrix%7Dn%5C%5Cn-1%5Cend%7BBmatrix%7D%20%3D%20%5Cbinom%7Bn%7D%7B2%7D)

![\begin{Bmatrix}n\\k\end{Bmatrix} = \begin{Bmatrix}n-1\\k-1\end{Bmatrix} + k \cdot \begin{Bmatrix}n-1\\k\end{Bmatrix}](https://latex.codecogs.com/svg.latex?%5Cbegin%7BBmatrix%7Dn%5C%5Ck%5Cend%7BBmatrix%7D%20%3D%20%5Cbegin%7BBmatrix%7Dn-1%5C%5Ck-1%5Cend%7BBmatrix%7D%20&plus;%20k%20%5Ccdot%20%5Cbegin%7BBmatrix%7Dn-1%5C%5Ck%5Cend%7BBmatrix%7D)

**Stirling cycle number**

Kolik existuje permutací na n-prvkové množině, které lze zapsat ve tvaru součinu k disjunktních cyklů?

= n prvková množina, rozděluji do k tříd ve kterých prvky rozmisťuju na kružnici

= ![\begin{bmatrix}n\\k\end{bmatrix}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Bbmatrix%7Dn%5C%5Ck%5Cend%7Bbmatrix%7D)

![0 \leq \begin{bmatrix}n\\k\end{bmatrix} \leq n!](https://latex.codecogs.com/svg.latex?0%20%5Cleq%20%5Cbegin%7Bbmatrix%7Dn%5C%5Ck%5Cend%7Bbmatrix%7D%20%5Cleq%20n%21)

![\begin{bmatrix}n\\0\end{bmatrix} = \begin{Bmatrix}
1,~n = 0~~\\
0,~n \in \mathbb{N}^+
\end{Bmatrix}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Bbmatrix%7Dn%5C%5C0%5Cend%7Bbmatrix%7D%20%3D%20%5Cbegin%7BBmatrix%7D%201%2C%7En%20%3D%200%7E%7E%5C%5C%200%2C%7En%20%5Cin%20%5Cmathbb%7BN%7D%5E&plus;%20%5Cend%7BBmatrix%7D)

![\begin{bmatrix}n\\1\end{bmatrix} = \frac{n!}{n}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Bbmatrix%7Dn%5C%5C1%5Cend%7Bbmatrix%7D%20%3D%20%5Cfrac%7Bn%21%7D%7Bn%7D)

![\begin{bmatrix}n\\n\end{bmatrix} = 1](https://latex.codecogs.com/svg.latex?%5Cbegin%7Bbmatrix%7Dn%5C%5Cn%5Cend%7Bbmatrix%7D%20%3D%201)

![\begin{bmatrix}n\\k\end{bmatrix} = \begin{bmatrix}n-1\\k-1\end{bmatrix} + (n-1) \cdot \begin{bmatrix}n-1\\k\end{bmatrix}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Bbmatrix%7Dn%5C%5Ck%5Cend%7Bbmatrix%7D%20%3D%20%5Cbegin%7Bbmatrix%7Dn-1%5C%5Ck-1%5Cend%7Bbmatrix%7D%20&plus;%20%28n-1%29%20%5Ccdot%20%5Cbegin%7Bbmatrix%7Dn-1%5C%5Ck%5Cend%7Bbmatrix%7D)

### Rozlišitelné objekty do nerozlišitelných skupin
Tuto problematiku jsme neřešili.
