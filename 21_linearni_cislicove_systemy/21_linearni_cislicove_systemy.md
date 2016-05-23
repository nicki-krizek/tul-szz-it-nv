# 21. - LTI číslicové systémy

> Vlastnosti (linearita, kauzalita, stabilita), impulsní odezva (FIR/IIR), 
frekvenční charakteristika, přenosová funkce, skupinové zpoždění, lineární diferenční rovnice 
s konstantními koeficienty, systém s lineární a minimální fází. 


 

##Vlastnosti

LTI (Linear Time Invariant) systémy jsou takové systémy, které jsou lineární a časově nezávislé.

###Linearita
Lineární systém je aditivní a homogenní
#####Aditivita (Additivity)
![T (x1[n] + x2[n]) = T (x1[n]) + T (x2[n])](https://latex.codecogs.com/svg.latex?T%28x_%7B1%7D%5Bn%5D%20&plus;%20x_%7B2%7D%5Bn%5D%29%20%3D%20T%28x_%7B1%7D%5Bn%5D%29%20&plus;%20T%28x_%7B2%7D%5Bn%5D%29)

#####Homogenita (Homogenity)
![T (cx[n]) = cT (x[n])](https://latex.codecogs.com/svg.latex?T%20%28cx%5Bn%5D%29%20%3D%20cT%20%28x%5Bn%5D%29)

**Pro linearitu tedz platí podmínka**

![F(ax_1 + bx_2) = aF(x_1) + bF(x_2)](https://latex.codecogs.com/svg.latex?F%28ax_%7B1%7D%20&plus;%20bx_%7B2%7D%29%20%3D%20aF%28x_%7B1%7D%29%20&plus;%20bF%28x_%7B2%7D%29)

- odezva na lineární kombinaci budících signálů je rovna lineární kombinaci odezev na jednotlivé budící signály

- z linearity vyplývá princip superpozice (odezvu systému lze složit z odezev na dílčí buzení)

**Příklad lineárního systému**

![y(t) = kx(t)](https://latex.codecogs.com/svg.latex?y%28t%29%20%3D%20k%5Ccdot%20x%28t%29)

**Příklad nelineárního systému**

![y(t) = x^{2}(t)](https://latex.codecogs.com/svg.latex?y%28t%29%20%3D%20x%5E%7B2%7D%28t%29)


###Kauzalita
Odezva systému závisí pouze na současných a minulých hodnotách

- Kauzální systém : ![y(t) = x(t) + x(t-1)](https://latex.codecogs.com/svg.latex?y%28t%29%20%3D%20x%28t%29%20&plus;%20x%28t-1%29)

- Nekauzální systém : ![y(t) = x(t) + x(t+1)](https://latex.codecogs.com/svg.latex?y%28t%29%20%3D%20x%28t%29%20&plus;%20x%28t&plus;1%29)


###Stabilita
- definujeme BIBO stabilitu (Bounded Input Bounded Output)
- Pokud je vstup do systému omezený (např. na interval <-1;1>) tak jeho výstup bude také omezený (tzn. jeho rozsah se nebude rozpínat do nekonečna)

Obecně lze říct že systém je stabilní, pokud amplituda jeho výstupu neroste nad všechny meze. (Nestabilní systém je např. s kladnou zpětnou vazbou)


###Invariantnost vůči (časovému) posunu
- Nechť y[n] je odezva systému T(·) na x[n]
- Pak T(·) je invariantní vůči posunu, pokud pro libovolné zpoždění n_0
platí, že odezva na x[n − n_0 ] je y[n − n_0 ].

###Popis LTI systému

lze popsat pomocí:

- Impulzní odezva
- Diferenční rovnice
- Frekvenční charakteristika
- Přenosová funkce 

##Impulsní odezva (FIR/IIR)

- je odezva LTI systémů na tzv. Diracův jednotkový impulz (značen písmenem h)
- Impulsní odezva jednoznačně charakterizuje LTI systém (stejně jako dif. rovnice)
- značí se h[n]

###Konvoluce

Vyjadřuje vztah mezi vstupem a výstupem LTI systému
daného impulsní odezvou

![y[n] = x[n] * h[n] = \sum_{k=0}^{N-1}x[k]\cdot h[n-k]](https://latex.codecogs.com/svg.latex?y%5Bn%5D%20%3D%20x%5Bn%5D%20*%20h%5Bn%5D%20%3D%20%5Csum_%7Bk%3D0%7D%5E%7BN-1%7Dx%5Bk%5D%5Ccdot%20h%5Bn-k%5D)

###FIR (Finite Impulse Response)
- jsou systémy s konečnou impulzní odezvou
- bez zpětné vazby
###IIR (Infinite Impulse Response)
- jsou systémy s nekonečnou impulzní odezvou
- obsahují zpětnou vazbu 


##Frekvenční charakteristika

Funkci, která popisuje závislost vlastních hodnot na frekvenci ω značíme ![H(ejω)](https://latex.codecogs.com/svg.latex?H%28e%5E%7Bj%5Comega%7D%29)

Získáme ji aplikací DTFT na odezvu systému y[n]

Obvykle se uvádí ve formě dvou reálných funkcí:

- magnitudová charakteristika ![|H(ejω)|](https://latex.codecogs.com/svg.latex?%7CH%28e%5E%7Bj%5Comega%7D%29%7C)
- fázová charakteristika φ(ω)

![H(e^{j\omega}) = |H(e^{j\omega})| \cdot e^{j\phi(\omega) }](https://latex.codecogs.com/svg.latex?H%28e%5E%7Bj%5Comega%7D%29%20%3D%20%7CH%28e%5E%7Bj%5Comega%7D%29%7C%20%5Ccdot%20e%5E%7Bj%5Cphi%28%5Comega%29%20%7D)

##Skupinové spoždění

- Místo fázové charakteristiky se často uvádí skupinové zpoždění (group delay - GD)
- Udává zpoždění signálu e^jωn po průchodu LTI systémem (ve vzorcích)
- ![τ(ω) = −dφ(ω)/dω](https://latex.codecogs.com/svg.latex?%5Ctau%28%5Comega%29%20%3D%20-%5Cfrac%7Bd%20%5Cphi%28%5Comega%29%7D%7Bd%20%5Comega%7D) 
- na cviku jsme si psali, že 
	- skupinové spoždění = řád/2 
	- řád = délka signálu -1 

##Přenosová funkce

- Získáme ji pomocí Z-transformace odezvy systému (konvoluce impulzní odezvy a signálu)
- Y(z) = H(z)X(z)
- Přenosová funkce je velmi důležitá z hlediska analýzy systémů (stabilita, kauzalita, systémy s lineární fází, minimální fází apod.)
![](http://s33.postimg.org/n3i62tyvj/o21_frek_char.png)
- B(z) jsou koeficienty vstupu a A(z) jsou koeficienty zpětné vazby
- 

##lineární diferenční rovnice s konstantními
- Linear constant coeﬃcient diﬀerence equation (LCCDE)
- Speciální případ diferenčních rovnic popisující LTI systémy

![y[n] = \sum_{k=0}^{q}b[k]x[n-k] - \sum_{k=1}^{p}a[k]x[n-k]](https://latex.codecogs.com/svg.latex?y%5Bn%5D%20%3D%20%5Csum_%7Bk%3D0%7D%5E%7Bq%7Db%5Bk%5Dx%5Bn-k%5D%20-%20%5Csum_%7Bk%3D1%7D%5E%7Bp%7Da%5Bk%5Dx%5Bn-k%5D)

- Vztah rekurzivně deﬁnující výstup ze systému jako lineární kombinaci hodnot vstupu a minulých hodnot výstupu

Konkrétní příklad:

- y[n] = 3x[n] + x[n −1] −5x[n −2] −y[n −1] + y[n −2],
	- y[−1] = 2,y[−2] = 4
- Rekurzivní /nerekurzivní DR
- Rekurzivní DR vyžadují počáteční podmínky

##Realizovatelný systém
- musí být stabilní (ROC musí obsahovat jednotkovou kružnici) a kauzální (ROC musí být kruh rozpínající se vně jednotkové kružnice)

##Systémy s lineární fází
- Fázová charakteristika udává změnu fáze harmonické funkce o dané frekvenci při průchodu systémem
	- Nejsou-li všechny harmonické složky signálu zpožděné stejně,
dochází k fázovému zkreslení
- Systémy/ﬁltry, které nedeformují fázové spektrum signálu se označují jako ﬁltry se (zobecněnou) lineární fází

##Systémy s minimální fází
- Systém H_min(z) má minimální fázi, pokud má realizovatelný inverzní systém (nuly uvnitř jednotkové kružnice)
- Každý realizovatelný systém je možné převést na systém s minimální fází
- Převod H(z) na systém s minimální fází se provádí pokud:
	- Je třeba zajistit existenci inverzního systému
	- Je třeba, aby systém H(z) měl při dané magnitudové charakteristice, minimální skupinové zpoždění τ g

**Mechanismus převodu H(z) na systém s minimální fází:**

- Frekvenční charakteristiku každého realizovatelného systému je možné zapsat jako součin systému s minimální fází a realizovatelného allpass ﬁltru
	- H(z) = H_min (z) · H_ap (z)
- Díky této faktorizaci má H min (z) minimální skupinové zpoždění, neboť platí
	- τ(ω) = τ_min (ω) + τ_ap (ω)  