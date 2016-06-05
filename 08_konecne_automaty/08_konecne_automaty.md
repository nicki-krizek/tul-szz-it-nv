# 8. Konečné automaty

> Definice konečného automatu, jazyky rozpoznávané konečnými automaty.

Konečný automat (KA) je teoretický výpočetní model reprezentovaný pomocí konečného počtu stavů (odtud slovo konečný). Je schopen pracovat s nějakými vstupními znaky, kterým se říká **abeceda**. Ze vstupu čte postupně znaky této abecedy. S každým přečtením znaku se může přesunout do jiného vnitřního stavu. Jeden z těchto stavů se označí za vstupní (šipka dovnitř), tam automat začíná svojí činnost. Některé (lze i žádné) stavy se označí jako koncové (šipka ven). Pokud automat přečte celé **slovo**, ukončí svoji činnost a vstupní **slovo** (posloupnost znaků dané abecedy) bylo **rozpoznáno** (akceptováno), ukončil-li svoji činnost v **koncovém stavu**. V opačném případě **slovo** rozpoznáno není (je zamítnuto).

 *Konečné automaty se používají například při vyhodnocování regulárních výrazů. Obvykle jsou tedy součástí lexikálního analyzátoru v překladačích.*

Definice základních pojmů jako slovo a abeceda je vysvětleno zde: http://www.matematika.cz/formalni-jazyky

**Formální definice:**

