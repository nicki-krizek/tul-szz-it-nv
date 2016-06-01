# 10. - Turingův stroj
>Turingův stroj, problém zastavení, totální a parciální rozhodnutelnost tříd problémů, rekurzivní a rekurzivně spočetné množiny, jejich vztah.

## Turingův stroj

- Lze pomocí něj implementovat libovolný algoritmus
- V porovnání s KA je to silnější nástroj
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

