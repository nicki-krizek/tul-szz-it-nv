# 9. - Gramatiky

> Gramatiky, Chomského hierarchie, vztah gramatik ke konečným strojům.

Gramatika se skládá z množiny pravidel, pomocí kterých může být každé slovo předepsaným způsobem vygenerováno z předem daného počátečního symbolu. Máme nějakou abecedu symbolů (řekněme třeba a, b), což odpovídá **terminálním symbolům**. Dále máme nějaké proměnné zvané též **neterminální symboly**, například X, Y. Pak potřebujeme počáteční proměnnou, ze které je možné odvodit všechna slova, která umí gramatika generovat. Řekněmě, že počáteční symbol bude X. Nakonec k tomu přidáme **přepisovací pravidla**, pomocí kterých je možné přepisovat terminální a neterminální symboly na jiné. Generování probíhá tak, že vezmeme **počáteční symbol**, na něj aplikujeme kterékoli z pravidel, na získaný řetězec opět aplikujeme kterékoli z pravidel a tak dále, dokud nevygenerujeme požadované slovo. Pokud je pro každé slovo nejvýše jeden postup generování, gramatika je **jednoznačná**.

**Formální definice:**

Gramatika ![G](https://latex.codecogs.com/svg.latex?G) je uspořádaná čtveřice ![G = (\Pi, \Sigma, S, P)](https://latex.codecogs.com/svg.latex?G%20%3D%20%28%5CPi%2C%20%5CSigma%2C%20S%2C%20P%29), kde

![\Pi](https://latex.codecogs.com/svg.latex?%5CPi) je množina neterminálů,

![\Sigma](https://latex.codecogs.com/svg.latex?%5CSigma) je množina terminálů, ![\Pi \cap \Sigma = \varnothing ](https://latex.codecogs.com/svg.latex?%5CPi%20%5Ccap%20%5CSigma%20%3D%20%5Cvarnothing) (terminální a neteminální symboly jsou odlišné),

![S \in \Pi](https://latex.codecogs.com/svg.latex?S%20%5Cin%20%5CPi) je počáteční neterminál,

![P](https://latex.codecogs.com/svg.latex?P) je konečná množina přepisovacích pravidel.

**Konvence:**

- jednotlivé terminály značíme – a, b, c, …
- řetězce terminálů značíme – u, v, w, …
- jednotlivé neterminály – A, B, C … X, Y, Z
- řetězce neterminálů a terminálů – α, β, γ, …
- prázdný řetězec značíme symbolem e nebo také ε

### Přepisovací pravidla

Pravidla mají tvar ![\alpha \rightarrow \beta ](https://latex.codecogs.com/svg.latex?%5Calpha%20%5Crightarrow%20%5Cbeta), kde ![\alpha, \beta \in (\Pi \cup \Sigma)*](https://latex.codecogs.com/svg.latex?%5Calpha%2C%20%5Cbeta%20%5Cin%20%28%5CPi%20%5Ccup%20%5CSigma%29*).

To znamená, že pomocí přepisovacích pravidel můžu změnit řetězec ![\alpha](https://latex.codecogs.com/svg.latex?%5Calpha), který může být složen z terminálních i neterminálních symbolů na řetězec ![\beta](https://latex.codecogs.com/svg.latex?%5Cbeta), který zase může obsahovat libovolné terminální a neterminální symboly (nebo prázdné slovo ![y](https://latex.codecogs.com/svg.latex?e)).

#### Příklady pravidel

| Pravidlo | Popis |
| -------  | ----- |
| ![X \rightarrow a](https://latex.codecogs.com/svg.latex?X%20%5Crightarrow%20a) |  neterminál ![X](https://latex.codecogs.com/svg.latex?X) se přepíše na ![a](https://latex.codecogs.com/svg.latex?a) |
| ![X \rightarrow Y](https://latex.codecogs.com/svg.latex?X%20%5Crightarrow%20Y) | neterminál ![X](https://latex.codecogs.com/svg.latex?X) se přepíše na neterminál ![Y](https://latex.codecogs.com/svg.latex?Y) |
| ![X \rightarrow a &#124; Y](https://latex.codecogs.com/svg.latex?X%20%5Crightarrow%20a%20%7C%20Y) | neterminál se ![X](https://latex.codecogs.com/svg.latex?X) přepíše buď na terminál ![a](https://latex.codecogs.com/svg.latex?a) nebo na neterminál ![Y](https://latex.codecogs.com/svg.latex?Y) (spojení více pravidel do jednoho) |
| ![aX \rightarrow ba](https://latex.codecogs.com/svg.latex?aX%20%5Crightarrow%20ba) | terminál ![a](https://latex.codecogs.com/svg.latex?a) následovaný neterminálem ![X](https://latex.codecogs.com/svg.latex?X) se přepíše na terminální symboly ![ba](https://latex.codecogs.com/svg.latex?ba) |

### Příklad gramatiky

![G = (\Pi, \Sigma, S, P)](https://latex.codecogs.com/svg.latex?G%20%3D%20%28%5CPi%2C%20%5CSigma%2C%20S%2C%20P%29)

![\Pi = \{S\}](https://latex.codecogs.com/svg.latex?%5CPi%20%3D%20%5C%7BS%5C%7D)

![\Sigma = \{a, b\}](https://latex.codecogs.com/svg.latex?%5CSigma%20%3D%20%5C%7Ba%2C%20b%5C%7D)

![P = \{ S \rightarrow aSb, S\rightarrow ab \}](https://latex.codecogs.com/svg.latex?P%20%3D%20%5C%7B%20S%20%5Crightarrow%20aSb%2C%20S%5Crightarrow%20ab%20%5C%7D)

Taková gramatika generuje jazyk

![L(G) = \{a^nb^n, n \in \mathbb{N}\}](https://latex.codecogs.com/svg.latex?L%28G%29%20%3D%20%5C%7Ba%5Enb%5En%2C%20n%20%5Cin%20%5Cmathbb%7BN%7D%5C%7D)

Funguje to tak, že vycházím z počátečního symbolu, zde ![S](https://latex.codecogs.com/svg.latex?S). Postupně používám různá pravidla, abych vygeneroval slovo, které chci získat. Třeba pro získání ![aaabbb](https://latex.codecogs.com/svg.latex?aaabbb) by to probíhalo následovně:

![\mathbf{S} \Rightarrow a\boldsymbol{S}b \Rightarrow aa\mathbf{S}bb \Rightarrow aaabbb](https://latex.codecogs.com/svg.latex?%5Cmathbf%7BS%7D%20%5CRightarrow%20a%5Cboldsymbol%7BS%7Db%20%5CRightarrow%20aa%5Cmathbf%7BS%7Dbb%20%5CRightarrow%20aaabbb)

Což se dá zapsat jako ![S \Rightarrow^*_G aaabbb](https://latex.codecogs.com/svg.latex?S%20%5CRightarrow%5E*_G%20aaabbb) (![S](https://latex.codecogs.com/svg.latex?S) se přepíše pomocí gramatiky ![G](https://latex.codecogs.com/svg.latex?G) na ![aaabbb](https://latex.codecogs.com/svg.latex?aaabbb)).

### Přepisovací systém

![u \Rightarrow v](https://latex.codecogs.com/svg.latex?u%20%5CRightarrow%20v) ... ![u](https://latex.codecogs.com/svg.latex?u) se **přímo přepíše** na ![v](https://latex.codecogs.com/svg.latex?v)

![u \Rightarrow^* w](https://latex.codecogs.com/svg.latex?u%20%5CRightarrow%5E*%20w) ... ![u](https://latex.codecogs.com/svg.latex?u) se **přepíše** na ![w](https://latex.codecogs.com/svg.latex?w) (nevypisují se jednotlivé kroky, ale pouze počátek a konec)

![\Rightarrow^*](https://latex.codecogs.com/svg.latex?%5CRightarrow%5E*) je **reflexivní a tranzitivní binární relace (viz níže - vlastnosti relací)

### Generativní gramatika

Pro analýzu *shora dolů* se používají generativní gramatiky. Shora dolů znamená, že mám počáteční symbol S, ze kterého vytvářím nějaké slovo, tedy:

![S \Rightarrow \ldots \Rightarrow aabbcc](https://latex.codecogs.com/svg.latex?S%20%5CRightarrow%20%5Cldots%20%5CRightarrow%20aabbcc)

Generativní gramatiky jsou ty, co byly popsány výše.

### Analytické gramatiky

Pro analýzu *zdola nahoru* se používají analytické gramatiky. Zdola nahoru znamená, že vycházím z nějakého slova a snažím se získat počáteční symbol, tedy:

![aabbcc \Rightarrow \ldots \Rightarrow S](https://latex.codecogs.com/svg.latex?aabbcc%20%5CRightarrow%20%5Cldots%20%5CRightarrow%20S)

Analytické gramatiky se od generativních liší tak, že u přepisovacích pravidel (ve formátu ![\alpha \rightarrow \beta](https://latex.codecogs.com/svg.latex?%5Calpha%20%5Crightarrow%20%5Cbeta)) obsahuje ![\beta](https://latex.codecogs.com/svg.latex?%5Cbeta) alespoň jeden neterminál.

Jazyk ![L](https://latex.codecogs.com/svg.latex?L) rozpoznávaný analytickou gramatikou ![G](https://latex.codecogs.com/svg.latex?G) je potom:

![L(G) = \{w \in \Sigma^*, w \Rightarrow^*_G S\}](https://latex.codecogs.com/svg.latex?L%28G%29%20%3D%20%5C%7Bw%20%5Cin%20%5CSigma%5E*%2C%20w%20%5CRightarrow%5E*_G%20S%5C%7D)

## Chomského hierarchie

Gramatiky se dělí na základě omezení přepisovacích pravidel do několika typů podle Chomského hierachie. Ta definuje následující typy gramatik:

![Chomskeho hierarchie](09_chomskeho_hierarchie.png)

Důležité je si uvědomit, že regulární gramatika je zároveň i bezkontextová, kontextová i typu 0. Stejně tak třeba kontexová gramatika je zároveň i typu 0. Všechny gramatiky jsou tím pádem typu 0.

Různé typy gramatik jsou schopné rozpoznávat různé typy jazyků a pro jejich implementaci je potřeba jiný typ konečného stroje. Výhodou gramatik vyšších typů je právě fakt, že jejich implementace je jednodušší. Následující tabulka znázorňuje typy gramatik, jazyků, strojů pro implementaci a omezení pro přepisovací pravidla.

| Gramatika | Jazyky | Konečný stroj | Formát přepisovacích pravidel |
| --------- | ------ | ----- | ------------------------------ |
| Typ 0     | Rekurzivně spočitatelné | TS, PS, KSZ2  | ![\alpha \rightarrow \beta](https://latex.codecogs.com/svg.latex?%5Calpha%20%5Crightarrow%20%5Cbeta) (žádná omezení) |
| Kontextová (typ 1) | Kontextové |           | ![\alpha A \beta \rightarrow \alpha \gamma \beta](https://latex.codecogs.com/svg.latex?%5Calpha%20A%20%5Cbeta%20%5Crightarrow%20%5Calpha%20%5Cgamma%20%5Cbeta) |
| *Bezkontextová* (typ 2) | Bezkontextové | nedeterministický KSZ1 | ![A \rightarrow \gamma](https://latex.codecogs.com/svg.latex?A%20%5Crightarrow%20%5Cgamma)
| *Regulární* (typ 3) | Regulární | KA | ![A \rightarrow a, A \rightarrow aB](https://latex.codecogs.com/svg.latex?A%20%5Crightarrow%20a%2C%20A%20%5Crightarrow%20aB) |

U přepisovacích pravidel platí konvence:

- *písmena řecké abecedy* ![\in (\Pi \cup \Sigma)*](https://latex.codecogs.com/svg.latex?%5Cin%20%28%5CPi%20%5Ccup%20%5CSigma%29*)
- *velká písmena* představují **neterminální symboly**
- *malá písmena* představují **terminální symboly**

### Vztah ke konečným strojům

Viz předchozí tabulka. Připomenutí:

#### Turingův stroj (TS)

- čtecí hlava, nekonečná páska, program
- na pásce se lze pohybovat doleva/doprava, je možné číst a zapisovat

#### Postův stroj (PS)

- pamět je typu fronta (FIFO)
- z jednoho konce se čte, z druhého se zapisuje

#### Konečný stroj se zásobníky (KSZn)

- paměť je typu zásobník (LIFO)
- zapisuje se i se čte z vrcholu zásobníku
- pokud má alespoň 2 zásobníky, dokáže to,co TS nebo PS

#### Zásobníkový automat (KSZ1)

- jiné označení pro KSZ1
- konečný stroj s jedním zásobníkem nedokáže to, co TS, PS nebo KSZ2+

#### Konečný automat (KA)

- žádná paměť pro zápis
- pouze si pamatuje (se nachází v) aktuální stav

## Vlastnosti binárních relací

> Není to úplně součástí otázky, ale mohla by na to přijít řeč. Je to dobré vědět, ale pokud se na to někdo vyložené nezeptá, asi bych to nezmiňoval.

Pro libovolnou binární relaci mohou (a nemusí) platit následující vlasnosti.

Nechť ![\varrho](https://latex.codecogs.com/svg.latex?%5Cvarrho) je binární relace.

1. **Reflexivita**

  ![\forall a \in A: a \varrho a](https://latex.codecogs.com/svg.latex?%5Cforall%20a%20%5Cin%20A%3A%20a%20%5Cvarrho%20a)

  Všechny prvky z ![A](https://latex.codecogs.com/svg.latex?A) jsou v relaci samy se sebou.

2. **Symetrie**

  ![\forall a, b \in A: a \varrho b \leftrightarrow b \varrho a](https://latex.codecogs.com/svg.latex?%5Cforall%20a%2C%20b%20%5Cin%20A%3A%20a%20%5Cvarrho%20b%20%5Cleftrightarrow%20b%20%5Cvarrho%20a)

  Pokud ![a](https://latex.codecogs.com/svg.latex?a) je v relaci s ![b](https://latex.codecogs.com/svg.latex?b), potom i ![b](https://latex.codecogs.com/svg.latex?b) je v relaci s ![a](https://latex.codecogs.com/svg.latex?a). (nebo *právě tehdy když* - zde to lze zaměnit)

3. **Antisymetrie**

  ![\forall a, b \in A: a \varrho b \wedge b \varrho a \rightarrow a = b](https://latex.codecogs.com/svg.latex?%5Cforall%20a%2C%20b%20%5Cin%20A%3A%20a%20%5Cvarrho%20b%20%5Cwedge%20b%20%5Cvarrho%20a%20%5Crightarrow%20a%20%3D%20b)

  Pokud ![a](https://latex.codecogs.com/svg.latex?a) je v relaci s ![b](https://latex.codecogs.com/svg.latex?b) a zároveň je i ![b](https://latex.codecogs.com/svg.latex?b) v relaci s ![a](https://latex.codecogs.com/svg.latex?a), potom se jedná o totožný prvek.

4. **Tranzitivita**

  ![\forall a, b, c \in A: a \varrho b \wedge b \varrho c \rightarrow a \varrho c](https://latex.codecogs.com/svg.latex?%5Cforall%20a%2C%20b%2C%20c%20%5Cin%20A%3A%20a%20%5Cvarrho%20b%20%5Cwedge%20b%20%5Cvarrho%20c%20%5Crightarrow%20a%20%5Cvarrho%20c)

  Pokud ![a](https://latex.codecogs.com/svg.latex?a) je v relaci s ![b](https://latex.codecogs.com/svg.latex?b) a zároveň je ![b](https://latex.codecogs.com/svg.latex?b) v relaci s ![c](https://latex.codecogs.com/svg.latex?c), potom je i ![a](https://latex.codecogs.com/svg.latex?a) v relaci s ![c](https://latex.codecogs.com/svg.latex?c).

### Relace ekvivalence

Pro relaci ekvivalence ![\sim](https://latex.codecogs.com/svg.latex?%5Csim) platí:

- reflexivita
- symetrie
- tranzitivita

K libovolné relaci ekvivalence existuje právě jediný rozklad na třídy ekvivalence.

### Částečné uspořádání

Pro relaci částečného uspořádání ![\leq](https://latex.codecogs.com/svg.latex?%5Cleq) platí:

- reflexivita
- antisymetrie
- tranzitivita

## Syntaktická analýza

![Příklad syntaktické analýzy](09_syntakticka_analyza.png)

*Příklad syntaktické analýzy*