Konečným automatem je uspořádaná pětice ![A = (Q, \Sigma, \delta, q_0, F)](https://latex.codecogs.com/svg.latex?A%20%3D%20%28Q%2C%20%5CSigma%2C%20%5Cdelta%2C%20q_0%2C%20F%29), kde

- ![Q](https://latex.codecogs.com/svg.latex?Q) je konečná množina všech stavů (stavový prostor),

- ![\Sigma](https://latex.codecogs.com/svg.latex?%5CSigma) je konečná množina vstupních symbolů (abeceda),

- ![\delta](https://latex.codecogs.com/svg.latex?%5Cdelta) je přechodová funkce,

  ![\delta: Q \times \Sigma \rightarrow Q](https://latex.codecogs.com/svg.latex?%5Cdelta%3A%20Q%20%5Ctimes%20%5CSigma%20%5Crightarrow%20Q)

  ![q \in Q, z \in \Sigma, \delta(q, z) \in Q](https://latex.codecogs.com/svg.latex?q%20%5Cin%20Q%2C%20z%20%5Cin%20%5CSigma%2C%20%5Cdelta%28q%2C%20z%29%20%5Cin%20Q)

- ![q_0 \in Q](https://latex.codecogs.com/svg.latex?q_0%20%5Cin%20Q) je počáteční stav,

- ![F \subset Q](https://latex.codecogs.com/svg.latex?F%20%5Csubset%20Q) je množina koncových stavů.

Složitější automaty lze vytvářet spojováním jednodušších automatů do komplexních celků s využitím tzv. uzávěrových vlastností.

## Jazyk rozpoznávaný KA

Množina všech slov, které je schopen KA ![A](https://latex.codecogs.com/svg.latex?A) rozpoznat tvoří jazyk ![L(A)](https://latex.codecogs.com/svg.latex?L%28A%29).

**Formálně:**

![L(A) = \{w \in \Sigma^*; \delta(q_0, w) \in F\} \subset \Sigma^*](https://latex.codecogs.com/svg.latex?L%28A%29%20%3D%20%5C%7Bw%20%5Cin%20%5CSigma%5E*%3B%20%5Cdelta%28q_0%2C%20w%29%20%5Cin%20F%5C%7D%20%5Csubset%20%5CSigma%5E*)

Jazyk ![L](https://latex.codecogs.com/svg.latex?L) je **rozpoznatelný** KA, jestliže existuje KA ![A](https://latex.codecogs.com/svg.latex?A) takový, že ![L = L(A)](https://latex.codecogs.com/svg.latex?L%20%3D%20L%28A%29).

Jazyky, které KA rozpoznávají jsou **regulární**. Viz [Chomského hierarchie v okruhu 9 (Gramatiky)](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/09_gramatiky/09_gramatiky.md#chomsk%C3%A9ho-hierarchie).

## Reprezentace automatu

*Následující KA rozpoznává binární čísla, která mají sudý počet nul.*

KA je možné reprezentovat několika způsoby:

1. Formální zápis

  ![A = (Q, \Sigma, \delta, S_1, F)](https://latex.codecogs.com/svg.latex?A%20%3D%20%28Q%2C%20%5CSigma%2C%20%5Cdelta%2C%20S_1%2C%20F%29)

  ![Q = \{S_1, S_2\}](https://latex.codecogs.com/svg.latex?Q%20%3D%20%5C%7BS_1%2C%20S_2%5C%7D)

  ![\Sigma = \{0, 1\}](https://latex.codecogs.com/svg.latex?%5CSigma%20%3D%20%5C%7B0%2C%201%5C%7D)

  ![\delta: \delta(S_1, 0) = S_2, \delta(S_1, 1) = S_1, \delta(S_2, 0) = S_1, \delta(S_2, 1) = S_2](https://latex.codecogs.com/svg.latex?%5Cdelta%3A%20%5Cdelta%28S_1%2C%200%29%20%3D%20S_2%2C%20%5Cdelta%28S_1%2C%201%29%20%3D%20S_1%2C%20%5Cdelta%28S_2%2C%200%29%20%3D%20S_1%2C%20%5Cdelta%28S_2%2C%201%29%20%3D%20S_2)

  ![F = \{S_1\}](https://latex.codecogs.com/svg.latex?F%20%3D%20%5C%7BS_1%5C%7D)

2. Stavovým diagramem

  ![KA rozpoznavajici binarni cisla se sudym poctem nul](08_konecny_automat_sudy_pocet_nul.png)

3. Tabulkou

  | &nbsp; |  0  |  1  |
  | --- | --- | --- |
  | ![\leftrightarrow S_1](https://latex.codecogs.com/svg.latex?%5Cleftrightarrow%20S_1) | ![S_2](https://latex.codecogs.com/svg.latex?S_2) | ![S_1](https://latex.codecogs.com/svg.latex?S_1) |
  | ![S_2](https://latex.codecogs.com/svg.latex?S_2) | ![S_1](https://latex.codecogs.com/svg.latex?S_1) | ![S_2](https://latex.codecogs.com/svg.latex?S_2) |

  Pomocí šipek se označí stav jako vstupní (![\rightarrow](https://latex.codecogs.com/svg.latex?%5Crightarrow)), výstupní (![\leftarrow](https://latex.codecogs.com/svg.latex?%5Cleftarrow)) nebo vstupní i výstupní zároveň (![\leftrightarrow](https://latex.codecogs.com/svg.latex?%5Cleftrightarrow)).

4. Stavovým stromem

  ![Stavovy strom](08_stavovy_strom.jpg)

## Nerodova věta

Pomocí nerodovy věty lze určit, zda lze daný jazyk rozpoznat pomocí KA. Používá se důkaz sporem, tzn. předpokládám, že jazyk lze rozpoznat KA a pokud dojdu ke sporu, tak závěr je, že jazyk nelze rozpoznat konečným automatem.

### Formálně

Jazyk ![L](https://latex.codecogs.com/svg.latex?L) nad abecedou ![\Sigma](https://latex.codecogs.com/svg.latex?%5CSigma) je rozpoznatelný KA právě tehdy když existuje pravá kongruence konečného indexu, že jazyk ![L](https://latex.codecogs.com/svg.latex?L) je tvořen sjednocením některých tříd z faktorového rozkladu ![\Sigma^*/_\sim](https://latex.codecogs.com/svg.latex?%5CSigma%5E*/_%5Csim), kde ![\sim](https://latex.codecogs.com/svg.latex?%5Csim) je pravá kongruence konečného indexu.

- *pravá kongruence konečného indexu* (PKKI) ... Mám dvě slova u, v, které jsou ekvivalentní. Pokud k obou připíšu zprava stejné slovo w, tak jsou slova uw a vw stále ekvivalentní.

### Lidsky řečeno

Mám nějaký jazyk. Jelikož ho chci rozpoznávat *konečným* automatem, který má *konečný* počet stavů, tak můžu množinu všech slov rozdělit do nějakého konečného počtu tříd, protože každé vstupní slovo uvede automat do některého ze stavů. To je faktorový rozklad.

Potom vezmu **některé** tyto třídy (která obsahují různa slova) a ty sjednotím. To je dané tím, že pouze některé stavy automaty jsou finálními stavy (ve kterém je slovo rozpoznáno). Pokud toto sjednocení odpovídá požadovanému jazyku, tak lze tento jazyk rozpoznat KA.

### Příklad

![\Sigma = \{a, b\}](https://latex.codecogs.com/svg.latex?%5CSigma%20%3D%20%5C%7Ba%2C%20b%5C%7D)

![L = \{a^nb^n; n \in \mathbb{N}\}](https://latex.codecogs.com/svg.latex?L%20%3D%20%5C%7Ba%5Enb%5En%3B%20n%20%5Cin%20%5Cmathbb%7BN%7D%5C%7D)

Nechť ![\exists](https://latex.codecogs.com/svg.latex?%5Cexists) KA ![A: L = L(A)](https://latex.codecogs.com/svg.latex?A%3A%20L%20%3D%20L%28A%29),  ![\exists](https://latex.codecogs.com/svg.latex?%5Cexists) PKKI "![\sim](https://latex.codecogs.com/svg.latex?%5Csim)"  ... začátek důkazu sporem - předpokládám, že jazyk je rozpoznatelný KA

![\left | \Sigma^*/_\sim \right | = n_0](https://latex.codecogs.com/svg.latex?%5Cleft%20%7C%20%5CSigma%5E*/_%5Csim%20%5Cright%20%7C%20%3D%20n_0) ... množinu všech slov rozložím podle PKKI

![\underbrace{T_1, T_2, \ldots, T_{n_0}}_{n_0}](https://latex.codecogs.com/svg.latex?%5Cunderbrace%7BT_1%2C%20T_2%2C%20%5Cldots%2C%20T_%7Bn_0%7D%7D_%7Bn_0%7D) ... tříd rozkladu je celkem ![n_0](https://latex.codecogs.com/svg.latex?n_0)

Nyní si musím vhodně zvolit slova, abych potom došel ke sporu. Zvolím si jich záměrně ![n_0+1](https://latex.codecogs.com/svg.latex?n_0&plus;1). Potom nevyhnutelně (Dirichletův princip) musí dvě slova patřit do jedné třídy.

![\underbrace{a, a^2, \ldots, a^{n_0}, a^{n_0+1}}_{n_0+1~slov}](https://latex.codecogs.com/svg.latex?%5Cunderbrace%7Ba%2C%20a%5E2%2C%20%5Cldots%2C%20a%5E%7Bn_0%7D%2C%20a%5E%7Bn_0&plus;1%7D%7D_%7Bn_0&plus;1%7Eslov%7D)

![\exists i,j: i \neq j](https://latex.codecogs.com/svg.latex?%5Cexists%20i%2Cj%3A%20i%20%5Cneq%20j)

![a^i \sim a^j \overset{PKKI}{\Rightarrow} \underbrace{a^i b^i}_{\in L} \sim \underbrace{a^i b^j}_{\notin L}](https://latex.codecogs.com/svg.latex?a%5Ei%20%5Csim%20a%5Ej%20%5Coverset%7BPKKI%7D%7B%5CRightarrow%7D%20%5Cunderbrace%7Ba%5Ei%20b%5Ei%7D_%7B%5Cin%20L%7D%20%5Csim%20%5Cunderbrace%7Ba%5Ei%20b%5Ej%7D_%7B%5Cnotin%20L%7D)

Pomocí PKKI připíšu slovo ![b^i](https://latex.codecogs.com/svg.latex?b%5Ei). Výsledná slova sice patří do stejné třídy, ale jazyk nemůže být sjednocením některých takových tříd, protože ![i \neq j](https://latex.codecogs.com/svg.latex?i%20%5Cneq%20j) a slovo ![a^i b^i](https://latex.codecogs.com/svg.latex?a%5Ei%20b%5Ei) patří do jazyka ![L](https://latex.codecogs.com/svg.latex?L), zatímco slovo ![a^i b^j](https://latex.codecogs.com/svg.latex?a%5Ei%20b%5Ej) do jazyka ![L](https://latex.codecogs.com/svg.latex?L) nepatří. Docházím ke **sporu** a tím pádem mohu prohlásit, že jazyk ![L](https://latex.codecogs.com/svg.latex?L) *není rozpoznatelný KA (jakýmkoliv)*.

### Lidsky řečeno

Předpokládám, že automat má ![n_0](https://latex.codecogs.com/svg.latex?n_0) stavů. Zvolím si vhodně  ![n_0+1](https://latex.codecogs.com/svg.latex?n_0&plus;1) slov. Podle Dirichletova principu některá dvě tato slova padnou do stejného stavu. Za obě tato slova připíšu to samé tak, aby jedno z výsledných slov patřilo do jazyka ![L](https://latex.codecogs.com/svg.latex?L), zatímco druhé ne. Nicméně z vlastností přechodové funkce vyplývá, že obě slova opět musí padnout do stejného stavu. Kámen úrazu je v tom, že o tomto stavu nemůžeme rozhodnout, jesli je finálním nebo ne. Ať ho označíme jakýmkoliv způsobem, dojdeme ke sporu, že automat rozpoznává jazyk ![L](https://latex.codecogs.com/svg.latex?L).

## Nedeterministické automaty

- Oproti deterministickému KA (DKA):
  - místo jednoho počátečního stavu má množinu vstupních stavů,
  - po přečtení znaku je možné se z jednoho stavu dostat do *více* stavů.
- Stejně silný jako DKA (rozpoznávají stejné jazyky).
- Lze převést na DKA.
- Může být jednodušší na návrh.

## Porovnání síly konečných automatů

![Porovnani konecnych stroju](08_porovnani_konecnych_stroju.png)

- Turingův stroj je nejsilnější a dokáže realizovat libovolný algoritmus.
- Slabším nástrojem je zásobníkový automat s jedním zásobníkem (KSZ1). Nedeterministické jsou zde silnější, než deterministické (narozdíl od KA).
- Poté jsou konečné automaty, které jsou schopny rozpoznávat regulární jazyky.
- Konečné automaty jsou silnější nástroj než kombinační logika.

## Uzávěrové vlastnosti

Automat rozpoznávající libovolný jazyk lze sestavit tak, že sestavím více jednodušších automatů, které pak vhodně spojím. Lze použít následující pravidla (uzávěrové vlastnosti):

![\\L_1 \cup L_2\\
L_1 \cap L_2 \\
\Sigma^* - L_1 = L_1^c\\
L_1 - L_2~(L_1 \setminus L_2) = L_1 \cap L_2^c\\
(L_1 \cap L_2)^c = L_1^c \cup L_2^c\\
(L_1 \cup L_2)^c = L_1^c \cap L_2^c\\
L_1 \cdot L_2 = \{uw; u \in L_1~\&~w \in L_2\}\\
L_1^0 = \{e\}, ~L_1^1 = L_1, ~L_1^2 = L_1 \cdot L_1, \ldots \\
L_1^+ = \bigcup_{n=1}^{\infty } L_1^n,~L_1^* = \bigcup_{n=0}^{\infty } L_1^n\\
L_1 \cdot \varnothing = \varnothing,~ \varnothing \cdot L_2 = \varnothing](https://latex.codecogs.com/svg.latex?%5C%5CL_1%20%5Ccup%20L_2%5C%5C%20L_1%20%5Ccap%20L_2%20%5C%5C%20%5CSigma%5E*%20-%20L_1%20%3D%20L_1%5Ec%5C%5C%20L_1%20-%20L_2%7E%28L_1%20%5Csetminus%20L_2%29%20%3D%20L_1%20%5Ccap%20L_2%5Ec%5C%5C%20%28L_1%20%5Ccap%20L_2%29%5Ec%20%3D%20L_1%5Ec%20%5Ccup%20L_2%5Ec%5C%5C%20%28L_1%20%5Ccup%20L_2%29%5Ec%20%3D%20L_1%5Ec%20%5Ccap%20L_2%5Ec%5C%5C%20L_1%20%5Ccdot%20L_2%20%3D%20%5C%7Buw%3B%20u%20%5Cin%20L_1%7E%5C%26%7Ew%20%5Cin%20L_2%5C%7D%5C%5C%20L_1%5E0%20%3D%20%5C%7Be%5C%7D%2C%20%7EL_1%5E1%20%3D%20L_1%2C%20%7EL_1%5E2%20%3D%20L_1%20%5Ccdot%20L_1%2C%20%5Cldots%20%5C%5C%20L_1%5E&plus;%20%3D%20%5Cbigcup_%7Bn%3D1%7D%5E%7B%5Cinfty%20%7D%20L_1%5En%2C%7EL_1%5E*%20%3D%20%5Cbigcup_%7Bn%3D0%7D%5E%7B%5Cinfty%20%7D%20L_1%5En%5C%5C%20L_1%20%5Ccdot%20%5Cvarnothing%20%3D%20%5Cvarnothing%2C%7E%20%5Cvarnothing%20%5Ccdot%20L_2%20%3D%20%5Cvarnothing)

Sjednocení vytvořím tak, že vezu oba dílčí automaty a výsledek prohlásím na za nedeterministický automat. Následně monu použít determinizační algoritmus na sestavení deterministického automatu. Lze také použít způsob jako u půniku, ale konečné stavy budou ty, kde aspoň jeden ze stavů původního automatu je konečným.

Průnik lze vytvořit tím, že stavy nového automatu budou kartézským součinem stavů obou původních automatů. Například, mají-li oba původní automaty 3 stavy, nový automat bude mít 9 stavů a to (1,1), (1,2), (1,3), (2, 1), (2, 2), (2, 3), (3, 1), (3, 2) a (3, 3). Analogicky s přechody, má-li první automat přechod na daný symbol ze stavu 1 do stavu 2, nový automat bude mít tento přechod ze stavu (1, 1) do (2, 1), z (1, 2) do (2, 2) a (1, 3) do (2, 3). Konečné stavy jsou ty, kde všechny dílčí stavy původních automatů jsou konečnými stavy, tj. aby stav (3, 2) byl konečný, tak stav 3 prvního automatu a zároveň stav 2 druhého automatu musí být konečnými stavy.
