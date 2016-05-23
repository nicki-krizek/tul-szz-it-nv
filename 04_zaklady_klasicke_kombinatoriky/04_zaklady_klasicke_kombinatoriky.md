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

![A \cap B = \varnothing; | A \times B | = |A| \cdot |B|](https://latex.codecogs.com/svg.latex?A%20%5Ccap%20B%20%3D%20%5Cvarnothing%3B%20%7C%20A%20%5Ctimes%20B%20%7C%20%3D%20%7CA%7C%20%5Ccdot%20%7CB%7C)

Počet způsobů, jak vybrat uspořádanou dvojici ![(a, b),~a \in A,~b \in B](https://latex.codecogs.com/svg.latex?%28a%2C%20b%29%2C%7Ea%20%5Cin%20A%2C%7Eb%20%5Cin%20B) je roven násobku mohutnosti množin.

### Dirichletův princip

Při libovolném rozdělení n objektů do k skupin platí, že alespoň jedna skupina obsahuje alespoň ![\left \lceil \frac{n}{k} \right \rceil](https://latex.codecogs.com/svg.latex?%5Cleft%20%5Clceil%20%5Cfrac%7Bn%7D%7Bk%7D%20%5Cright%20%5Crceil) objektů.

Prakticky: n krabiček, n+1 kuliček ... jedna krabička musí obsahovat dvě kuličky

### Princip inkluze a exkluze

Některé kombinatorické úlohy je jednodušší řešit tak, že nehledám, které objekty splňují dané vlastnosti, ale místo toho najdu objekty, které dané vlastnosti *nesplňují* a ty odečtu od celku.




