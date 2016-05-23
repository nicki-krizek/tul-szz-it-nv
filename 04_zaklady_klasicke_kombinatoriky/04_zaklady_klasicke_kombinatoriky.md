# 4. Základy klasické kombinatoriky

> Základy klasické kombinatoriky – princip inkluze a exkluze, Dirichletův princip, zobecněný binomický koeficient, subfaktoriály, Fibonacciho, Catalanova a Stirlingova čísla, problematika rozkladů – varianty, (ne)rozlišitelné objekty, (ne)rozlišitelné skupiny, využití diofantických rovnic a vytvořujících funkcí v oblasti rozkladů.

## Problematika

Máme n objektů, vybíráme k-tice.

- **Variace** k-té třídy = *uspořádané* k-tice prvků
  - Bez opakování (všechny prvky různé)
  - S opakováním
- **Kombinace** k-té třídy = *neuspořádané k-tice*
  - Bez opakování
  - S opakováním
- **Permutace** = variace, kde ![k = n](https://latex.codecogs.com/svg.latex?k%20%3D%20n) (uspořádané n-tice)
  - Bez opakování
  - S opakováním

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

N(\overline{\alpha_i}) ... objekty, které **nemají** vlastnost ![\alpha_i](https://latex.codecogs.com/svg.latex?%5Calpha_i)

![\\
N(\overline{\alpha_1}, \overline{\alpha_2}, \ldots, \overline{\alpha_n}) = N\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~- N(\alpha_1) - N(\alpha_2) - \ldots - N(\alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~+ N(\alpha_1, \alpha_2) + N(\alpha_1, \alpha_3) + \ldots + N(\alpha_{n-1}, \alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~- N(\alpha_1, \alpha_2, \alpha_3) - N(\alpha_1, \alpha_2, \alpha_4) - N(\alpha_{n-2}, \alpha_{n-1}, \alpha_n)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ \ldots \\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ + (-1)^n N(\alpha_1, \alpha_2, \ldots, \alpha_n)
](https://latex.codecogs.com/svg.latex?%5C%5C%20N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%2C%20%5Cldots%2C%20%5Coverline%7B%5Calpha_n%7D%29%20%3D%20N%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20-%20%5Cldots%20-%20N%28%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_3%29%20&plus;%20%5Cldots%20&plus;%20N%28%5Calpha_%7Bn-1%7D%2C%20%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_3%29%20-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_4%29%20-%20N%28%5Calpha_%7Bn-2%7D%2C%20%5Calpha_%7Bn-1%7D%2C%20%5Calpha_n%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%20%5Cldots%20%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%20&plus;%20%28-1%29%5En%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Cldots%2C%20%5Calpha_n%29)

![n = 2:](https://latex.codecogs.com/svg.latex?n%20%3D%202%3A)
![N(\overline{\alpha_1}, \overline{\alpha_2}) = N - N(\alpha_1) - N(\alpha_2) + N(\alpha_1, \alpha_2)](https://latex.codecogs.com/svg.latex?N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%29%20%3D%20N%20-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29)

![n = 3:](https://latex.codecogs.com/svg.latex?n%20%3D%203%3A)
![N(\overline{\alpha_1}, \overline{\alpha_2}, \overline{\alpha_3}) = N - N(\alpha_1) - N(\alpha_2) - N(\alpha_3)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~+ N(\alpha_1, \alpha_2) + N(\alpha_1, \alpha_2) + N(\alpha_2, \alpha_3)\\  ~~~~~~~~~~~~~~~~~~~~~~~~~~~- N(\alpha_1, \alpha_2, \alpha_3)
](https://latex.codecogs.com/svg.latex?N%28%5Coverline%7B%5Calpha_1%7D%2C%20%5Coverline%7B%5Calpha_2%7D%2C%20%5Coverline%7B%5Calpha_3%7D%29%20%3D%20N%20-%20N%28%5Calpha_1%29%20-%20N%28%5Calpha_2%29%20-%20N%28%5Calpha_3%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_1%2C%20%5Calpha_2%29%20&plus;%20N%28%5Calpha_2%2C%20%5Calpha_3%29%5C%5C%20%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E%7E-%20N%28%5Calpha_1%2C%20%5Calpha_2%2C%20%5Calpha_3%29)


