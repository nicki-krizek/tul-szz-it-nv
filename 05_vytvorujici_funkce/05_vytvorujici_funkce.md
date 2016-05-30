# 05. - Vytvořující funkce
>Vytvořující funkce (obyčejná, exponenciální), otevřený a uzavřený tvar, základní operace s vytvořujícími funkcemi, vytvořující funkce (uzavřený tvar) základních posloupností, věžové polynomy.

##Obyčejná vytvořující funkce
- Máme posloupnost reálných čísel ![a_n](https://latex.codecogs.com/svg.latex?a_n)
- Vytvořující řadou této posloupnosti rozumíme mocninnou řadu  ![\sum_{i=0}^{\infty} a_ix^i](https://latex.codecogs.com/svg.latex?%5Csum_%7Bi%3D0%7D%5E%7B%5Cinfty%7D%20a_ix%5Ei)
- Je-li tato řada konvergentní pro nějaké ≠0, nazveme tuto řadu obyčejnou vytvořující funkcí této posloupnosti a budeme ji značit a(x)
- Má-li posloupnost (![a_n](https://latex.codecogs.com/svg.latex?a_n))jen konečně mnoho nenulových členů, její obyčejná vytvořující funkce je mnohočlen.   

![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/05_vytvorujici_funkce/obyc_fce.png)

##Exponenciální vytvořující funkce

- Mějme posloupnost reálných čísel (![a_n](https://latex.codecogs.com/svg.latex?a_n)). Exponenciální vytvořující řadou této posloupnosti rozumíme řadu 

![a_0+a_1x+\frac{a_2x^2}{2!}+\frac{a_3x^3}{3!} \dots = \sum_{i=0}^{\infty}\frac{a_i x^i}{i!}](https://latex.codecogs.com/svg.latex?a_0&plus;a_1x&plus;%5Cfrac%7Ba_2x%5E2%7D%7B2%21%7D&plus;%5Cfrac%7Ba_3x%5E3%7D%7B3%21%7D%20%5Cdots%20%3D%20%5Csum_%7Bi%3D0%7D%5E%7B%5Cinfty%7D%5Cfrac%7Ba_i%20x%5Ei%7D%7Bi%21%7D)

- Má-li tato řada nenulový poloměr konvergence, pak ji nazveme exponenciální vytvořující funkcí dané posloupnosti a označíme ji A(x)
- Použití v úlohách, kde záleží na pořadí 

Příklad
![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/05_vytvorujici_funkce/expo_fce.png)

##Otevřený a uzavřený tvar
- vytvořující funkci f(x) lze zapsat v otevřeném a uzavřeném tvaru, převod mezi nimi není vždy jednoduchý

###Otevřený tvar
- obecný předpis  ![\sum_{i=0}^{\infty} a_ix^i](https://latex.codecogs.com/svg.latex?%5Csum_%7Bi%3D0%7D%5E%7B%5Cinfty%7D%20a_ix%5Ei)

![\sum_{i=0}^{\infty} x^i \Rightarrow 1\cdot x^0 + 1\cdot x^1 + 1\cdot x^2 + \dots](https://latex.codecogs.com/svg.latex?%5Csum_%7Bi%3D0%7D%5E%7B%5Cinfty%7D%20x%5Ei%20%5CRightarrow%201%5Ccdot%20x%5E0%20&plus;%201%5Ccdot%20x%5E1%20&plus;%201%5Ccdot%20x%5E2%20&plus;%20%5Cdots)

![\sum_{i=0}^{\infty} (i+1)\cdot x^i \Rightarrow 1 \cdot x^0 + 2\cdot x^1 + 3\cdot x^2 + \dots](https://latex.codecogs.com/svg.latex?%5Csum_%7Bi%3D0%7D%5E%7B%5Cinfty%7D%20%28i&plus;1%29%5Ccdot%20x%5Ei%20%5CRightarrow%201%20%5Ccdot%20x%5E0%20&plus;%202%5Ccdot%20x%5E1%20&plus;%203%5Ccdot%20x%5E2%20&plus;%20%5Cdots)

![\sum_{i=0}^{\infty} i\cdot x^i \Rightarrow 0 \cdot x^0 + 1\cdot x^1 + 2\cdot x^2 +  \dots](https://latex.codecogs.com/svg.latex?%5Csum_%7Bi%3D0%7D%5E%7B%5Cinfty%7D%20i%5Ccdot%20x%5Ei%20%5CRightarrow%200%20%5Ccdot%20x%5E0%20&plus;%201%5Ccdot%20x%5E1%20&plus;%202%5Ccdot%20x%5E2%20&plus;%20%5Cdots)

###Uzavřený tvar
- generuje posloupnost ![a_n](https://latex.codecogs.com/svg.latex?a_n)

![\frac{1}{1-x} \Rightarrow 1,1,1,1,\dots](https://latex.codecogs.com/svg.latex?%5Cfrac%7B1%7D%7B1-x%7D%20%5CRightarrow%201%2C1%2C1%2C1%2C%5Cdots)

![\frac{1}{(1-x)^2} \Rightarrow 1,2,3,4,\dots](https://latex.codecogs.com/svg.latex?%5Cfrac%7B1%7D%7B%281-x%29%5E2%7D%20%5CRightarrow%201%2C2%2C3%2C4%2C%5Cdots)

![\frac{x}{(1-x)^2} \Rightarrow 0,1,2,3,\dots](https://latex.codecogs.com/svg.latex?%5Cfrac%7Bx%7D%7B%281-x%29%5E2%7D%20%5CRightarrow%200%2C1%2C2%2C3%2C%5Cdots)


##Operace s vytvořujícími funkcemi
![f(x) = \sum_{n=0}^{\infty} a_nx^n ; g(x) = \sum_{n=0}^{\infty} b_nx^n](https://latex.codecogs.com/svg.latex?f%28x%29%20%3D%20%5Csum_%7Bn%3D0%7D%5E%7B%5Cinfty%7D%20a_nx%5En%20%3B%20g%28x%29%20%3D%20%5Csum_%7Bn%3D0%7D%5E%7B%5Cinfty%7D%20b_nx%5En)

1. **Lineární kombinace**
	- ![\alpha,\beta \in R/C](https://latex.codecogs.com/svg.latex?%5Calpha%2C%5Cbeta%20%5Cin%20R/C)
	- ![\alpha f(x)+\beta g(x) \dots \left \{ \alpha a_n + \beta b_n \right \}_{n=0}^{\infty}](https://latex.codecogs.com/svg.latex?%5Calpha%20f%28x%29&plus;%5Cbeta%20g%28x%29%20%5Cdots%20%5Cleft%20%5C%7B%20%5Calpha%20a_n%20&plus;%20%5Cbeta%20b_n%20%5Cright%20%5C%7D_%7Bn%3D0%7D%5E%7B%5Cinfty%7D)
2. **Posunutí doprava**
	- ![x^k f(x) \Rightarrow  0,0,\dots,0,a_0,a_1,\dots, a_n](https://latex.codecogs.com/svg.latex?x%5Ek%20f%28x%29%20%5CRightarrow%200%2C0%2C%5Cdots%2C0%2Ca_0%2Ca_1%2C%5Cdots%2C%20a_n)
	- posunutí o k nul
3.  **Odseknutí**
	- ![\frac{f(x) - (a_0+a_1x+\dots+a_{k-1}x^{k-1}))}{x^k} \Rightarrow a_k,a_{k+1},\dots,a_n](https://latex.codecogs.com/svg.latex?%5Cfrac%7Bf%28x%29%20-%20%28a_0&plus;a_1x&plus;%5Cdots&plus;a_%7Bk-1%7Dx%5E%7Bk-1%7D%29%29%7D%7Bx%5Ek%7D%20%5CRightarrow%20a_k%2Ca_%7Bk&plus;1%7D%2C%5Cdots%2Ca_n)
	- posunutí o k prvků doleva (posloupnost pak začíná k-tým prvkem)
4. **Vynulování prvních k členů**
	- ![f(x) - (a_0+a_1x+\dots+a_{k-1}x^{k-1})) \Rightarrow 0,0,\dots,0,a_k,a_{k+1},\dots,a_n](https://latex.codecogs.com/svg.latex?f%28x%29%20-%20%28a_0&plus;a_1x&plus;%5Cdots&plus;a_%7Bk-1%7Dx%5E%7Bk-1%7D%29%29%20%5CRightarrow%200%2C0%2C%5Cdots%2C0%2Ca_k%2Ca_%7Bk&plus;1%7D%2C%5Cdots%2Ca_n)
5. **Vkládání nul ("Objedno")**
	- ![f(x^2) \Rightarrow a_0,0,a_1,0,a_2,0,\dots](https://latex.codecogs.com/svg.latex?f%28x%5E2%29%20%5CRightarrow%20a_0%2C0%2Ca_1%2C0%2Ca_2%2C0%2C%5Cdots)
6. **Derivace**
	- ![f'(x) \Rightarrow a_1,2 \cdot a_2,3 \cdot a_3, 4 \cdot a_4, \dots](https://latex.codecogs.com/svg.latex?f%27%28x%29%20%5CRightarrow%20a_1%2C2%20%5Ccdot%20a_2%2C3%20%5Ccdot%20a_3%2C%204%20%5Ccdot%20a_4%2C%20%5Cdots)
7. **Integrace**
	- ![\int_{0}^{x}f(t) dt \Rightarrow 0,a_0,\frac{a_1}{2},\frac{a_2}{3},\frac{a_3}{4},\dots](https://latex.codecogs.com/svg.latex?%5Cint_%7B0%7D%5E%7Bx%7Df%28t%29%20dt%20%5CRightarrow%200%2Ca_0%2C%5Cfrac%7Ba_1%7D%7B2%7D%2C%5Cfrac%7Ba_2%7D%7B3%7D%2C%5Cfrac%7Ba_3%7D%7B4%7D%2C%5Cdots)
8. **Násobení (konvoluce)**
	- ![f(x) \cdot g(x) \Rightarrow a_0b_0,a_0b_1+a_1b_0,a_0b_2+a_1b_1+a_2b_0,\dots](https://latex.codecogs.com/svg.latex?f%28x%29%20%5Ccdot%20g%28x%29%20%5CRightarrow%20a_0b_0%2Ca_0b_1&plus;a_1b_0%2Ca_0b_2&plus;a_1b_1&plus;a_2b_0%2C%5Cdots)
9. **Postupný součet prvních prvků**
	- ![\frac{f(x)}{1-x} \Rightarrow a_0,a_0+a_1,a_0+a_1+a_2,\dots](https://latex.codecogs.com/svg.latex?%5Cfrac%7Bf%28x%29%7D%7B1-x%7D%20%5CRightarrow%20a_0%2Ca_0&plus;a_1%2Ca_0&plus;a_1&plus;a_2%2C%5Cdots)

##Vežové polynomy
1. Metoda přes povolený pole
![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/05_vytvorujici_funkce/rook.jpg)
2. Metoda přes zakázaná pole (Inverzní rook polynom)
![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/05_vytvorujici_funkce/inverse_rook.jpg)  