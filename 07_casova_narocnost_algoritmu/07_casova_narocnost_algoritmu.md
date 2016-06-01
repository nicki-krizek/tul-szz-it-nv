# 07. - Časová náročnost algoritmů

>Časová náročnost algoritmů. Průměrné a nejhorší chování. Úlohy P, NP a NP-úplné.

- Máme funkci ![f(n)](https://latex.codecogs.com/svg.latex?f%28n%29) a snažíme se popsat její asymptotické chování.
- Časová složitost se také označuje jako asymptotická složitost.
- Kromě časové složitosti se někdy určuje i paměťová náročnost.
- Používá se symbolika:
  - ![\mathcal{O}](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D) ... velké O
  - ![\Omega](https://latex.codecogs.com/svg.latex?%5COmega) ... velké omega
  - ![\Theta](https://latex.codecogs.com/svg.latex?%5CTheta) ... velké theta
- ![f: \mathbb{N} \rightarrow \mathbb{R}^+](https://latex.codecogs.com/svg.latex?f%3A%20%5Cmathbb%7BN%7D%20%5Crightarrow%20%5Cmathbb%7BR%7D%5E&plus;)
- ![g: \mathbb{N} \rightarrow \mathbb{R}^+](https://latex.codecogs.com/svg.latex?g%3A%20%5Cmathbb%7BN%7D%20%5Crightarrow%20%5Cmathbb%7BR%7D%5E&plus;)

## ![\mathcal{O}](https://latex.codecogs.com/svg.latex?%5CLARGE%20%5Cmathcal%7BO%7D) (Velké O)

- Omezuje růst funkce shora
- Používá se nejčastěji pro udávání asymptotické složitosti algoritmů (oproti dvěma zbylím notacím)
- Říká, že funkce ![f](https://latex.codecogs.com/svg.latex?f) neroste rychleji než kladný násobek funkce ![g](https://latex.codecogs.com/svg.latex?g)

**Zápis**

![f(n) \in \mathcal{O}(g(n))](https://latex.codecogs.com/svg.latex?f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28g%28n%29%29) (![f(n)](https://latex.codecogs.com/svg.latex?f%28n%29) je prvkem velkého ![\mathcal{O}(g(n))](https://latex.codecogs.com/svg.latex?f%28n%29)) právě tehdy, když:

![\exists K > 0 ~ \exists n_0~\forall n > n_0 ~ f(n) \leq K \cdot g(n)](https://latex.codecogs.com/svg.latex?%5Cexists%20K%20%3E%200%20%7E%20%5Cexists%20n_0%7E%5Cforall%20n%20%3E%20n_0%20%7E%20f%28n%29%20%5Cleq%20K%20%5Ccdot%20g%28n%29)

### Porovnání složitostí

V tabulce seřazeno od nejrychlejší po nejnáročnější.

| Notace  | Název | Příklad algoritmu |
| ------- | ----- | ----------------- |
| ![\mathcal{O}(1)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%281%29) | konstantní | nalezení prvku v hashovací tabulce |
| ![\mathcal{O}(\log n)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%28%5Clog%20n%29) | logaritmická | vyhledání prvku metodou půlení intervalu v seřazeném poli |
| ![\mathcal{O}(n)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%28n%29_ | lineární | vyhledání prvku v neseřazeném poli |
| ![\mathcal{O}(n \cdot \log n)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%28n%20%5Ccdot%20%5Clog%20n%29) | linearitmická | merge sort |
| ![\mathcal{O}(n^2)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%28n%5E2%29) | kvadratická | řazení pole výběrem |
| ![\mathcal{O}(n^3)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%28n%5E3%29) | kubická | násobení matic |
| ![\mathcal{O}(2^n)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%282%5En%29) | exponenciální |  |
| ![\mathcal{O}(n!)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%28n%21%29) | faktoriálová | problém obchodního cestujícího hrubou silou |
| ![\mathcal{O}(n^n)](https://latex.codecogs.com/svg.latex?%5Cmathcal%7BO%7D%28n%5En%29) | | |

## ![\Omega](https://latex.codecogs.com/svg.latex?%5CLARGE%20%5COmega) (Velké omega)

- Omezuje růst funkce zdola
- Říká, že funkce ![f](https://latex.codecogs.com/svg.latex?f) roste alespoň tak rychle jako ![g](https://latex.codecogs.com/svg.latex?g) (až na multiplikativní konstantu)

**Zápis**

![f(n) \in \Omega(g(n)) \leftrightarrow \exists K > 0 ~ \exists n_0 ~ \forall n > n_0 ~ f(n) \geq K \cdot g(n)](https://latex.codecogs.com/svg.latex?f%28n%29%20%5Cin%20%5COmega%28g%28n%29%29%20%5Cleftrightarrow%20%5Cexists%20K%20%3E%200%20%7E%20%5Cexists%20n_0%20%7E%20%5Cforall%20n%20%3E%20n_0%20%7E%20f%28n%29%20%5Cgeq%20K%20%5Ccdot%20g%28n%29)

## ![\Theta](https://latex.codecogs.com/svg.latex?%5CLARGE%20%5CTheta) (Velké theta)

- Omezuje růst funkce shora i zdola
- Říká, že funkce ![f](https://latex.codecogs.com/svg.latex?f) roste stejně rychle jako funkce ![g](https://latex.codecogs.com/svg.latex?g) (až na multiplikativní konstanty)

**Zápis**

![f(n) \in \Theta(g(n)) \leftrightarrow \exists K_1, K_2 > 0 ~ \exists n_0 ~ \forall n > n_0 ~ K_1 \cdot g(n) \leq f(n) \leq K_2 \cdot g(n)](https://latex.codecogs.com/svg.latex?f%28n%29%20%5Cin%20%5CTheta%28g%28n%29%29%20%5Cleftrightarrow%20%5Cexists%20K_1%2C%20K_2%20%3E%200%20%7E%20%5Cexists%20n_0%20%7E%20%5Cforall%20n%20%3E%20n_0%20%7E%20K_1%20%5Ccdot%20g%28n%29%20%5Cleq%20f%28n%29%20%5Cleq%20K_2%20%5Ccdot%20g%28n%29)


