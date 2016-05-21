# 8. Konečné automaty

> Definice konečného automatu, jazyky rozpoznávané konečnými automaty.

## Formální definice

Konečným automatem je

![A = (Q, \Sigma, \delta, q_0, F)](http://latex.codecogs.com/gif.latex?A%20%3D%20%28Q%2C%20%5CSigma%2C%20%5Cdelta%2C%20q_0%2C%20F%29), kde

- ![Q](http://latex.codecogs.com/gif.latex?Q) je konečná množina všech stavů (stavový prostor),

- ![\Sigma](http://latex.codecogs.com/gif.latex?%5CSigma) je konečná množina vstupních symbolů (abeceda),

- ![\delta](http://latex.codecogs.com/gif.latex?%5Cdelta) je přechodová funkce,

  ![\delta: Q \times \Sigma \rightarrow Q](http://latex.codecogs.com/gif.latex?%5Cdelta%3A%20Q%20%5Ctimes%20%5CSigma%20%5Crightarrow%20Q)

  ![q \in Q, z \in \Sigma, \delta(q, z) \in Q](http://latex.codecogs.com/gif.latex?q%20%5Cin%20Q%2C%20z%20%5Cin%20%5CSigma%2C%20%5Cdelta%28q%2C%20z%29%20%5Cin%20Q)

- ![q_0 \in Q](http://latex.codecogs.com/gif.latex?q_0%20%5Cin%20Q) je počáteční stav,

- ![F \subset Q](http://latex.codecogs.com/gif.latex?F%20%5Csubset%20Q) je množina koncových stavů.

### Přeloženo

Konečný automat (KA) je reprezentován pomocí stavů. Je schopen pracovat s nějakými vstupními znaky, kterým se říká abeceda. Ze vstupu čte postupně znaky této abecedy. S každým přečtením znaku se může přesunout do jiného vnitřního stavu. Jeden z těchto stavů se označí za vstupní - tam automat začíná svojí činnost. Některé (lze i žádné) stavy se označí jako koncové. Pokud se automat dostane do koncového stavu, ukončí svoji činnost a vstupní slovo (posloupnost znaků dané abecedy) bylo rozpoznáno (akceptováno).

## Jazyk rozpoznávaný KA

Množina všech slov, které je schopen KA ![A](http://latex.codecogs.com/gif.latex?A) rozpoznat tvoří jazyk ![L(A)](http://latex.codecogs.com/gif.latex?L%28A%29). Formálně:

![L(A) = \{w \in \Sigma^*; \delta(q_0, w) \in F\} \subset \Sigma^*](http://latex.codecogs.com/gif.latex?L%28A%29%20%3D%20%5C%7Bw%20%5Cin%20%5CSigma%5E*%3B%20%5Cdelta%28q_0%2C%20w%29%20%5Cin%20F%5C%7D%20%5Csubset%20%5CSigma%5E*)

Jazyk ![L](http://latex.codecogs.com/gif.latex?L) je **rozpoznatelný** KA, jestliže existuje KA ![A](http://latex.codecogs.com/gif.latex?A) takový, že ![L = L(A)](http://latex.codecogs.com/gif.latex?L%20%3D%20L%28A%29).

Jazyky, které KA rozpoznávají jsou **regulární**. Viz ![Chomského hierarchie v okruhu 9 (Gramatiky)](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/09_gramatiky/09_gramatiky.md#chomsk%C3%A9ho-hierarchie).

## Reprezentace automatu

Následující KA rozpoznává binární čísla, která mají sudý počet nul. 

KA je možné reprezentovat několika způsoby.

1. Formální zápis

  ![A = (Q, \Sigma, \delta, S_1, F)](http://latex.codecogs.com/gif.latex?A%20%3D%20%28Q%2C%20%5CSigma%2C%20%5Cdelta%2C%20q_0%2C%20F%29)

  ![Q = \{S_1, S_2\}](http://latex.codecogs.com/gif.latex?Q%20%3D%20%5C%7BS_1%2C%20S_2%5C%7D)

  ![\Sigma = \{0, 1\}](http://latex.codecogs.com/gif.latex?%5CSigma%20%3D%20%5C%7B0%2C%201%5C%7D)

  ![F = \{S_1\}](http://latex.codecogs.com/gif.latex?F%20%3D%20%5C%7BS_1%5C%7D)

  ![\delta: \delta(S_1, 0) = S_2, \delta(S_1, 1) = S_1, \delta(S_2, 0) = S_1, \delta(S_2, 1) = S_2](http://latex.codecogs.com/gif.latex?%5Cdelta%3A%20%5Cdelta%28S_1%2C%200%29%20%3D%20S_2%2C%20%5Cdelta%28S_1%2C%201%29%20%3D%20S_1%2C%20%5Cdelta%28S_2%2C%200%29%20%3D%20S_1%2C%20%5Cdelta%28S_2%2C%201%29%20%3D%20S_2)

2. Stavovým diagramem

  ![KA rozpoznavajici binarni cisla se sudym poctem nul](08_konecny_automat_sudy_pocet_nul.png)

3. Tabulkou

  | &nbsp; |  0  |  1  |
  | --- | --- | --- |
  | ![\leftrightarrow S_1](http://latex.codecogs.com/gif.latex?%5Cleftrightarrow%20S_1) | ![S_2](http://latex.codecogs.com/gif.latex?S_2) | ![S_1](http://latex.codecogs.com/gif.latex?S_1) |
  | ![S_2](http://latex.codecogs.com/gif.latex?S_2) | ![S_1](http://latex.codecogs.com/gif.latex?S_1) | ![S_2](http://latex.codecogs.com/gif.latex?S_2) |

  Pomocí šipek se označí stav jako vstupní (![\rightarrow](http://latex.codecogs.com/gif.latex?%5Crightarrow)), výstupní (![\leftarrow](http://latex.codecogs.com/gif.latex?%5Cleftarrow)) nebo vstupní i výstupní zároveň (![\leftrightarrow](http://latex.codecogs.com/gif.latex?%5Cleftrightarrow)).

4. Stavovým stromem

  ![Stavovy strom](08_stavovy_strom.jpg)

## Nerodova věta



## Nedeterministické automaty

TODO převod nedeterministického automatu na deterministický?

## Porovnání síly konečných automatů

TODO inteligentnejsi nadpis?

![Porovnani konecnych stroju](08_porovnani_konecnych_stroju.png)

Turingův stroj je nejsilnější a dokáže realizovat libovolný algoritmus.

Slabším nástrojem je zásobníkový automat (KSZ1).

Poté jsou konečné automaty, které jsou schopny rozpoznávat regulární jazyky.

Konečné automaty jsou silnější nástroj než kombinační logika.

## Uzávěrové vlastnosti

TODO uvadet?

