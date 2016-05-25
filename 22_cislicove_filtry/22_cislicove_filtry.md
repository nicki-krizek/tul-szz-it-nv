# Návrh číslicových filtrů

> Návrh číslicových filtrů – toleranční schéma, základní druhy filtrů (DP, HP, PP, PZ, Allpass), návrh FIR filtrů (metoda oken, metoda vzorkování frekvenční charakteristiky), typy IIR filtrů, porovnání vlastností FIR/IIR filtrů.

## Číslicové filtry

- Mění magnitudovou nebo fázovou charakteristiku číslicového signálu
- Magnitudová filtrace
	- Změna magnitudového spektra při zachování fázového spektra
- Fázová filtrace
	- Ekvalizace fázové charakteristiky při zachování magnitudového spektra (tzv. allpass filtry)
- Obvykle zadávány pomocí Z-přenosu ve formě
	- ![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/Hz.png)
- Filtry mající ![p \geq 1](https://latex.codecogs.com/svg.latex?p%20%5Cgeq%201) (cokoliv ve jmenovateli kromě 1) nazýváme IIR (infinite impulse response - nekonečná impulsní odezva kvůli zpětné vazbě)
- Filtry mající ![p = 0](https://latex.codecogs.com/svg.latex?p%20%3D%200) (ve jmenovateli pouze 1) nazýváme FIR (finite impulse response - konečná impulsní odezva, jejíž nenulové vzorky jsou rovny koeficientům ![b[k]](https://latex.codecogs.com/svg.latex?b%5Bk%5D))

## Toleranční schéma

- Definuje požadavky na magnitudové vlastnosti filtru
- Požaduje reálné koeficienty filtrů
- Definuje se v intervalu ![0 < \omega < \pi](https://latex.codecogs.com/svg.latex?0%20%3C%20%5Comega%20%3C%20%5Cpi) (tzn. horní polovina jednotkové kružnice z-obrazu, spodní je symetrická podle Reálné osy, viz dále)

### Parametry tolerančního schématu

- Propustné pásmo (pass band), závěrné pásmo (stop band), přechodové pásmo (transition band)
- Hraniční frekvence propustného (![\omega_p](https://latex.codecogs.com/svg.latex?%5Comega_p)) / závěrného (![\omega_s](https://latex.codecogs.com/svg.latex?%5Comega_s)) pásma
- Positivní ![\delta^+](https://latex.codecogs.com/svg.latex?%5Cdelta%5E&plus;) a negativní ![\delta^-](https://latex.codecogs.com/svg.latex?%5Cdelta%5E-) tolerance v propustném pásmu ![\delta_p](https://latex.codecogs.com/svg.latex?%5Cdelta_p)
- Magnituda v propustném pásmu (nejlépe 1, magnituda signálu zůstává nezměněná)
- Tolerance ![\delta^+](https://latex.codecogs.com/svg.latex?%5Cdelta%5E&plus;) a ![\delta^-](https://latex.codecogs.com/svg.latex?%5Cdelta%5E-) v závěrném pásmu ![\delta_s](https://latex.codecogs.com/svg.latex?%5Cdelta_s)
- Magnituda v závěrném pásmu (nejlépe 0, maximální útlum signálu)
- Zvlnění v propustném pásmu (pass band ripple): ![max{(\delta^+, \delta^-)}](https://latex.codecogs.com/svg.latex?max%7B%28%5Cdelta%5E&plus;%2C%20%5Cdelta%5E-%29%7D) (možno uvést i v dB: ![A_p = max{(20 log_{10}(1 + \delta^+), -20 log_{10}(1 - \delta^−))}](https://latex.codecogs.com/svg.latex?A_p%20%3D%20max%7B%2820%20log_%7B10%7D%281%20&plus;%20%5Cdelta%5E&plus;%29%2C%20-20%20log_%7B10%7D%281%20-%20%5Cdelta%5E-%29%29%7D)
- Tolerance pro FIR a IIR jiné
	- IIR: ![\delta^+ = 0, \delta^- = \delta_p](https://latex.codecogs.com/svg.latex?%5Cdelta%5E&plus;%20%3D%200%2C%20%5Cdelta%5E-%20%3D%20%5Cdelta_p) -> maximální magnituda je 1
	- FIR: ![\delta^+ = \delta^- = \delta_p](https://latex.codecogs.com/svg.latex?%5Cdelta%5E&plus;%20%3D%20%5Cdelta%5E-%20%3D%20%5Cdelta_p) -> středová magnituda je 1
- Útlum v závěrném pásmu v dB: ![A_s = -20 log_{10}(\delta_s)](https://latex.codecogs.com/svg.latex?A_s%20%3D%20-20%20log_%7B10%7D%28%5Cdelta_s%29)

![obrazky zakladni filtry](https://e2e.ti.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-09-52/1665.Figure-1.PNG)

![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/tol_schema.png)

![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/tol_schema_multipass.png)

## Návrh FIR filtrů

### Metoda IRT (Impulse Response Truncation)

- Vychází z faktu, že impulsní odezva ideálního filtru ![h_{ID}[n]](https://latex.codecogs.com/svg.latex?h_%7BID%7D%5Bn%5D) je nekonečná a nekauzální, např. nulovací notch filtr:

![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/notch_FIR_IIR.png)

- Reálný filtr ![h[n]](https://latex.codecogs.com/svg.latex?h%5Bn%5D) vznikne "oříznutím" impulsní odezvy ideálního filtru - čím delší úsek vyřízneme, tím blíže k ideálu
- Reálný filtr se od ideálního liší existencí zvlnění v závěrném a propustném pásmu (![\delta_p](https://latex.codecogs.com/svg.latex?%5Cdelta_p) a ![\delta_s](https://latex.codecogs.com/svg.latex?%5Cdelta_s)) a existencí přechodového pásma (![\omega_c](https://latex.codecogs.com/svg.latex?%5Comega_c))
- S rostoucím řádem filtru ![N](https://latex.codecogs.com/svg.latex?N) se zužuje přechodové pásmo, ale zvlnění zůstává skoro stejné (Gibbsův jev)
- Oříznutí impulzní odezvy je v podstatě
![h[n] = h_{ID}[n] w_r[n]](https://latex.codecogs.com/svg.latex?h%5Bn%5D%20%3D%20h_%7BID%7D%5Bn%5D%20w_r%5Bn%5D)
kde ![w_r[n]](https://latex.codecogs.com/svg.latex?w_r%5Bn%5D) je obdélníkové okénko délky ![L = N + 1](https://latex.codecogs.com/svg.latex?L%20%3D%20N%20&plus;%201)
- **Šířka přechodového pásma** se odvíjí od šířky hlavního laloku Dirichletova kernelu (DTFT okénkovací funkce), pro obdélníkové okénko je to ![4\pi /L](https://latex.codecogs.com/svg.latex?4%5Cpi%20/L)
- **Zvlnění** se odvíjí od magnitudy postranního laloku Dirichletova kernelu a prakticky nezávisí na délce filtru
	- pro obdélníkové okénko se přibližně rovná ![\delta_p \approx \delta_s \approx 0.09](https://latex.codecogs.com/svg.latex?%5Cdelta_p%20%5Capprox%20%5Cdelta_s%20%5Capprox%200.09), tedy ![A_p = 0.75\text{ dB, } A_s = 21 \text{ dB}](https://latex.codecogs.com/svg.latex?A_p%20%3D%200.75%5Ctext%7B%20dB%2C%20%7D%20A_s%20%3D%2021%20%5Ctext%7B%20dB%7D)
- Tolerance ![\delta](https://latex.codecogs.com/svg.latex?%5Cdelta) (velikost zvlnění) dosažené pomocí obdélníkového okénka jsou pro reálné aplikace obvykle nevhodné. Můžeme však použít jiná okénka (s menší magnitudou postranních laloků) - tím vzniká návrh filtru metodou oken

### Metoda oken
- Zobecnění metody IRT použitím jiného než obdélníkového okénka
- V podstatě se jedná o vyhlazování frekvenční charakteristiky ideálního filtru pomocí spektra okénka
- Platí to co u IRT - šířka hlavního laloku ovlivňuje šířku přechodového pásma, magnituda postranních laloků ovlivňuje magnitudu zvlnění

- Postup návrhu filtru
	- Podle požadované tolerance zvlnění zvolím typ okénka
	- Podle požadované šířky přechodového pásma zvolím délku/řád ![h[n]](https://latex.codecogs.com/svg.latex?h%5Bn%5D)
	- Podle šílených vzorečků z IRT vypočtu ![L](https://latex.codecogs.com/svg.latex?L) koeficientů impulsní odezvy, které převážím zvoleným okénkem
- Parametry nejpoužívanějších oken
![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/w_params.png)
- Shrnutí vlastností okének
	- Obdélník: Nejužší přechodové pásmo, vysoké tolerance zvlnění
	- Bartlett: Dvojnásobně velké přechodové pásmo (oproti obdélníku), neobsahuje klasické zvlnění (monotónní amplituda u přechodového pásma, ale tolerance je poměrně vysoká - 0.05)
	- Hann a Hamming: stejně široké přechodové pásmo jako Bartlett, menší tolerance zvlnění -> Hann má větší amplitudu kmitů, ale prudší útlum. Hamming má menší amplitudu kmitů, ale pozvolnější útlum
![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/hann_v_hamming.png)
	- Blackmann: široké přechodové pásmo, vynikající tolerance zvlnění
	- Kaiser: možné volit parametry dle úlohy, preferované okénko

### Metoda vzorkování frekvenční charakteristiky

- Metoda spočívá v ekvidistatním vzorkování požadované ideální frekvenční charakteristiky ![H_{ID}(e^{j \omega})](https://latex.codecogs.com/svg.latex?H_%7BID%7D%28e%5E%7Bj%20%5Comega%7D%29) v ![L](https://latex.codecogs.com/svg.latex?L) bodech
- Získáme vzorky ![H[k] = H_{ID}(e^{j 2 \pi k / L})\text{, } k = 0,\ldots,L-1](https://latex.codecogs.com/svg.latex?H%5Bk%5D%20%3D%20H_%7BID%7D%28e%5E%7Bj%202%20%5Cpi%20k%20/%20L%7D%29%5Ctext%7B%2C%20%7D%20k%20%3D%200%2C%5Cldots%2CL-1), které představují ![L](https://latex.codecogs.com/svg.latex?L) -bodovou DFT impulsní odezvy ![h[n]](https://latex.codecogs.com/svg.latex?h%5Bn%5D) FIR filtru řádu ![N = L - 1](https://latex.codecogs.com/svg.latex?N%20%3D%20L%20-%201)
- Vzorky spektra této aproximace přesně odpovídají spektru ideálního filtru, nemáme však kontrolu nad filtrem v oblasti mezi těmito vzorky (filtr se tam může chovat jak chce, což není žádoucí)
- Pro zlepšení vlastností se zařazují vzorky popisující přechodové pásmo

### Další metody
- Metoda oken je jednoduchá a vede k celkem kvalitním filtrům, nicméně má svoje mouchy (tolerance přechodového a závěrného pásma jsou stejné a nelze je nezávisle měnit, zvlnění je pro většinu oken nerovnoměrné a utlumuje se směrem od přechodového pásma)
- Obecnější návrhové metody poskytují více volnosti v designu jednotlivých částí tolerančního schématu (třeba nezávislé tolerance zvlnění pásem)
- Tyto metody jsou obvykle založeny na numerické optimalizaci (least squares, equiripple...) a v otázce nejsou, takže koho to zajímá tak [PZS přednáška XII slidy 5-7](https://elearning.tul.cz/mod/resource/view.php?id=45540 "PZS přednáška XII slidy 5-7").

## Typy IIR filtrů

### Butterworth

- Definován ve smyslu čtverce analogové magnitudové charakteristiky

![|H(\Omega)|^2 = \frac{1}{1+(\frac{\Omega}{\Omega_0})^{2N}}](https://latex.codecogs.com/svg.latex?%7CH%28%5COmega%29%7C%5E2%20%3D%20%5Cfrac%7B1%7D%7B1&plus;%28%5Cfrac%7B%5COmega%7D%7B%5COmega_0%7D%29%5E%7B2N%7D%7D)

- Vlastnosti
	- Magnitudová charakteristika je monotónně klesající funkce závislá na ![\Omega](https://latex.codecogs.com/svg.latex?%5COmega)
	- Maximum nastává pro ![{|H(\Omega)|}_{\Omega=0} = 1](https://latex.codecogs.com/svg.latex?%7B%7CH%28%5COmega%29%7C%7D_%7B%5COmega%3D0%7D%20%3D%201)
	- Pokles magnitudy na polovinu (o 3 dB) v bodě ![\Omega_0](https://latex.codecogs.com/svg.latex?%5COmega_0)

![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/butterworth.png)

	- Jak je vidět, v podstatě neexistující zvlnění, ale obrovské přechodové pásmo

### Chebyshev (Čebyšev)
- Navržené na základě Chebyshevova polynomu
- Dva druhy filtru umožňující vybrat si rovnoměrné zvlnění buď v propustném (Chebyshev-I), nebo v závěrném (Chebyshev-II) pásmu, podle vlastností polynomu
- **Chebyshevův filtr I. druhu** je definován ve smyslu čtverce analogové magnitudové charakteristiky jako

![|H(\Omega)|^2 = \frac{1}{1+\epsilon^2 T_N^2 (\frac{\Omega}{\Omega_0})}](https://latex.codecogs.com/svg.latex?%7CH%28%5COmega%29%7C%5E2%20%3D%20%5Cfrac%7B1%7D%7B1&plus;%5Cepsilon%5E2%20T_N%5E2%20%28%5Cfrac%7B%5COmega%7D%7B%5COmega_0%7D%29%7D)

kde ![\Omega_0](https://latex.codecogs.com/svg.latex?%5COmega_0), ![\epsilon](https://latex.codecogs.com/svg.latex?%5Cepsilon) jsou parametry a ![T_N](https://latex.codecogs.com/svg.latex?T_N) je Chebyshevův polynom řádu ![N](https://latex.codecogs.com/svg.latex?N)

- Vlastnosti
	- Zvlnění v propustném pásmu (závislé na ![N](https://latex.codecogs.com/svg.latex?N)), maximální hodnota 1
	- Pro přechodové pásmo a dál je charakteristika monotónně klesající

![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/cheb_I.png)

- **Chebyshevův filtr II. druhu** je definován ve smyslu čtverce analogové magnitudové charakteristiky jako

![|H(\Omega)|^2 = 1-\frac{1}{1+\epsilon^2 T_N^2 (\frac{\Omega}{\Omega_0})}](https://latex.codecogs.com/svg.latex?%7CH%28%5COmega%29%7C%5E2%20%3D%201-%5Cfrac%7B1%7D%7B1&plus;%5Cepsilon%5E2%20T_N%5E2%20%28%5Cfrac%7B%5COmega%7D%7B%5COmega_0%7D%29%7D)

- Vlastnosti
	- Zvlnění závislé na ![N](https://latex.codecogs.com/svg.latex?N) v závěrném pásmu
	- Magnituda v propustném pásmu nejvýše 1 (pro stejnosměrnou složku)
	- Magnituda monotónně klesající až do závěrného pásma

![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/cheb_II.png)

### Eliptické filtry

- Definice

![|H(\Omega)|^2 = \frac{1}{1+\epsilon^2 R_N^2 (\frac{\Omega}{\Omega_0})}](https://latex.codecogs.com/svg.latex?%7CH%28%5COmega%29%7C%5E2%20%3D%20%5Cfrac%7B1%7D%7B1&plus;%5Cepsilon%5E2%20R_N%5E2%20%28%5Cfrac%7B%5COmega%7D%7B%5COmega_0%7D%29%7D)

![R_N](https://latex.codecogs.com/svg.latex?R_N) je Chebyshevova racionální funkce řádu ![N](https://latex.codecogs.com/svg.latex?N)

- Vlastnosti
	- Rovnoměrné zvlnění v obou pásmech
	- Ostřejší přechod z propustného do závěrného pásma v porovnání s ostatními IIR filtry

![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/22_cislicove_filtry/elliptic.png)



## Porovnání vlastností FIR a IIR filtrů

###FIR

- Obvykle lineární fáze - minimální fázové zkreslení
- Intuitivnější metody návrhu
- Vždy stabilní

###IIR

- Nižší latence (řád filtru) při stejných parametrech tolerančního schématu
- Nižší výpočetní náročnost aplikace
- Nemohou mít lineární fázi
- Vhodné pouze pro návrh jednoduchých filtrů (čistě DP, HP, PP, PZ), vícepásmové filtry jdou vytvořit, ale velice obtížně
- Mohou být nestabilní (ROC mimo jednotkovou kružnici vlivem pozice pólů)