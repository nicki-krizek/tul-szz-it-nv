# 6. Problematika řazení

```
Problematika řazení – základní algoritmy a jejich složitost.
```

## Formální definice

![A](http://latex.codecogs.com/gif.latex?%5Clarge%26space%3BA) ... abeceda, nad kterou je dáno řazení

![a_{i_1}, a_{i_2}, \ldots , a_{i_n}](http://latex.codecogs.com/gif.latex?%5Clarge%26space%3Ba_%7Bi_1%7D%2C%26space%3Ba_%7Bi_2%7D%2C%26space%3B%5Cldots%26space%3B%2C%26space%3Ba_%7Bi_n%7D) ... posloupnost (slovo) nad abecedou ![A](http://latex.codecogs.com/gif.latex?%5Clarge%26space%3BA)

Cílem je nalézt permutaci ![\pi \in S_n](http://latex.codecogs.com/gif.latex?%5Clarge%26space%3B%5Cpi%26space%3B%5Cin%26space%3BS_n) takovou, že posloupnost ![a_{\pi(i_1)} a_{\pi(i_2)} \ldots a_{\pi(i_n)}](http://latex.codecogs.com/gif.latex?%5Clarge%26space%3Ba_%7B%5Cpi(i_1)%7D%26space%3Ba_%7B%5Cpi(i_2)%7D%26space%3B%5Cldots%26space%3Ba_%7B%5Cpi(i_n)%7D) je setříděná, tj. ![a_{\pi(i_j)} \leq a_{\pi(i_{j+1})}](http://latex.codecogs.com/gif.latex?%5Clarge%26space%3Ba_%7B%5Cpi(i_j)%7D%26space%3B%5Cleq%26space%3Ba_%7B%5Cpi(i_%7Bj%26plus%3B1%7D)%7D)

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

