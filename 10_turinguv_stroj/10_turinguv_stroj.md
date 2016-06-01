# 10. - Turingův stroj
>Turingův stroj, problém zastavení, totální a parciální rozhodnutelnost tříd problémů, rekurzivní a rekurzivně spočetné množiny, jejich vztah.

## Turingův stroj

- Lze pomocí něj implementovat libovolný algoritmus
- V porovnání s KA je to silnější nástroj
- Rozpoznává jazyky typu 0
- Stejně složité úlohy jsou schopny řešit i Postovy stroje nebo Konečné stroje se dvěma a více zásobníky
- Základní části:
  1. Páska
    - Slouží jako paměť
    - Nekonečná
  2. Čtecí hlava
    - Určuje pozici na pásce
    - Umožňuje čtení/zápis libovolného znaku na pásku
    - Pohybuje se vždy o jeden krok doleva (L) nebo doprava (R)
  3. Program
    - Zapisovali jsme jako konečný, ohodnocený a orientovaný graf
    - Lze zapsat i pomocí insturkcí
    - Definuje počáteční stav
    - Definuje množinu koncových stavů
    - Graf znázorňuje přechody mezi jednotlivými stavy a činnost čtecí hlavy (čtení, zápis, posun)
- Na začátku pásky je zapsáno vstupní slovo, čtecí hlava je na začátku
- Činnost TS: Pro libovolné vstupní slovo TS A buď
  - Zastaví (STOP)
    - Akceptuje slovo ... AKC(A)
    - Zamítne slovo ... ZAM(A)
  - Cykluje ... CYK(A)

### Formální definice

TS ![T](https://latex.codecogs.com/gif.latex?T) se definuje nad vstupní abecedou ![\Sigma](https://latex.codecogs.com/gif.latex?%5CSigma).

![T = (Q, \pi, \delta, q_0, F)](https://latex.codecogs.com/gif.latex?T%20%3D%20%28Q%2C%20%5Cpi%2C%20%5Cdelta%2C%20q_0%2C%20F%29), kde

- ![Q](https://latex.codecogs.com/gif.latex?Q) je množina stavů stroje (neprázdná)
- ![\pi](https://latex.codecogs.com/gif.latex?%5Cpi) je abeceda stroje (neprázdná), ![\pi = \Sigma \cup V \cup \{\Delta\}](https://latex.codecogs.com/gif.latex?%5Cpi%20%3D%20%5CSigma%20%5Ccup%20V%20%5Ccup%20%5C%7B%5CDelta%5C%7D) (abeceda stroje se skládá ze vstupní abecedy, pomocných znaků a prázdného symbolu)
- ![\delta](https://latex.codecogs.com/gif.latex?%5Cdelta) je parciální zobrazení, které přiřazuje nekoncovému stavu stroje a vstupnímu symbolu následný stav stroje, symbol z abecedy stroje (pro zápis) a směr posunu čtecí hlavy
  ![\delta : (Q - F) \times \pi \rightarrow Q \times \pi \times \{L, R\}](https://latex.codecogs.com/gif.latex?%5Cdelta%20%3A%20%28Q%20-%20F%29%20%5Ctimes%20%5Cpi%20%5Crightarrow%20Q%20%5Ctimes%20%5Cpi%20%5Ctimes%20%5C%7BL%2C%20R%5C%7D)
- ![q_0](https://latex.codecogs.com/gif.latex?q_0) je počáteční stav
- ![F](https://latex.codecogs.com/gif.latex?F) je množina koncových stavů

### Problém zastavení

### Totální a parciální rozhodnutelnost problémů

Máme třídu problémů na které lze odpovědět ANO/NE a k nim odpovídající algoritmus (TS), který všechny tyto problémy řeší.

**Totálně rozhodnutelné problémy**

Třída problému je *totálně rozhodnutelná* právě tehdy, když existuje TS A, který pro všechny problémy z dané třídy zastaví svoji činnost a vydá odpověď (AKC/ZAM) - tedy nikdy necykluje.

- Příklady:
  - Problém ekvivalence automatů
  - Problém odvození v kontextových gramatikách
- Pokud je třída problémů *totálně rozhodnutelná*, tak je i *parciálně rozhodnutelná* (neplatí naopak!)

**Parciálně rozhodnutelné problémy**

- Třída problémů je *parciálně rozhodnutelná* právě tehdy, když existuje TS A, který:

  - je-li odpověď na daný problém ANO, tak zastaví akceptováním AKC(A),
  - je-li odpověď na daný problém NE, tak buď zastaví zamítnutím ZAM(A) nebo cykluje CYK(A)

- Např. *problém zastavení* TS je parciálně rozhodnutelný.
- Pokud jsou obě třídy problémů ![\mathcal{P}, \overline{{\mathcal{P}}}](https://latex.codecogs.com/gif.latex?%5Cmathcal%7BP%7D%2C%20%5Coverline%7B%7B%5Cmathcal%7BP%7D%7D%7D) *parciálně rozhodnutelné*, pak je třída problémů ![\mathcal{P}](https://latex.codecogs.com/gif.latex?%5Cmathcal%7BP%7D) *totálně rozhodnutelná* (tím pádem je i ![\overline{\mathcal{P}}](https://latex.codecogs.com/gif.latex?%5Coverline%7B%5Cmathcal%7BP%7D%7D) totáně rozhodnutelná)

*Pozn.:* Existují i problémy, které nejsou ani parciálně rozhodnutelné, např. problém **ne**zastavení TS.

### Rekurzivní a rekurzivně spočetné množiny

#### Rekurzivně spočetná množina

Množina ![S \subset \Sigma^*](https://latex.codecogs.com/gif.latex?S%20%5Csubset%20%5CSigma%5E*) se nazývá **rekurzivně spočetná** právě tehdy, když existuje TS, který

1. akceptuje každé slovo ![w \in S](https://latex.codecogs.com/gif.latex?w%20%5Cin%20S)
2. buď zamítne nebo cykluje pro slova ![w \in \Sigma^* - S](https://latex.codecogs.com/gif.latex?w%20%5Cin%20%5CSigma%5E*%20-%20S)

#### Rekurzivní množina

Množina ![S \subset \Sigma^*](https://latex.codecogs.com/gif.latex?S%20%5Csubset%20%5CSigma%5E*) se nazývá **rekurzivní** právě tehdy, když existuje TS, který

1. akceptuje všechna slova ![w \in S](https://latex.codecogs.com/gif.latex?w%20%5Cin%20S),
2. zamítne všechna ostatní slova ![w \in \Sigma^* - S](https://latex.codecogs.com/gif.latex?w%20%5Cin%20%5CSigma%5E*%20-%20S) (a tedy *nikdy necykluje*)

Množina ![S \subset \Sigma^*](https://latex.codecogs.com/gif.latex?S%20%5Csubset%20%5CSigma%5E*) je *rekurzivní* právě tehdy, když obě množiny ![S, \Sigma^* - S](https://latex.codecogs.com/gif.latex?S%2C%20%5CSigma%5E*%20-%20S) jsou *rekurzivně spočetné*.

#### Vztah mezi RSM a RM

![RM \subsetneqq RSM](https://latex.codecogs.com/gif.latex?RM%20%5Csubsetneqq%20RSM) ... rekurzivní množiny jsou podmnožinami rekurzivně spočetných množin

![Vztah RM a RSM](10_vztah_rm_rsm.png)

*Vztah RM a RSM*

Existuje i množina, která není ani RSM. Daný jazyk tím pádem *není rozpoznatelný* Turingovým strojem.


