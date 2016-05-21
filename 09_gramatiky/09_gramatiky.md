# 9. - Gramatiky

> Gramatiky, Chomského hierarchie, vztah gramatik ke konečným strojům.

## Formální definice

Gramatika ![G](http://latex.codecogs.com/gif.latex?G) je čtveřice ![G = (\Pi, \Sigma, S, P)](http://latex.codecogs.com/gif.latex?G%20%3D%20%28%5CPi%2C%20%5CSigma%2C%20S%2C%20P%29), kde

![\Pi](http://latex.codecogs.com/gif.latex?%5CPi) je množina neterminálů,

![\Sigma](http://latex.codecogs.com/gif.latex?%5CSigma) je množina terminálů, ![\Pi \cap \Sigma = \varnothing ](http://latex.codecogs.com/gif.latex?%5CPi%20%5Ccap%20%5CSigma%20%3D%20%5Cvarnothing) (terminální a neteminální symboly jsou odlišné),

![S \in \Pi](http://latex.codecogs.com/gif.latex?S%20%5Cin%20%5CPi) je počáteční neterminál,

![P](http://latex.codecogs.com/gif.latex?P) je konečná množina přepisovacích pravidel.

### Přeloženo

Mám nějakou abecedu symbolů, což odpovídá terminálním symbolům. Řekněmě, že máme písmena a, b. Dále mám nějaké proměnné (neterminální symboly), třeba X, Y. A abych měl celou gramatiku, tak potřebuju ještě počáteční proměnnou z které je možné odvodit všechny slova, která umí gramatika generovat. Řekněmě, že počáteční symbol bude X. Nakonec k tomu přidám přepisovací pravidla, pomocí kterých můžu přepisovat terminální a neterminální symboly na jiné.

### Přepisovací pravidla

Pravidla mají tvar ![\alpha \rightarrow \beta ](http://latex.codecogs.com/gif.latex?%5Calpha%20%5Crightarrow%20%5Cbeta), kde ![\alpha, \beta \in (\Pi \cup \Sigma)*](http://latex.codecogs.com/gif.latex?%5Calpha%2C%20%5Cbeta%20%5Cin%20%28%5CPi%20%5Ccup%20%5CSigma%29*).

To znamená, že pomocí přepisovacích pravidel můžu změnit řetězec ![\alpha](http://latex.codecogs.com/gif.latex?%5Calpha), který může být složen z terminálních i neterminálních symbolů na řetězec ![\beta](http://latex.codecogs.com/gif.latex?%5Cbeta), který zase může obsahovat libovolné terminální a neterminální symboly (nebo prázdné slovo ![y](http://latex.codecogs.com/gif.latex?e).

#### Příklady pravidel

![X \rightarrow a](http://latex.codecogs.com/gif.latex?X%20%5Crightarrow%20a) neterminál ![X](http://latex.codecogs.com/gif.latex?X) se přepíše na ![a](http://latex.codecogs.com/gif.latex?a)

![X \rightarrow Y](http://latex.codecogs.com/gif.latex?X%20%5Crightarrow%20Y) neterminál ![X](http://latex.codecogs.com/gif.latex?X) se přepíše na neterminál ![Y](http://latex.codecogs.com/gif.latex?Y)

Někdy se více pravidel zkráceně zapíše jako:

![X \rightarrow a | Y](http://latex.codecogs.com/gif.latex?X%20%5Crightarrow%20a%20%7C%20Y) což znamená, že se neterminál ![X](http://latex.codecogs.com/gif.latex?X) přepíše buď na terminál ![a](http://latex.codecogs.com/gif.latex?a) nebo na neterminál ![Y](http://latex.codecogs.com/gif.latex?Y)

![aX \rightarrow ba](http://latex.codecogs.com/gif.latex?aX%20%5Crightarrow%20ba) terminál ![a](http://latex.codecogs.com/gif.latex?a) následovaný neterminálem ![X](http://latex.codecogs.com/gif.latex?X) se přepíše na terminální symboly ![ba](http://latex.codecogs.com/gif.latex?ba)

Podle toho, jak vypadají řetězce ![\alpha](http://latex.codecogs.com/gif.latex?%5Calpha) (levé strany přepisovacích pravidel - to, co přepisuju), se gramatiky dělí do různých skupin, viz Chomského hierarchie níže.

### Příklad gramatiky

![G = (\Pi, \Sigma, S, P)](http://latex.codecogs.com/gif.latex?G%20%3D%20%28%5CPi%2C%20%5CSigma%2C%20S%2C%20P%29)

![\Pi = \{S\}](http://latex.codecogs.com/gif.latex?%5CPi%20%3D%20%5C%7BS%5C%7D)

![\Sigma = \{a, b\}](http://latex.codecogs.com/gif.latex?%5CSigma%20%3D%20%5C%7Ba%2C%20b%5C%7D)

![P = \{ S \rightarrow aSb, S\rightarrow ab \}](http://latex.codecogs.com/gif.latex?P%20%3D%20%5C%7B%20S%20%5Crightarrow%20aSb%2C%20S%5Crightarrow%20ab%20%5C%7D)

Taková gramatika generuje jazyk ![L(G) = \{a^nb^n, n \in \mathbb{N}\}](http://latex.codecogs.com/gif.latex?L%28G%29%20%3D%20%5C%7Ba%5Enb%5En%2C%20n%20%5Cin%20%5Cmathbb%7BN%7D%5C%7D)

Funguje to tak, že vycházím z počátečního symbolu, zde ![S](http://latex.codecogs.com/gif.latex?S). Postupně používám různá pravidla, abych vygeneroval slovo, které chci získat. Třeba pro získání ![aaabbb](http://latex.codecogs.com/gif.latex?aaabbb) by to probíhalo následovně:

\mathbf{S} \Rightarrow a\boldsymbol{S}b \Rightarrow aa\mathbf{S}bb \Rightarrow aaabbb

Což se dá zapsat jako ![S \Rightarrow^*_G aaabbb](http://latex.codecogs.com/gif.latex?S%20%5CRightarrow%5E*_G%20aaabbb) (![S](http://latex.codecogs.com/gif.latex?S) se přepíše pomocí gramatiky ![G](http://latex.codecogs.com/gif.latex?G) na ![aaabbb](http://latex.codecogs.com/gif.latex?aaabbb).

### Přepisovací systém

![u \Rightarrow v](http://latex.codecogs.com/gif.latex?u%20%5CRightarrow%20v) ... ![u](http://latex.codecogs.com/gif.latex?u) se *přímo přepíše* na ![v](http://latex.codecogs.com/gif.latex?v)

![u \Rightarrow^* w](http://latex.codecogs.com/gif.latex?u%20%5CRightarrow%5E*%20w) ... ![u](http://latex.codecogs.com/gif.latex?u) se *přepíše* na ![w](http://latex.codecogs.com/gif.latex?w) (nevypisují se jednotlivé kroky, ale pouze počátek a konec)

![\Rightarrow^*](http://latex.codecogs.com/gif.latex?%5CRightarrow%5E*) je **reflexivní a tranzitivní binární relace (viz níže - vlastnosti relací)

### Generativní gramatika

Pro analýzu *shora dolů* se používají generativní gramatiky. Shora dolů znamená, že mám počáteční symbol S, ze kterého vytvářím nějaké slovo, tedy:

![S \Rightarrow \ldots \Rightarrow aabbcc](http://latex.codecogs.com/gif.latex?S%20%5CRightarrow%20%5Cldots%20%5CRightarrow%20aabbcc)

Generativní gramatiky jsou ty, co byly popsány výše.

### Analytické gramatiky

Pro analýzu *zdola nahoru* se používají analytické gramatiky. Zdola nahoru znamená, že vycházím z nějakého slova a snažím se získat počáteční symbol, tedy:

![aabbcc \Rightarrow \ldots \Rightarrow S](http://latex.codecogs.com/gif.latex?aabbcc%20%5CRightarrow%20%5Cldots%20%5CRightarrow%20S)

Analytické gramatiky se od generativních liší tak, že u přepisovacích pravidel (ve formátu ![\alpha \rightarrow \beta](http://latex.codecogs.com/gif.latex?%5Calpha%20%5Crightarrow%20%5Cbeta)) obsahuje ![\beta](http://latex.codecogs.com/gif.latex?%5Cbeta) alespoň jeden neterminál.

Jazyk ![L](http://latex.codecogs.com/gif.latex?L) rozpoznávaný analytickou gramatikou ![G](http://latex.codecogs.com/gif.latex?G) je potom:

![L(G) = \{w \in \Sigma^*, w \Rightarrow^*_G S\}](http://latex.codecogs.com/gif.latex?L%28G%29%20%3D%20%5C%7Bw%20%5Cin%20%5CSigma%5E*%2C%20w%20%5CRightarrow%5E*_G%20S%5C%7D)

## Chomského hierarchie

## Syntaktická analýza

> Nevím, jestli to zde uvádět. Patří sem věci jako derivační strom, determinismus, jednoznačnost gramatiky, levá a pravá derivace.

## Vlastnosti relací

> Není to úplněsoučástí otázky, ale mohla by na to přijít řeč. Je to dobré vědět, ale pokud se na to někdo vyložené nezeptá, asi bych to nezmiňoval.


