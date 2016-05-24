# 23. - DFT/FFT (radix-2)

> vlastnosti a výpočetní složitost, linearní a kruhová konvoluce, rychlý
výpočet lineární konvoluce pomocí FFT (metoda overlap-add, overlap-save).

##DFT a FFT
- Rychlá Fourierova Transformace (Fast Fourier Transform)
je skupina algoritmů umožňující výpočetně optimalizovaný
výpočet DFT a IDFT
- DFT se používá pro transformaci konečné (periodické) řady
čísel na konečný (periodický) vektor frekvenčních komponent
- Výpočetní náročnost DFT vypočtené podle deﬁnice je ![O(N^{2})](https://latex.codecogs.com/svg.latex?O%28N%5E%7B2%7D%29) aritmetických operací
	- FFT je schopna spočítat stejný výsledek v ![O(N \cdot log(N))](https://latex.codecogs.com/svg.latex?O%28N%20%5Ccdot%20log%28N%29%29)operacích

**Radix-2 Cooley-Tukey FFT** 

- je algoritmus určený pro sekvence délky ![N = 2^{k} , k \in Z](https://latex.codecogs.com/svg.latex?N%20%3D%202%5E%7Bk%7D%20%2C%20k%20%5Cin%20Z)
- Výpočetních úspor je dosaženo díky periodicitě komplexních exponenciál a možnosti vypočítat N-bodovou DFT pomocí dvou N/2-bodových DFT

##Lineární a kruhová konvoluce
