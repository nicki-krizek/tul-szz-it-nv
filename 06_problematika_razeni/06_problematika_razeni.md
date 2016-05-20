# 6. Problematika řazení

```
Problematika řazení – základní algoritmy a jejich složitost.
```

## Formální definice

![A](http://latex.codecogs.com/gif.latex?\large&space;A) ... abeceda, nad kterou je dáno řazení
![a_{i_1}, a_{i_2}, \ldots , a_{i_n}](http://latex.codecogs.com/gif.latex?\large&space;a_{i_1},&space;a_{i_2},&space;\ldots&space;,&space;a_{i_n}) ... posloupnost (slovo) nad abecedou ![A](http://latex.codecogs.com/gif.latex?\large&space;A)

Cílem je nalézt permutaci ![\pi \in S_n](http://latex.codecogs.com/gif.latex?\large&space;\pi&space;\in&space;S_n) takovou, že posloupnost ![a_{\pi(i_1)} a_{\pi(i_2)} \ldots a_{\pi(i_n)}](http://latex.codecogs.com/gif.latex?\large&space;a_{\pi(i_1)}&space;a_{\pi(i_2)}&space;\ldots&space;a_{\pi(i_n)}) je setříděná, tj. ![a_{\pi(i_j)} \leq a_{\pi(i_{j+1})}](http://latex.codecogs.com/gif.latex?\large&space;a_{\pi(i_j)}&space;\leq&space;a_{\pi(i_{j&plus;1})})

## Vlastnosti

- `na místě` - pro řazení se nepoužívá žádná další datová struktura (např. další pole)
- `stabilní` - v seřazené posloupnosti je zachováno pořadí rovnocenných prvků
- `[interní](https://en.wikipedia.org/wiki/Internal_sort)` - všechna data jsou k dispozici v paměti
- `[externí](https://en.wikipedia.org/wiki/External_sorting)` - další prvky přichází v průběhu řazení

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

