# 6. Problematika řazení

> Problematika řazení – základní algoritmy a jejich složitost.

## Formální definice

![A](http://latex.codecogs.com/gif.latex?%5Clarge%20A) ... abeceda, nad kterou je dáno řazení

![a_{i_1}, a_{i_2}, \ldots , a_{i_n}](http://latex.codecogs.com/gif.latex?%5Clarge%20a_%7Bi_1%7D%2C%20a_%7Bi_2%7D%2C%20%5Cldots%20%2C%20a_%7Bi_n%7D) ... posloupnost (slovo) nad abecedou ![A](http://latex.codecogs.com/gif.latex?%5Clarge%20A)

Cílem je nalézt permutaci ![\pi \in S_n](http://latex.codecogs.com/gif.latex?%5Clarge%20%5Cpi%20%5Cin%20S_n) takovou, že posloupnost ![a_{\pi(i_1)} a_{\pi(i_2)} \ldots a_{\pi(i_n)}](http://latex.codecogs.com/gif.latex?%5Clarge%20a_%7B%5Cpi%28i_1%29%7D%20a_%7B%5Cpi%28i_2%29%7D%20%5Cldots%20a_%7B%5Cpi%28i_n%29%7D) je setříděná, tj. ![a_{\pi(i_j)} \leq a_{\pi(i_{j+1})}](http://latex.codecogs.com/gif.latex?%5Clarge%20a_%7B%5Cpi%28i_j%29%7D%20%5Cleq%20a_%7B%5Cpi%28i_%7Bj&plus;1%7D%29%7D)

## Vlastnosti

- *na místě* - pro řazení se nepoužívá žádná další datová struktura (např. další pole)
- *stabilní* - v seřazené posloupnosti je zachováno pořadí rovnocenných prvků
- [*interní*](https://en.wikipedia.org/wiki/Internal_sort) - všechna data jsou k dispozici v paměti
- [*externí*](https://en.wikipedia.org/wiki/External_sorting) - další prvky přichází v průběhu řazení
- [*časová složitost*](https://cs.wikipedia.org/wiki/Asymptotick%C3%A1_slo%C5%BEitost) (dále jako ![f(n)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29))
- *paměťová složitost*

## a) Rozšřování setříděné části

### Selection Sort

V každém kroku vybere z nesetříděné části nejmenší prvek a vloží nakonec setříděné části.

![f(n) \in \mathcal{O}(n^2)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28n%5E2%29)

![f(n) = f(n - 1) + (n - 1)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%3D%20f%28n%20-%201%29%20&plus;%20%28n%20-%201%29)

[Řazení výběrem (cs wiki)](https://cs.wikipedia.org/wiki/%C5%98azen%C3%AD_v%C3%BDb%C4%9Brem)

[Selection Sort (en wiki)](https://en.wikipedia.org/wiki/Selection_sort)

### Insertion Sort

Vyberu první prvek z nesetříděné části a zařadím ho na správné místo v setříděné části.

v nejhorším případě ... ![f(n) \in \mathcal{O}(n^2)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28n%5E2%29)

pro téměř seřazenou posloupnost ... ![f(n) \in \mathcal{O}(n)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28n%29)

[Řazení vkládáním (cs wiki)](https://cs.wikipedia.org/wiki/%C5%98azen%C3%AD_vkl%C3%A1d%C3%A1n%C3%ADm)

[Insertion Sort (en wiki)](https://en.wikipedia.org/wiki/Insertion_sort)

## b) Záměna dvojic mimo pořadí

### Bubble Sort

Nesetříděnou posloupnost procházím shora dolů a porovnávám dvojice po sobě jdoucích prvků; dvojice mimo pořadí zaměním.

![f(n) \in \mathcal{O}(n^2)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28n%5E2%29)

[Bubble Sort (cs wiki)](https://cs.wikipedia.org/wiki/Bublinkov%C3%A9_%C5%99azen%C3%AD)

[Bubble Sort (en wiki)](https://en.wikipedia.org/wiki/Bubble_sort)

### Sinking Sort

Stejné jako bubble sort, akorát procházím od zdola nahoru.

### Shaker Sort

Kombinace Bubble Sort a Shaker Sort. Střídá se procházecí pořadí.

[Koktejlové řazení (cs wiki)](https://cs.wikipedia.org/wiki/Koktejlov%C3%A9_%C5%99azen%C3%AD)

[Cocktail Shaker Sort (en wiki)](https://en.wikipedia.org/wiki/Cocktail_shaker_sort)

## c) Divide and conquer

### Merge sort

Vstupní posloupnost se rekurzivně dělí na dvě poloviny až jsou poslopnosti délky jedna. Následuje zpětný chod, tj. sestavení setříděné posloupnosti.

![f(n) = 2f(\frac{n}{2}) + n](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%3D%202f%28%5Cfrac%7Bn%7D%7B2%7D%29%20&plus;%20n)

![f(n) \in \mathcal{O}(n \cdot \log_2 n)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28n%20%5Ccdot%20%5Clog_2%20n%29)

[Merge Sort (cs wiki)](https://cs.wikipedia.org/wiki/Merge_sort)

[Merge Sort (en wiki)](https://en.wikipedia.org/wiki/Merge_sort)

### Quick sort

Zvolíme tzv. pivota a posloupnost rozdělíme na dvě části. Jedna z nich obsahuje prvky menší nebo rovny pivotu a druhá obsahuje prvky větší než pivot. Na tyto dvě posloupnosti se rekurzivně aplikuje stejná operace.

složitost v nejhorším případě ... ![f(n) \in \mathcal{O}(n^2)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28n%5E2%29)

průměrná složitost ... ![f(n) \in \mathcal{O}(n \cdot \log_2 n)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28n%20%5Ccdot%20%5Clog_2%20n%29)

## Odkazy

[Sorting Algorhitm Animations](http://www.sorting-algorithms.com/)

