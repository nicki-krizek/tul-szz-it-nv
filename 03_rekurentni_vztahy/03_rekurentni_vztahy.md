# Rekurentní vztahy

> Rekurentní vztahy – základní pojmy, řešení, (ne)homogenní, (ne)lineární rekurentní vztahy, řešení lineárních rekurentních vztahů s konstantními koeficienty a jejich soustav (otázka existence a jednoznačnosti řešení), využití vytvořujících funkcí.

## Základní pojmy

### Rekurentní vztah

- Jeden ze způsobů zápisu posloupnosti ![\{a_n\}_{n=0}^{\infty}](https://latex.codecogs.com/svg.latex?%5C%7Ba_n%5C%7D_%7Bn%3D0%7D%5E%7B%5Cinfty%7D)

![\left.\begin{aligned}
  F(a_n, a_{n-1}, \ldots, a_{n-k}, n) = 0\\
  a_n=\Phi(a_{n-1}, a_{n-2}, \ldots,a_{n-k}, n)
\end{aligned}\right\} \text{Rekurentn\'i vztah \v{r}\'adu } k](https://latex.codecogs.com/svg.latex?%5Cleft.%5Cbegin%7Baligned%7D%20F%28a_n%2C%20a_%7Bn-1%7D%2C%20%5Cldots%2C%20a_%7Bn-k%7D%2C%20n%29%20%3D%200%5C%5C%20a_n%3D%5CPhi%28a_%7Bn-1%7D%2C%20a_%7Bn-2%7D%2C%20%5Cldots%2Ca_%7Bn-k%7D%2C%20n%29%20%5Cend%7Baligned%7D%5Cright%5C%7D%20%5Ctext%7BRekurentn%5C%27i%20vztah%20%5Cv%7Br%7D%5C%27adu%20%7D%20k)

např. Fibonacciho rek. vztah ![F_n = F_{n-1} + F_{n-2}](https://latex.codecogs.com/svg.latex?F_n%20%3D%20F_%7Bn-1%7D%20&plus;%20F_%7Bn-2%7D) je rekurentním vztahem řádu 2

### (Ne)Homogenní rek. vztah

- Pokud rekurentnímu vztahu vyhovuje nulová sekvence, pak se nazývá homogenní, např. Fibonacciho rek. vztah
- Pokud rekurentnímu vztahu **ne**vyhovuje nulová sekvence, pak se nezývá nehomogenní, např. ![a_n = a_{n-1} + 1](https://latex.codecogs.com/svg.latex?a_n%20%3D%20a_%7Bn-1%7D%20&plus;%201)

### (Ne)Lineární rek. vztah


![\left(\begin{aligned}
A(x+y) &= A(x) + A(y) \\ 
A(\alpha x) &= \alpha A(x)
\end{aligned}
\right)](https://latex.codecogs.com/svg.latex?%5Cleft%28%5Cbegin%7Baligned%7D%20A%28x&plus;y%29%20%26%3D%20A%28x%29%20&plus;%20A%28y%29%20%5C%5C%20A%28%5Calpha%20x%29%20%26%3D%20%5Calpha%20A%28x%29%20%5Cend%7Baligned%7D%20%5Cright%29)

pak se jedná o lineární rek. vztah

- Pokud toto není splněno, pak se jedná o nelineární rekurentní vztah (kterými jsme se nezabývali)

## Lineární rekurentní vztahy s konstantními koeficienty

- Označme 
 
![(*)\ldots\ldots C_na_n + C_{n-1}a_{n-1} + \ldots + C_{n-k}a_{n-k} = p(n)](https://latex.codecogs.com/svg.latex?%28*%29%5Cldots%5Cldots%20C_na_n%20&plus;%20C_%7Bn-1%7Da_%7Bn-1%7D%20&plus;%20%5Cldots%20&plus;%20C_%7Bn-k%7Da_%7Bn-k%7D%20%3D%20p%28n%29) jako nehomogenní rek. vztah a

![(**)\ldots\ldots C_na_n + C_{n-1}a_{n-1} + \ldots + C_{n-k}a_{n-k} = 0](https://latex.codecogs.com/svg.latex?%28**%29%5Cldots%5Cldots%20C_na_n%20&plus;%20C_%7Bn-1%7Da_%7Bn-1%7D%20&plus;%20%5Cldots%20&plus;%20C_%7Bn-k%7Da_%7Bn-k%7D%20%3D%200) jako homogenní rek. vztah, pro oba platí

![\begin{aligned}
C_n, C_{n-1},\ldots,C_{n-k} \in \mathbb{R} \\
C_n \cdot C_{n-k} \neq 0
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20C_n%2C%20C_%7Bn-1%7D%2C%5Cldots%2CC_%7Bn-k%7D%20%5Cin%20%5Cmathbb%7BR%7D%20%5C%5C%20C_n%20%5Ccdot%20C_%7Bn-k%7D%20%5Cneq%200%20%5Cend%7Baligned%7D)

###Homogenní vztahy

####Platí
1. Vztahu ![(**)](https://latex.codecogs.com/svg.latex?%28**%29) vyhovuje nekonečně mnoho posloupností (existuje nekonečně mnoho řešení)
2. Pokud je zadáno ![k](https://latex.codecogs.com/svg.latex?k) po sobě jdoucích prvků posloupnosti, pak je posloupnost *jednoznačně definována* (existuje právě jedno řešení)
3. Jsou-li ![\{a_n^1\}_{n=0}^{\infty}](https://latex.codecogs.com/svg.latex?%5C%7Ba_n%5E1%5C%7D_%7Bn%3D0%7D%5E%7B%5Cinfty%7D) a ![\{a_n^2\}_{n=0}^{\infty}](https://latex.codecogs.com/svg.latex?%5C%7Ba_n%5E2%5C%7D_%7Bn%3D0%7D%5E%7B%5Cinfty%7D) řešením ![(**)](https://latex.codecogs.com/svg.latex?%28**%29), pak i jejich libovolná kombinace bude řešením ![(**)](https://latex.codecogs.com/svg.latex?%28**%29)
4. Existuje ![k](https://latex.codecogs.com/svg.latex?k) lineárně nezávislých řešení vztahu ![(**)](https://latex.codecogs.com/svg.latex?%28**%29). Každé další řešení je pak lineární kombinací těchto lin. nezávislých řešení

![\begin{aligned}
\{a_n^1\}, \{a_n^2\}, \ldots, \{a_n^k\} \text{ } &...... \text{ } k \text{ lin. nez. \v{r}e\v{s}en\'i, pak} \\
a_n = K_1 \cdot \{a_n^1\} + K_2 \cdot \{a_n^2\} + \ldots + K_k \cdot \{a_n^k\} \text{ } &...... \text{ Obecn\'e \v{r}e\v{s}en\'i vztahu }(**) \text{ pro } K_1,\ldots,K_k \in \mathbb{R}
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20%5C%7Ba_n%5E1%5C%7D%2C%20%5C%7Ba_n%5E2%5C%7D%2C%20%5Cldots%2C%20%5C%7Ba_n%5Ek%5C%7D%20%5Ctext%7B%20%7D%20%26......%20%5Ctext%7B%20%7D%20k%20%5Ctext%7B%20lin.%20nez.%20%5Cv%7Br%7De%5Cv%7Bs%7Den%5C%27i%2C%20pak%7D%20%5C%5C%20a_n%20%3D%20K_1%20%5Ccdot%20%5C%7Ba_n%5E1%5C%7D%20&plus;%20K_2%20%5Ccdot%20%5C%7Ba_n%5E2%5C%7D%20&plus;%20%5Cldots%20&plus;%20K_k%20%5Ccdot%20%5C%7Ba_n%5Ek%5C%7D%20%5Ctext%7B%20%7D%20%26......%20%5Ctext%7B%20Obecn%5C%27e%20%5Cv%7Br%7De%5Cv%7Bs%7Den%5C%27i%20vztahu%20%7D%28**%29%20%5Ctext%7B%20pro%20%7D%20K_1%2C%5Cldots%2CK_k%20%5Cin%20%5Cmathbb%7BR%7D%20%5Cend%7Baligned%7D)

####Řešení homogenního rek. vztahu

- Úloha hledání řešení ![(**)](https://latex.codecogs.com/svg.latex?%28**%29) se redukuje na nalezení lineární kombinace ![k](https://latex.codecogs.com/svg.latex?k) lineárně nezávislých řešení
- Základní myšlenka: ![a_n = r^n, r \neq 0](https://latex.codecogs.com/svg.latex?a_n%20%3D%20r%5En%2C%20r%20%5Cneq%200)

pak je možno rek. vztah (opět Fibonacci) zapsat jako

![\begin{aligned} 
F_n &= F_{n-1} + F_{n-2} \\
r^n &= r^{n-1} + r^{n-2} \\
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20F_n%20%26%3D%20F_%7Bn-1%7D%20&plus;%20F_%7Bn-2%7D%20%5C%5C%20r%5En%20%26%3D%20r%5E%7Bn-1%7D%20&plus;%20r%5E%7Bn-2%7D%20%5C%5C%20%5Cend%7Baligned%7D)

a po vhodných úpravách nalézt jeho obecné řešení pomocí kořenů (zde kvadratické) rovnice:

![\begin{aligned} 
r^n - r^{n-1} - r^{n-2} &= 0 \\
r^{n-2} \cdot (r^2 - r - 1) &= 0 \\
r^2 - r - 1 &= 0 \\
r_{1,2} &= \frac{-1 \pm \sqrt{5}}{2}
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20r%5En%20-%20r%5E%7Bn-1%7D%20-%20r%5E%7Bn-2%7D%20%26%3D%200%20%5C%5C%20r%5E%7Bn-2%7D%20%5Ccdot%20%28r%5E2%20-%20r%20-%201%29%20%26%3D%200%20%5C%5C%20r%5E2%20-%20r%20-%201%20%26%3D%200%20%5C%5C%20r_%7B1%2C2%7D%20%26%3D%20%5Cfrac%7B-1%20%5Cpm%20%5Csqrt%7B5%7D%7D%7B2%7D%20%5Cend%7Baligned%7D)

Obecné řešení je potom lineární kombinací těchto kořenů, tedy

![F_n = K_1 \cdot \left(\frac{-1 + \sqrt{5}}{2}\right)^n + K_2 \cdot \left(\frac{-1 - \sqrt{5}}{2}\right)^n](https://latex.codecogs.com/svg.latex?F_n%20%3D%20K_1%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%20&plus;%20%5Csqrt%7B5%7D%7D%7B2%7D%5Cright%29%5En%20&plus;%20K_2%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%20-%20%5Csqrt%7B5%7D%7D%7B2%7D%5Cright%29%5En)

Pokud známe počáteční podmínky (![k](https://latex.codecogs.com/svg.latex?k) po sobě jdoucích hodnot re. vztahu), můžeme řešení určit jednoznačně. Pro Fibonacciho posloupnost jsou počáteční hodnoty definovány jako ![F_0 = 0, F_1 = 1](https://latex.codecogs.com/svg.latex?F_0%20%3D%200%2C%20F_1%20%3D%201), jednoznačné řešení rek. vztahu je možné vypočítat dosazením těchto počátečních podmínek a spočtením soustavy ![k](https://latex.codecogs.com/svg.latex?k) rovnic o ![k](https://latex.codecogs.com/svg.latex?k) neznámých:

![\begin{aligned}
F_0: 0 &= K_1 \cdot \left( \frac{-1 + \sqrt{5}}{2}\right)^0 + K_2 \cdot \left(\frac{-1 - \sqrt{5}}{2}\right)^0 \\
F_1: 1 &= K_1 \cdot \left( \frac{-1 + \sqrt{5}}{2}\right)^1 + K_2 \cdot \left(\frac{-1 - \sqrt{5}}{2}\right)^1 \\
\\
\hline
\\
F_0: 0 &= K_1 + K_2 \\
F_1: 1 &= K_1 \cdot \frac{-1 + \sqrt{5}}{2} + K_2 \cdot \frac{-1 - \sqrt{5}}{2} \\
\\
\hline
\\
K_1 &= -K_2\\
1 &= K_1 \cdot \frac{-1 + \sqrt{5}}{2} - K_1 \cdot \frac{-1 - \sqrt{5}}{2} \\
2 &= -K_1 + K_1 \cdot \sqrt{5} + K_1 + K_1 \cdot \sqrt{5} \\
2 &= 2 \cdot K_1 \cdot \sqrt{5}\\
1 &= K_1 \cdot \sqrt{5}\\
K_1 &= \frac{1}{\sqrt{5}}\\
\\
\hline
\\
K_1 &= \frac{1}{\sqrt{5}}\\
K_2 &= \frac{-1}{\sqrt{5}}
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20F_0%3A%200%20%26%3D%20K_1%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%20&plus;%20%5Csqrt%7B5%7D%7D%7B2%7D%5Cright%29%5E0%20&plus;%20K_2%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%20-%20%5Csqrt%7B5%7D%7D%7B2%7D%5Cright%29%5E0%20%5C%5C%20F_1%3A%201%20%26%3D%20K_1%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%20&plus;%20%5Csqrt%7B5%7D%7D%7B2%7D%5Cright%29%5E1%20&plus;%20K_2%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%20-%20%5Csqrt%7B5%7D%7D%7B2%7D%5Cright%29%5E1%20%5C%5C%20%5C%5C%20%5Chline%20%5C%5C%20F_0%3A%200%20%26%3D%20K_1%20&plus;%20K_2%20%5C%5C%20F_1%3A%201%20%26%3D%20K_1%20%5Ccdot%20%5Cfrac%7B-1%20&plus;%20%5Csqrt%7B5%7D%7D%7B2%7D%20&plus;%20K_2%20%5Ccdot%20%5Cfrac%7B-1%20-%20%5Csqrt%7B5%7D%7D%7B2%7D%20%5C%5C%20%5C%5C%20%5Chline%20%5C%5C%20K_1%20%26%3D%20-K_2%5C%5C%201%20%26%3D%20K_1%20%5Ccdot%20%5Cfrac%7B-1%20&plus;%20%5Csqrt%7B5%7D%7D%7B2%7D%20-%20K_1%20%5Ccdot%20%5Cfrac%7B-1%20-%20%5Csqrt%7B5%7D%7D%7B2%7D%20%5C%5C%202%20%26%3D%20-K_1%20&plus;%20K_1%20%5Ccdot%20%5Csqrt%7B5%7D%20&plus;%20K_1%20&plus;%20K_1%20%5Ccdot%20%5Csqrt%7B5%7D%20%5C%5C%202%20%26%3D%202%20%5Ccdot%20K_1%20%5Ccdot%20%5Csqrt%7B5%7D%5C%5C%201%20%26%3D%20K_1%20%5Ccdot%20%5Csqrt%7B5%7D%5C%5C%20K_1%20%26%3D%20%5Cfrac%7B1%7D%7B%5Csqrt%7B5%7D%7D%5C%5C%20%5C%5C%20%5Chline%20%5C%5C%20K_1%20%26%3D%20%5Cfrac%7B1%7D%7B%5Csqrt%7B5%7D%7D%5C%5C%20K_2%20%26%3D%20%5Cfrac%7B-1%7D%7B%5Csqrt%7B5%7D%7D%20%5Cend%7Baligned%7D)

Po dosazení získáváme jednoznačné řešení rekurentního vztahu:

![F_n = \frac{1}{\sqrt{5}} \cdot \left(\frac{-1 + \sqrt{5}}{2}\right)^n + \frac{-1}{\sqrt{5}} \cdot \left(\frac{-1 - \sqrt{5}}{2}\right)^n](https://latex.codecogs.com/svg.latex?F_n%20%3D%20%5Cfrac%7B1%7D%7B%5Csqrt%7B5%7D%7D%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%20&plus;%20%5Csqrt%7B5%7D%7D%7B2%7D%5Cright%29%5En%20&plus;%20%5Cfrac%7B-1%7D%7B%5Csqrt%7B5%7D%7D%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%20-%20%5Csqrt%7B5%7D%7D%7B2%7D%5Cright%29%5En)

###Charakteristický polynom

- Polynom obsahující konstantní koeficienty rek. vztahu (v předchozí kapitole to bylo ![r^2 - r - 1 = 0](https://latex.codecogs.com/svg.latex?r%5E2%20-%20r%20-%201%20%3D%200))
- Jeho řešení (kořeny) udává tvar obecného řešení rek. vztahu

####Platí: 

Nechť ![r_1,r_2,\ldots,r_p](https://latex.codecogs.com/svg.latex?r_1%2Cr_2%2C%5Cldots%2Cr_p) jsou všechny různé kořeny charakteristického polynomu s násobnostmi ![m_1,m_2,\ldots,m_p](https://latex.codecogs.com/svg.latex?m_1%2Cm_2%2C%5Cldots%2Cm_p). Potom obecné řešení je tvaru:

![\begin{aligned}
a_n = &K_1^{(1)} \cdot r_1^n + K_2^{(1)} \cdot n \cdot r_1^n + \ldots + K_{m_1}^{(1)} \cdot n^{m_1-1} \cdot r_1^n + \\
+ &K_1^{(2)} \cdot r_2^n + K_2^{(2)} \cdot n \cdot r_2^n + \ldots + K_{m_2}^{(2)} \cdot n^{m_2-1} \cdot r_2^n + \\
+ &\ldots + \\
+ &K_1^{(p)} \cdot r_p^n + K_2^{(p)} \cdot n \cdot r_p^n + \ldots + K_{m_p}^{(p)} \cdot n^{m_p-1} \cdot r_p^n
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a_n%20%3D%20%26K_1%5E%7B%281%29%7D%20%5Ccdot%20r_1%5En%20&plus;%20K_2%5E%7B%281%29%7D%20%5Ccdot%20n%20%5Ccdot%20r_1%5En%20&plus;%20%5Cldots%20&plus;%20K_%7Bm_1%7D%5E%7B%281%29%7D%20%5Ccdot%20n%5E%7Bm_1-1%7D%20%5Ccdot%20r_1%5En%20&plus;%20%5C%5C%20&plus;%20%26K_1%5E%7B%282%29%7D%20%5Ccdot%20r_2%5En%20&plus;%20K_2%5E%7B%282%29%7D%20%5Ccdot%20n%20%5Ccdot%20r_2%5En%20&plus;%20%5Cldots%20&plus;%20K_%7Bm_2%7D%5E%7B%282%29%7D%20%5Ccdot%20n%5E%7Bm_2-1%7D%20%5Ccdot%20r_2%5En%20&plus;%20%5C%5C%20&plus;%20%26%5Cldots%20&plus;%20%5C%5C%20&plus;%20%26K_1%5E%7B%28p%29%7D%20%5Ccdot%20r_p%5En%20&plus;%20K_2%5E%7B%28p%29%7D%20%5Ccdot%20n%20%5Ccdot%20r_p%5En%20&plus;%20%5Cldots%20&plus;%20K_%7Bm_p%7D%5E%7B%28p%29%7D%20%5Ccdot%20n%5E%7Bm_p-1%7D%20%5Ccdot%20r_p%5En%20%5Cend%7Baligned%7D)

####Srozumitelně

Prakticky 3 možné varianty (a jejich libovolné kombinace)

1. Jednonásobné kořeny
	- V příkladu s Fibonaccim
	- Příklad: obecné řešení ve tvaru ![a_n = K_1 \cdot (r_1)^n + K_2 \cdot (r_2)^n](https://latex.codecogs.com/svg.latex?a_n%20%3D%20K_1%20%5Ccdot%20%28r_1%29%5En%20&plus;%20K_2%20%5Ccdot%20%28r_2%29%5En) pro jednonásobné kořeny ![r_1](https://latex.codecogs.com/svg.latex?r_1) a ![r_2](https://latex.codecogs.com/svg.latex?r_2) 
2. ![m](https://latex.codecogs.com/svg.latex?m)-násobný kořen
	- Příklad: obecné řešení ve tvaru ![a_n = (K_1 + K_2 \cdot n + K_3 \cdot n^2) \cdot r^n](https://latex.codecogs.com/svg.latex?a_n%20%3D%20%28K_1%20&plus;%20K_2%20%5Ccdot%20n%20&plus;%20K_3%20%5Ccdot%20n%5E2%29%20%5Ccdot%20r%5En) pro trojnásobný kořen ![r](https://latex.codecogs.com/svg.latex?r)
3. Komplexní kořeny
	- Převádějí se do goniometrického tvaru  
![\begin{aligned}
a \pm bi &= \sqrt{a^2 + b^2} \cdot (cos(n\phi) + isin(n\phi))\\
\phi &= arctan \left(\frac{b}{a}\right)
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a%20%5Cpm%20bi%20%26%3D%20%5Csqrt%7Ba%5E2%20&plus;%20b%5E2%7D%20%5Ccdot%20%28cos%28n%5Cphi%29%20&plus;%20isin%28n%5Cphi%29%29%5C%5C%20%5Cphi%20%26%3D%20arctan%20%5Cleft%28%5Cfrac%7Bb%7D%7Ba%7D%5Cright%29%20%5Cend%7Baligned%7D)

	- Výsledek ve tvaru  
![a_n = K_1 \cdot (\sqrt{a^2 + b^2})^n \cdot cos(n\phi) + K_2 \cdot (\sqrt{a^2 + b^2})^n \cdot sin(n\phi)](https://latex.codecogs.com/svg.latex?a_n%20%3D%20K_1%20%5Ccdot%20%28%5Csqrt%7Ba%5E2%20&plus;%20b%5E2%7D%29%5En%20%5Ccdot%20cos%28n%5Cphi%29%20&plus;%20K_2%20%5Ccdot%20%28%5Csqrt%7Ba%5E2%20&plus;%20b%5E2%7D%29%5En%20%5Ccdot%20sin%28n%5Cphi%29)

Příklad kombinace:

- Kořeny: ![r_1 = 1, r_{2,3} = 3](https://latex.codecogs.com/svg.latex?r_1%20%3D%201%2C%20r_%7B2%2C3%7D%20%3D%203)
- Obecné řešení: ![a_n = K_1 \cdot 1^n + (K_2 + K_3 \cdot n) \cdot 3^n](https://latex.codecogs.com/svg.latex?a_n%20%3D%20K_1%20%5Ccdot%201%5En%20&plus;%20%28K_2%20&plus;%20K_3%20%5Ccdot%20n%29%20%5Ccdot%203%5En)

###Nehomogenní vztahy

Připomínka: ![(*)\ldots\ldots C_na_n + C_{n-1}a_{n-1} + \ldots + C_{n-k}a_{n-k} = p(n)](https://latex.codecogs.com/svg.latex?%28*%29%5Cldots%5Cldots%20C_na_n%20&plus;%20C_%7Bn-1%7Da_%7Bn-1%7D%20&plus;%20%5Cldots%20&plus;%20C_%7Bn-k%7Da_%7Bn-k%7D%20%3D%20p%28n%29)

####Platí

1. Vztah ![(*)](https://latex.codecogs.com/svg.latex?%28*%29) má nekonečně mnoho řešení
2. Každé řešení je tvaru ![a_n = a_n^h + a_n^p](https://latex.codecogs.com/svg.latex?a_n%20%3D%20a_n%5Eh%20&plus;%20a_n%5Ep), kde  
![a_n^h](https://latex.codecogs.com/svg.latex?a_n%5Eh) je obecné řešení homogenního rekurentního vztahu ![(**)](https://latex.codecogs.com/svg.latex?%28**%29) odpovídajícího vztahu ![(*)](https://latex.codecogs.com/svg.latex?%28*%29)  
![a_n^p](https://latex.codecogs.com/svg.latex?a_n%5Ep) je partikulární řešení vztahu ![(*)](https://latex.codecogs.com/svg.latex?%28*%29) (tj. libovolná konkrétní posloupnost vyhovující vztahu ![(*)](https://latex.codecogs.com/svg.latex?%28*%29))

####Řešení nehomogenního rek. vztahu

- ![a_n^h](https://latex.codecogs.com/svg.latex?a_n%5Eh) se dá nalézt stejně jako u homogenních vztahů, tzn. položit levou stranu ![(*)](https://latex.codecogs.com/svg.latex?%28*%29) rovnou 0 a nakládat s ním jako s homogenním vztahem.  
- ![a_n^p](https://latex.codecogs.com/svg.latex?a_n%5Ep) se hledá podle toho co zbylo na pravé straně rovnice, tzn ![p(n)](https://latex.codecogs.com/svg.latex?p%28n%29), nejčastěji dosazením ![a_n^p = t(n)](https://latex.codecogs.com/svg.latex?a_n%5Ep%20%3D%20t%28n%29) dle následující tabulky:  
![\begin{aligned}
p(n) \quad &| \quad t(n)\\
\hline
K...konst \quad &| \quad A...konst\\
\hline
n^t\quad &| \quad A_tn^t + A_{t-1}n^{t-1} + \ldots + A_0 \\
\hline
r^n \quad &| \quad Ar^n \\
\hline
r^n \cdot n^t \quad &| \quad r^n \cdot (A_tn^t + A_{t-1}n^{t-1} + \ldots + A_0) \\
\hline
A \cdot \cos{(\alpha n)} \quad &| \quad K \cdot \cos{(\alpha n)}  \\
\hline
B \cdot \sin{(\alpha n)} \quad &| \quad L \cdot \sin{(\alpha n)}  \\
\hline
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20p%28n%29%20%5Cquad%20%26%7C%20%5Cquad%20t%28n%29%5C%5C%20%5Chline%20K...konst%20%5Cquad%20%26%7C%20%5Cquad%20A...konst%5C%5C%20%5Chline%20n%5Et%5Cquad%20%26%7C%20%5Cquad%20A_tn%5Et%20&plus;%20A_%7Bt-1%7Dn%5E%7Bt-1%7D%20&plus;%20%5Cldots%20&plus;%20A_0%20%5C%5C%20%5Chline%20r%5En%20%5Cquad%20%26%7C%20%5Cquad%20Ar%5En%20%5C%5C%20%5Chline%20r%5En%20%5Ccdot%20n%5Et%20%5Cquad%20%26%7C%20%5Cquad%20r%5En%20%5Ccdot%20%28A_tn%5Et%20&plus;%20A_%7Bt-1%7Dn%5E%7Bt-1%7D%20&plus;%20%5Cldots%20&plus;%20A_0%29%20%5C%5C%20%5Chline%20A%20%5Ccdot%20%5Ccos%7B%28%5Calpha%20n%29%7D%20%5Cquad%20%26%7C%20%5Cquad%20K%20%5Ccdot%20%5Ccos%7B%28%5Calpha%20n%29%7D%20%5C%5C%20%5Chline%20B%20%5Ccdot%20%5Csin%7B%28%5Calpha%20n%29%7D%20%5Cquad%20%26%7C%20%5Cquad%20L%20%5Ccdot%20%5Csin%7B%28%5Calpha%20n%29%7D%20%5C%5C%20%5Chline%20%5Cend%7Baligned%7D)
- Je-li pravá strana ![(*)](https://latex.codecogs.com/svg.latex?%28*%29) lineární kombinací prvků ![p(n)](https://latex.codecogs.com/svg.latex?p%28n%29) z tabulky, pak bude řešení ve tvaru lineární kombinace prvků ![t(n)](https://latex.codecogs.com/svg.latex?t%28n%29)

#####Postup
1. Zkusím dosadit ![t(n)](https://latex.codecogs.com/svg.latex?t%28n%29) z tabulky
2. Pokud žádný ze sčítanců zkušebního řešení není řešením příslušného homogenního rek. vztahu, pak platí ![a_n^p = t(n)](https://latex.codecogs.com/svg.latex?a_n%5Ep%20%3D%20t%28n%29)
3. Je-li některý ze sčítanců zkušebního řešení řešením příslušného homogenního vztahu, pak  
![a_n^p = n^s \cdot t(n)](https://latex.codecogs.com/svg.latex?a_n%5Ep%20%3D%20n%5Es%20%5Ccdot%20t%28n%29)  
kde ![s](https://latex.codecogs.com/svg.latex?s) je nejmenší přirozená mocnina taková, že žádný ze sčítanců již není řešením homogenního rek. vztahu

#####Příklad

![\begin{aligned}
1)\quad a_n &= 6a_{n-1} - 9a_{n-2} + n \cdot 2^n\\
2)\quad a_n &= 6a_{n-1} - 9a_{n-2} + (n^2 + 1) \cdot 3^n
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%201%29%5Cquad%20a_n%20%26%3D%206a_%7Bn-1%7D%20-%209a_%7Bn-2%7D%20&plus;%20n%20%5Ccdot%202%5En%5C%5C%202%29%5Cquad%20a_n%20%26%3D%206a_%7Bn-1%7D%20-%209a_%7Bn-2%7D%20&plus;%20%28n%5E2%20&plus;%201%29%20%5Ccdot%203%5En%20%5Cend%7Baligned%7D)

Nejprve převedeme všechny rekurentní prvky na levou stranu:  
![\begin{aligned}
1)\quad a_n - 6a_{n-1} + 9a_{n-2} &= n \cdot 2^n\\
2)\quad a_n - 6a_{n-1} + 9a_{n-2} &= (n^2 + 1) \cdot 3^n
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%201%29%5Cquad%20a_n%20-%206a_%7Bn-1%7D%20&plus;%209a_%7Bn-2%7D%20%26%3D%20n%20%5Ccdot%202%5En%5C%5C%202%29%5Cquad%20a_n%20-%206a_%7Bn-1%7D%20&plus;%209a_%7Bn-2%7D%20%26%3D%20%28n%5E2%20&plus;%201%29%20%5Ccdot%203%5En%20%5Cend%7Baligned%7D)

Vypočteme homogenní část řešení:  
![\begin{aligned}
a_n - 6a_{n-1} + 9a_{n-2} &= 0\\
x^2 - 6x + 9 &= 0\\
x_{1,2} &= \begin{cases} 3\\3\end{cases}\\
\\\hline\\
a_n^h = K_1 \cdot 3^n + &K_2 \cdot n \cdot 3^n
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a_n%20-%206a_%7Bn-1%7D%20&plus;%209a_%7Bn-2%7D%20%26%3D%200%5C%5C%20x%5E2%20-%206x%20&plus;%209%20%26%3D%200%5C%5C%20x_%7B1%2C2%7D%20%26%3D%20%5Cbegin%7Bcases%7D%203%5C%5C3%5Cend%7Bcases%7D%5C%5C%20%5C%5C%5Chline%5C%5C%20a_n%5Eh%20%3D%20K_1%20%5Ccdot%203%5En%20&plus;%20%26K_2%20%5Ccdot%20n%20%5Ccdot%203%5En%20%5Cend%7Baligned%7D)

Vypočtěme partikulární řešení pro první rovnici - nejprve zvolme vhodné zkušební řešení z tabulky  
![\begin{aligned}
p(n) &= n \cdot 2^n \\
t(n) &= 2^n \cdot (An + B)
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20p%28n%29%20%26%3D%20n%20%5Ccdot%202%5En%20%5C%5C%20t%28n%29%20%26%3D%202%5En%20%5Ccdot%20%28An%20&plus;%20B%29%20%5Cend%7Baligned%7D)

Zkušební řešení ![t(n)](https://latex.codecogs.com/svg.latex?t%28n%29) dosadíme za všechny rekurentní prvky do původního rekurentního vztahu:
![\begin{aligned}
a_n - 6a_{n-1} + 9a_{n-2} &= n \cdot 2^n \\
2^n \cdot (An + B) - 6 \cdot 2^{n-1} \cdot (A(n-1) + B) + 9 \cdot 2^{n-2} \cdot (A(n-2) + B) &= n \cdot 2^n
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a_n%20-%206a_%7Bn-1%7D%20&plus;%209a_%7Bn-2%7D%20%26%3D%20n%20%5Ccdot%202%5En%20%5C%5C%202%5En%20%5Ccdot%20%28An%20&plus;%20B%29%20-%206%20%5Ccdot%202%5E%7Bn-1%7D%20%5Ccdot%20%28A%28n-1%29%20&plus;%20B%29%20&plus;%209%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28A%28n-2%29%20&plus;%20B%29%20%26%3D%20n%20%5Ccdot%202%5En%20%5Cend%7Baligned%7D)

Upravíme do vhodné podoby:
![\begin{aligned}
2^n \cdot (An + B) - 6 \cdot 2^{n-1} \cdot (A(n-1) + B) + 9 \cdot 2^{n-2} \cdot (A(n-2) + B) &= n \cdot 2^n\\
2^n \cdot (An + B) - 6 \cdot 2^{n-1} \cdot (An - A + B) + 9 \cdot 2^{n-2} \cdot (An - 2A + B) &= n \cdot 2^n\\
2 \cdot 2 \cdot 2^{n-2} \cdot (An + B) - 6 \cdot 2 \cdot 2^{n-2} \cdot (An - A + B) + 9 \cdot 2^{n-2} \cdot (An - 2A + B) &= 2\cdot 2\cdot n \cdot 2^{n-2}\\
4 \cdot 2^{n-2} \cdot (An + B) - 12 \cdot 2^{n-2} \cdot (An - A + B) + 9 \cdot 2^{n-2} \cdot (An - 2A + B) &= 4\cdot n \cdot 2^{n-2}\\
2^{n-2} \cdot (4An - 12An + 9An) + 2^{n-2} \cdot (12A-18A) + 2^{n-2} \cdot (4B-12B+9B) &= 4\cdot n \cdot 2^{n-2}\\
2^{n-2} \cdot (An) + 2^{n-2} \cdot (-6A) + 2^{n-2} \cdot (B) &= 4\cdot n \cdot 2^{n-2}\\
An-6A+B &= 4n
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%202%5En%20%5Ccdot%20%28An%20&plus;%20B%29%20-%206%20%5Ccdot%202%5E%7Bn-1%7D%20%5Ccdot%20%28A%28n-1%29%20&plus;%20B%29%20&plus;%209%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28A%28n-2%29%20&plus;%20B%29%20%26%3D%20n%20%5Ccdot%202%5En%5C%5C%202%5En%20%5Ccdot%20%28An%20&plus;%20B%29%20-%206%20%5Ccdot%202%5E%7Bn-1%7D%20%5Ccdot%20%28An%20-%20A%20&plus;%20B%29%20&plus;%209%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28An%20-%202A%20&plus;%20B%29%20%26%3D%20n%20%5Ccdot%202%5En%5C%5C%202%20%5Ccdot%202%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28An%20&plus;%20B%29%20-%206%20%5Ccdot%202%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28An%20-%20A%20&plus;%20B%29%20&plus;%209%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28An%20-%202A%20&plus;%20B%29%20%26%3D%202%5Ccdot%202%5Ccdot%20n%20%5Ccdot%202%5E%7Bn-2%7D%5C%5C%204%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28An%20&plus;%20B%29%20-%2012%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28An%20-%20A%20&plus;%20B%29%20&plus;%209%20%5Ccdot%202%5E%7Bn-2%7D%20%5Ccdot%20%28An%20-%202A%20&plus;%20B%29%20%26%3D%204%5Ccdot%20n%20%5Ccdot%202%5E%7Bn-2%7D%5C%5C%202%5E%7Bn-2%7D%20%5Ccdot%20%284An%20-%2012An%20&plus;%209An%29%20&plus;%202%5E%7Bn-2%7D%20%5Ccdot%20%2812A-18A%29%20&plus;%202%5E%7Bn-2%7D%20%5Ccdot%20%284B-12B&plus;9B%29%20%26%3D%204%5Ccdot%20n%20%5Ccdot%202%5E%7Bn-2%7D%5C%5C%202%5E%7Bn-2%7D%20%5Ccdot%20%28An%29%20&plus;%202%5E%7Bn-2%7D%20%5Ccdot%20%28-6A%29%20&plus;%202%5E%7Bn-2%7D%20%5Ccdot%20%28B%29%20%26%3D%204%5Ccdot%20n%20%5Ccdot%202%5E%7Bn-2%7D%5C%5C%20An-6A&plus;B%20%26%3D%204n%20%5Cend%7Baligned%7D)

Rovnici si rozdělíme po mocninách ![n](https://latex.codecogs.com/svg.latex?n) a vypočteme neznámé ![A](https://latex.codecogs.com/svg.latex?A), ![B](https://latex.codecogs.com/svg.latex?B):  
![\begin{aligned}
An-6A+B&=4n\\
\\\hline\\
An &= 4n\\
A &= 4\\
\\\hline\\
-6A+B&=0\\
B&=6A\\
B&=24
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20An-6A&plus;B%26%3D4n%5C%5C%20%5C%5C%5Chline%5C%5C%20An%20%26%3D%204n%5C%5C%20A%20%26%3D%204%5C%5C%20%5C%5C%5Chline%5C%5C%20-6A&plus;B%26%3D0%5C%5C%20B%26%3D6A%5C%5C%20B%26%3D24%20%5Cend%7Baligned%7D)

Žádný problém, takže dosazujeme ![A](https://latex.codecogs.com/svg.latex?A) a ![B](https://latex.codecogs.com/svg.latex?B) do ![t(n)](https://latex.codecogs.com/svg.latex?t%28n%29), čímž získáme hledané ![a_n^p](https://latex.codecogs.com/svg.latex?a_n%5Ep):  
![\begin{aligned}
a_n^p &= 2^n \cdot (4n + 24)\\
a_n^p &= 4 \cdot 2^n \cdot (n + 6)\\
a_n^p &= 2 \cdot 2 \cdot 2^n \cdot (n + 6)\\
a_n^p &= 2^{n+2} \cdot (n + 6)
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a_n%5Ep%20%26%3D%202%5En%20%5Ccdot%20%284n%20&plus;%2024%29%5C%5C%20a_n%5Ep%20%26%3D%204%20%5Ccdot%202%5En%20%5Ccdot%20%28n%20&plus;%206%29%5C%5C%20a_n%5Ep%20%26%3D%202%20%5Ccdot%202%20%5Ccdot%202%5En%20%5Ccdot%20%28n%20&plus;%206%29%5C%5C%20a_n%5Ep%20%26%3D%202%5E%7Bn&plus;2%7D%20%5Ccdot%20%28n%20&plus;%206%29%20%5Cend%7Baligned%7D)


Nalezené řešení dosadíme do výše uvedeného vzorečku:  
![\begin{aligned}
a_n &= a_n^h + a_n^p\\
a_n &= K_1 \cdot 3^n + K_2 \cdot n \cdot 3^n + 2^{n+2} \cdot (n + 6)
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a_n%20%26%3D%20a_n%5Eh%20&plus;%20a_n%5Ep%5C%5C%20a_n%20%26%3D%20K_1%20%5Ccdot%203%5En%20&plus;%20K_2%20%5Ccdot%20n%20%5Ccdot%203%5En%20&plus;%202%5E%7Bn&plus;2%7D%20%5Ccdot%20%28n%20&plus;%206%29%20%5Cend%7Baligned%7D)

Žádné počáteční podmínky nejsou zadány, nelze tudíž spočítat konstanty ![K_1](https://latex.codecogs.com/svg.latex?K_1) a ![K_2](https://latex.codecogs.com/svg.latex?K_2) (řešení není určeno jednoznačně, existuje nekonečně mnoho různých řešení s různými ![K_1](https://latex.codecogs.com/svg.latex?K_1) a ![K_2](https://latex.codecogs.com/svg.latex?K_2)) a pro první příklad je hotovo.

Nyní se podívejme na partikulární část řešení druhého vzorečku - opět vybereme vhodné zkušební řešení ![t(n)](https://latex.codecogs.com/svg.latex?t%28n%29) z tabulky:  
![\begin{aligned}
p(n) &= (n^2+1) \cdot 3^n \\
t(n) &= 3^n \cdot (An^2 + Bn + C)
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20p%28n%29%20%26%3D%20%28n%5E2&plus;1%29%20%5Ccdot%203%5En%20%5C%5C%20t%28n%29%20%26%3D%203%5En%20%5Ccdot%20%28An%5E2%20&plus;%20Bn%20&plus;%20C%29%20%5Cend%7Baligned%7D)

Bystřejší z nás jistě vidí, že tady nastane problém, neboť ![3^n \cdot Bn](https://latex.codecogs.com/svg.latex?3%5En%20%5Ccdot%20Bn) a ![3^n \cdot C](https://latex.codecogs.com/svg.latex?3%5En%20%5Ccdot%20C) jsou řešením homogenního části rekurentního vztahu (![K_1 \cdot 3^n + K_2 \cdot n \cdot 3^n](https://latex.codecogs.com/svg.latex?K_1%20%5Ccdot%203%5En%20&plus;%20K_2%20%5Ccdot%20n%20%5Ccdot%203%5En)). Dostáváme se tak k bodu *3.* postupu řešení a zkušební řešení bude třeba vynásobit ![n^s](https://latex.codecogs.com/svg.latex?n%5Es) s vhodně zvoleným ![s](https://latex.codecogs.com/svg.latex?s). V tomto případě bude ![s = 2](https://latex.codecogs.com/svg.latex?s%20%3D%202), neboť od druhé mocniny ![n](https://latex.codecogs.com/svg.latex?n) nebude žádný ze sčítanců řešením hom. části.

Já ale bystrý nejsem a nevidím to v tom, tak si to mechanicky vypočítám s původním zkušebním řešením ![t(n)](https://latex.codecogs.com/svg.latex?t%28n%29). Bystří mohou přeskočit.  
![\begin{aligned}
a_n - 6a_{n-1} + 9a_{n-2} &= 3^n \cdot (n^2 + 1) \\
3^n \cdot (An^2 + Bn + C) - 6 \cdot 3^{n-1} \cdot (A{(n-1)}^2 + B(n-1) + C) + 9 \cdot 3^{n-2} \cdot (A{(n-2)}^2 + B(n-2) + C) &= 3^n \cdot (n^2 + 1)\\
9 \cdot 3^{n-2} \cdot (An^2 + Bn + C) - 18 \cdot 3^{n-2} \cdot (A(n^2-2n+1) + B{(n-1)} + C) + 9 \cdot 3^{n-2} \cdot (A(n^2-4n+4) + B(n-2) + C) &= 9 \cdot 3^{n-2} \cdot (n^2 + 1)\\
9 \cdot (An^2 + Bn + C) - 18 \cdot (A(n^2-2n+1) + B{(n-1)} + C) + 9 \cdot (A(n^2-4n+4) + B(n-2) + C) &= 9 \cdot (n^2 + 1)\\
9 \cdot (An^2 + Bn + C) - 18 \cdot (An^2-2An+A + Bn-B + C) + 9 \cdot (An^2-4An+4A + Bn-2B + C) &= 9 \cdot (n^2 + 1)\\
0An^2 + 0An + 18A + 0Bn + 0B + 0C &= 9n^2 + 9
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a_n%20-%206a_%7Bn-1%7D%20&plus;%209a_%7Bn-2%7D%20%26%3D%203%5En%20%5Ccdot%20%28n%5E2%20&plus;%201%29%20%5C%5C%203%5En%20%5Ccdot%20%28An%5E2%20&plus;%20Bn%20&plus;%20C%29%20-%206%20%5Ccdot%203%5E%7Bn-1%7D%20%5Ccdot%20%28A%7B%28n-1%29%7D%5E2%20&plus;%20B%28n-1%29%20&plus;%20C%29%20&plus;%209%20%5Ccdot%203%5E%7Bn-2%7D%20%5Ccdot%20%28A%7B%28n-2%29%7D%5E2%20&plus;%20B%28n-2%29%20&plus;%20C%29%20%26%3D%203%5En%20%5Ccdot%20%28n%5E2%20&plus;%201%29%5C%5C%209%20%5Ccdot%203%5E%7Bn-2%7D%20%5Ccdot%20%28An%5E2%20&plus;%20Bn%20&plus;%20C%29%20-%2018%20%5Ccdot%203%5E%7Bn-2%7D%20%5Ccdot%20%28A%28n%5E2-2n&plus;1%29%20&plus;%20B%7B%28n-1%29%7D%20&plus;%20C%29%20&plus;%209%20%5Ccdot%203%5E%7Bn-2%7D%20%5Ccdot%20%28A%28n%5E2-4n&plus;4%29%20&plus;%20B%28n-2%29%20&plus;%20C%29%20%26%3D%209%20%5Ccdot%203%5E%7Bn-2%7D%20%5Ccdot%20%28n%5E2%20&plus;%201%29%5C%5C%209%20%5Ccdot%20%28An%5E2%20&plus;%20Bn%20&plus;%20C%29%20-%2018%20%5Ccdot%20%28A%28n%5E2-2n&plus;1%29%20&plus;%20B%7B%28n-1%29%7D%20&plus;%20C%29%20&plus;%209%20%5Ccdot%20%28A%28n%5E2-4n&plus;4%29%20&plus;%20B%28n-2%29%20&plus;%20C%29%20%26%3D%209%20%5Ccdot%20%28n%5E2%20&plus;%201%29%5C%5C%209%20%5Ccdot%20%28An%5E2%20&plus;%20Bn%20&plus;%20C%29%20-%2018%20%5Ccdot%20%28An%5E2-2An&plus;A%20&plus;%20Bn-B%20&plus;%20C%29%20&plus;%209%20%5Ccdot%20%28An%5E2-4An&plus;4A%20&plus;%20Bn-2B%20&plus;%20C%29%20%26%3D%209%20%5Ccdot%20%28n%5E2%20&plus;%201%29%5C%5C%200An%5E2%20&plus;%200An%20&plus;%2018A%20&plus;%200Bn%20&plus;%200B%20&plus;%200C%20%26%3D%209n%5E2%20&plus;%209%20%5Cend%7Baligned%7D)

Jak je vidět, tohle nevychází, rozhodně nemůžu tvrdit že ![0An^2 = 9n^2](https://latex.codecogs.com/svg.latex?0An%5E2%20%3D%209n%5E2). Podobně to vyjde i když celé zkušební řešení ![t(n)](https://latex.codecogs.com/svg.latex?t%28n%29) vynásobím ![n](https://latex.codecogs.com/svg.latex?n) (pro přehlednost vynechám, kdo chce, může si to spočítat). Zkusme tedy ![t(n)](https://latex.codecogs.com/svg.latex?t%28n%29) vynásobit ![n^2](https://latex.codecogs.com/svg.latex?n%5E2):  
![\begin{aligned}
t(n) &= 3^n \cdot (An^2 + Bn + C) \cdot n^2\\
t(n) &= 3^n \cdot (An^4 + Bn^3 + Cn^2)
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20t%28n%29%20%26%3D%203%5En%20%5Ccdot%20%28An%5E2%20&plus;%20Bn%20&plus;%20C%29%20%5Ccdot%20n%5E2%5C%5C%20t%28n%29%20%26%3D%203%5En%20%5Ccdot%20%28An%5E4%20&plus;%20Bn%5E3%20&plus;%20Cn%5E2%29%20%5Cend%7Baligned%7D)  

A po dosazení do rek. vztahu (na tohle už fakt kašlu, je to pořád stejnej postup, tady je to hozený do [wolframu](http://www.wolframalpha.com/input/?i=3^n+*+%28A*n^4+%2B+B*n^3+%2B+C*n^2%29+-+6+*+3^%28n-1%29+*+%28A*%28n-1%29^4+%2B+B*%28n-1%29^3+%2B+C*%28n-1%29^2%29+%2B+9+*+3^%28n-2%29+*+%28A*%28n-2%29^4+%2B+B*%28n-2%29^3+%2B+C*%28n-2%29^2%29+%3D+3^n+*+%28n^2+%2B+1%29) - vyjde to  
![A = \frac{1}{12}, B = \frac{1}{3}, C = \frac{11}{12}](https://latex.codecogs.com/svg.latex?A%20%3D%20%5Cfrac%7B1%7D%7B12%7D%2C%20B%20%3D%20%5Cfrac%7B1%7D%7B3%7D%2C%20C%20%3D%20%5Cfrac%7B11%7D%7B12%7D)

Po dosazení získáváme výsledek:  
![\begin{aligned}
a_n &= a_n^h + a_n^p\\
a_n &= K_1 \cdot 3^n + K_2 \cdot n \cdot 3^n + 3^n \cdot (\frac{1}{12} \cdot n^4 + \frac{1}{3} \cdot n^3 + \frac{11}{12} \cdot n^2)
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a_n%20%26%3D%20a_n%5Eh%20&plus;%20a_n%5Ep%5C%5C%20a_n%20%26%3D%20K_1%20%5Ccdot%203%5En%20&plus;%20K_2%20%5Ccdot%20n%20%5Ccdot%203%5En%20&plus;%203%5En%20%5Ccdot%20%28%5Cfrac%7B1%7D%7B12%7D%20%5Ccdot%20n%5E4%20&plus;%20%5Cfrac%7B1%7D%7B3%7D%20%5Ccdot%20n%5E3%20&plus;%20%5Cfrac%7B11%7D%7B12%7D%20%5Ccdot%20n%5E2%29%20%5Cend%7Baligned%7D)

###Soustavy rekurentních vztahů

- Na téhle přednášce jsem chyběl, takže dokážu uvést jenom praktický příklad výpočtu - kdo tomu rozumí a je schopen podat nějakou teorii aby měl Kouckej radsot, tak ať doplní

####Příklad

Mějme soustavu rek. vztahů:  
![\begin{aligned}
2a_{n+1} &= a_n + b_n\\
b_{n+1} &= 3a_n + b_n\\\\
a_0 &= b_0 = 5
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%202a_%7Bn&plus;1%7D%20%26%3D%20a_n%20&plus;%20b_n%5C%5C%20b_%7Bn&plus;1%7D%20%26%3D%203a_n%20&plus;%20b_n%5C%5C%5C%5C%20a_0%20%26%3D%20b_0%20%3D%205%20%5Cend%7Baligned%7D)

Z první rovnice můžeme vyjádřit ![b_{n+1}](https://latex.codecogs.com/svg.latex?b_%7Bn&plus;1%7D) jako:  
![\begin{aligned}
b_n &= 2a_{n+1} - a_n\\
b_{n+1} &= 2a_{n+2} - a_{n+1}
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20b_n%20%26%3D%202a_%7Bn&plus;1%7D%20-%20a_n%5C%5C%20b_%7Bn&plus;1%7D%20%26%3D%202a_%7Bn&plus;2%7D%20-%20a_%7Bn&plus;1%7D%20%5Cend%7Baligned%7D)

Položíme obě rovnice pro ![b_{n+1}](https://latex.codecogs.com/svg.latex?b_%7Bn&plus;1%7D) rovny (a za ![b_n](https://latex.codecogs.com/svg.latex?b_n) dosadíme z předchozího bloku), tím získáme nezávislý rek. vztah pro ![a_n](https://latex.codecogs.com/svg.latex?a_n):  
![\begin{aligned}
3a_n + b_n &= 2a_{n+2} - a_{n+1}\\
3a_n + 2a_{n+1} - a_n &= 2a_{n+2} - a_{n+1}\\
-2a_{n+2} + 3a_{n+1} + 2a_n &= 0\\
2a_{n+2} - 3a_{n+1} - 2a_n &= 0
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%203a_n%20&plus;%20b_n%20%26%3D%202a_%7Bn&plus;2%7D%20-%20a_%7Bn&plus;1%7D%5C%5C%203a_n%20&plus;%202a_%7Bn&plus;1%7D%20-%20a_n%20%26%3D%202a_%7Bn&plus;2%7D%20-%20a_%7Bn&plus;1%7D%5C%5C%20-2a_%7Bn&plus;2%7D%20&plus;%203a_%7Bn&plus;1%7D%20&plus;%202a_n%20%26%3D%200%5C%5C%202a_%7Bn&plus;2%7D%20-%203a_%7Bn&plus;1%7D%20-%202a_n%20%26%3D%200%20%5Cend%7Baligned%7D)

Vypočteme homogenní část získaného rek. vztahu:  
![\begin{aligned}
2x^2 - 3x - 2 &= 0\\
x_{1,2} &= \begin{cases} 2\\\frac{-1}{2} \end{cases}\\
a_n = K_1 \cdot 2^n + K_2 \cdot \left(\frac{-1}{2}\right)^n
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%202x%5E2%20-%203x%20-%202%20%26%3D%200%5C%5C%20x_%7B1%2C2%7D%20%26%3D%20%5Cbegin%7Bcases%7D%202%5C%5C%5Cfrac%7B-1%7D%7B2%7D%20%5Cend%7Bcases%7D%5C%5C%5C%5C%20a_n%20%3D%20K_1%20%5Ccdot%202%5En%20&plus;%26%20K_2%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5En%20%5Cend%7Baligned%7D)

K vypočtení ![K_1](https://latex.codecogs.com/svg.latex?K_1) a ![K_2](https://latex.codecogs.com/svg.latex?K_2) využijeme počáteční podmínku - pro ![a_0](https://latex.codecogs.com/svg.latex?a_0) je zadána, pro výpočet ![a_1](https://latex.codecogs.com/svg.latex?a_1) můžeme využít rekurentní vztah v zadání  
![\begin{aligned}
2a_1 &= a_0 + b_0\\
a_1 &= \frac{5 + 5}{2} \\
a_1 &= 5
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%202a_1%20%26%3D%20a_0%20&plus;%20b_0%5C%5C%20a_1%20%26%3D%20%5Cfrac%7B5%20&plus;%205%7D%7B2%7D%20%5C%5C%20a_1%20%26%3D%205%20%5Cend%7Baligned%7D)

![\begin{aligned}
a_0) \quad 5 &= K_1 \cdot 2^0 + K_2 \cdot \left(\frac{-1}{2}\right)^0\\
a_1) \quad 5 &= K_1 \cdot 2^1 + K_2 \cdot \left(\frac{-1}{2}\right)^1\\
\\\hline\\
K_1 &= 3\\
K_2 &= 2\\
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20a_0%29%20%5Cquad%205%20%26%3D%20K_1%20%5Ccdot%202%5E0%20&plus;%20K_2%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E0%5C%5C%20a_1%29%20%5Cquad%205%20%26%3D%20K_1%20%5Ccdot%202%5E1%20&plus;%20K_2%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E1%5C%5C%20%5C%5C%5Chline%5C%5C%20K_1%20%26%3D%203%5C%5C%20K_2%20%26%3D%202%5C%5C%20%5Cend%7Baligned%7D)

Rek. vztah pro ![a_n](https://latex.codecogs.com/svg.latex?a_n) je tedy:  
![a_n = 3 \cdot 2^n + 2 \cdot \left(\frac{-1}{2}\right)^n](https://latex.codecogs.com/svg.latex?a_n%20%3D%203%20%5Ccdot%202%5En%20&plus;%202%20%5Ccdot%20%5Cleft%28%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5En)

To můžeme dosadit do dříve získaného vztahu pro ![b_n](https://latex.codecogs.com/svg.latex?b_n) a získat tak výsledek pro ![b_n](https://latex.codecogs.com/svg.latex?b_n):  
![\begin{aligned}
b_n &= 2a_{n+1} - a_n\\
b_n &= 2 \cdot (3 \cdot 2^{n+1} + 2 \cdot \left( \frac{-1}{2}\right)^{n+1}) - (3 \cdot 2^{n} + 2 \cdot \left( \frac{-1}{2}\right)^{n})\\
b_n &= 2 \cdot (2 \cdot 3 \cdot 2^{n} + 2 \cdot \frac{-1}{2} \cdot \left( \frac{-1}{2}\right)^{n}) - 3 \cdot 2^{n} - 2 \cdot \left( \frac{-1}{2}\right)^{n}\\
b_n &= 12 \cdot 2^{n} -2 \cdot \left( \frac{-1}{2}\right)^{n} - 3 \cdot 2^{n} - 2 \cdot \left( \frac{-1}{2}\right)^{n}\\
b_n &= 9 \cdot 2^n - 4 \cdot \left( \frac{-1}{2}\right)^{n}
\end{aligned}](https://latex.codecogs.com/svg.latex?%5Cbegin%7Baligned%7D%20b_n%20%26%3D%202a_%7Bn&plus;1%7D%20-%20a_n%5C%5C%20b_n%20%26%3D%202%20%5Ccdot%20%283%20%5Ccdot%202%5E%7Bn&plus;1%7D%20&plus;%202%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E%7Bn&plus;1%7D%29%20-%20%283%20%5Ccdot%202%5E%7Bn%7D%20&plus;%202%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E%7Bn%7D%29%5C%5C%20b_n%20%26%3D%202%20%5Ccdot%20%282%20%5Ccdot%203%20%5Ccdot%202%5E%7Bn%7D%20&plus;%202%20%5Ccdot%20%5Cfrac%7B-1%7D%7B2%7D%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E%7Bn%7D%29%20-%203%20%5Ccdot%202%5E%7Bn%7D%20-%202%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E%7Bn%7D%5C%5C%20b_n%20%26%3D%2012%20%5Ccdot%202%5E%7Bn%7D%20-2%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E%7Bn%7D%20-%203%20%5Ccdot%202%5E%7Bn%7D%20-%202%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E%7Bn%7D%5C%5C%20b_n%20%26%3D%209%20%5Ccdot%202%5En%20-%204%20%5Ccdot%20%5Cleft%28%20%5Cfrac%7B-1%7D%7B2%7D%5Cright%29%5E%7Bn%7D%20%5Cend%7Baligned%7D)

###Využití vytvořujících funkcí

to be continued
