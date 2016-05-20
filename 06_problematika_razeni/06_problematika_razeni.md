# 6. Problematika řazení

```
Problematika řazení – základní algoritmy a jejich složitost.
```

## Formální definice

![A](http://latex.codecogs.com/gif.latex?%5Clarge%20A) ... abeceda, nad kterou je dáno řazení

![a_{i_1}, a_{i_2}, \ldots , a_{i_n}](http://latex.codecogs.com/gif.latex?%5Clarge%20a_%7Bi_1%7D%2C%20a_%7Bi_2%7D%2C%20%5Cldots%20%2C%20a_%7Bi_n%7D) ... posloupnost (slovo) nad abecedou ![A](http://latex.codecogs.com/gif.latex?%5Clarge%20A)

Cílem je nalézt permutaci ![\pi \in S_n](http://latex.codecogs.com/gif.latex?%5Clarge%20%5Cpi%20%5Cin%20S_n) takovou, že posloupnost ![a_{\pi(i_1)} a_{\pi(i_2)} \ldots a_{\pi(i_n)}](http://latex.codecogs.com/gif.latex?%5Clarge%20a_%7B%5Cpi%28i_1%29%7D%20a_%7B%5Cpi%28i_2%29%7D%20%5Cldots%20a_%7B%5Cpi%28i_n%29%7D) je setříděná, tj. ![a_{\pi(i_j)} \leq a_{\pi(i_{j+1})}](http://latex.codecogs.com/gif.latex?%5Clarge%20a_%7B%5Cpi%28i_j%29%7D%20%5Cleq%20a_%7B%5Cpi%28i_%7Bj&plus;1%7D%29%7D)

## Vlastnosti

- *na místě* - pro řazení se nepoužívá žádná další datová struktura (např. další pole)
- *stabilní* - v seřazené posloupnosti je zachováno pořadí rovnocenných prvků
- [*interní*](https://en.wikipedia.org/wiki/Internal_sort) - všechna data jsou k dispozici v paměti
- [*externí*](https://en.wikipedia.org/wiki/External_sorting) - další prvky přichází v průběhu řazení

## Princip

### Rozšřování setříděné části

#### Selection Sort

#### Insertion Sort

### Záměna dvojic mimo pořadí

#### Bubble Sort

#### Sinking Sort

#### Shaker Sort

### Divide and conquer

#### Merge sort

#### Quick sort

