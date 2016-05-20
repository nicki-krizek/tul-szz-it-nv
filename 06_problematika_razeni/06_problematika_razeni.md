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
- [*časová složitost*](https://cs.wikipedia.org/wiki/Asymptotick%C3%A1_slo%C5%BEitost) (dále jako ![f(n)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29))
- *paměťová složitost*

## a) Rozšřování setříděné části

### Selection Sort

V každém kroku vybere z nesetříděné části nejmenší prvek a vloží nakonec setříděné části.

|  64  |  25  |  12  |  22  |  11  |
|**11**|  64  |  25  |  12  |  22  |
|**11**|**12**|  64  |  25  |  22  |
|**11**|**12**|**22**|  64  |  25  |
|**11**|**12**|**22**|**25**|**64**|

![f(n) \in \mathcal{O}(n^2)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%5Cin%20%5Cmathcal%7BO%7D%28n%5E2%29)

![f(n) = f(n - 1) + (n - 1)](http://latex.codecogs.com/gif.latex?%5Clarge%20f%28n%29%20%3D%20f%28n%20-%201%29%20&plus;%20%28n%20-%201%29)


### Insertion Sort

## b) Záměna dvojic mimo pořadí

### Bubble Sort

### Sinking Sort

### Shaker Sort

## c) Divide and conquer

### Merge sort

### Quick sort

