# 1. - Základy teorie grafů

>  souvislost, kostra grafu, eulerovské, hamiltonovské a rovinné grafy. 
Vybrané grafové algoritmy – prohledávání grafu, minimální kostra, nejkratší cesta. 

###Základní pojmy

**Vrcholy** - reprezentují objekty

**Hrany** - reprezentují vztahy mezi objekty

**Jednoduchý neorientovaný graf**

- uspořádáná dvojice G = (V,H)
- V je konečná množina vrcholů
- H je podmnožina množiny neuspořádaných dvojic prvků V (množina hran) ![H\subseteq \binom{V}{2}](https://latex.codecogs.com/svg.latex?H%5Csubseteq%20%5Cbinom%7BV%7D%7B2%7D)
- jednoduchý - neobsahuje smyčky a paralelní hrany

**Orientovaný graf**

- H je podmnožina množiny uspořádaných dvojic ![H\subseteq V\times V](https://latex.codecogs.com/svg.latex?H%5Csubseteq%20V%5Ctimes%20V)

**Stupeň vrcholu**

- pro vrchol v z množiny V je ![d_{G}(v)](https://latex.codecogs.com/svg.latex?d_%7BG%7D%28v%29) stupeň vrcholu v grafu G
- počet hran grafu G incidentních s vrcholem V
- ![d_{G}(v) = |\left \{ e\in H | v \in e \right \}|](https://latex.codecogs.com/svg.latex?d_%7BG%7D%28v%29%20%3D%20%7C%5Cleft%20%5C%7B%20e%5Cin%20H%20%7C%20v%20%5Cin%20e%20%5Cright%20%5C%7D%7C)

**Skóre grafu** - posloupnost stupňů vrcholů grafu G seřazená nerostoucím způsobem

**Kontrakce hrany** - vrcholy spojené danou hranou se spojí(merge-nou) v jeden, daná hrana zanikne

**Odstranění hrany** -hrana je odstraněna z množiny hran, vše ostatní zůstává

**Odstranení vrholu** - odstraní se vrchol a všechny hrany s ním spojené

**Dělení hrany** - hrana se rozdělí na 2 hrany s jedním vrcholem

**u-v sled** 

- posloupnosti vrcholů
- jak se po sobě navazujících hranách dostat z u do v
- pokud u=v -> uzavřený sled

**u-v tah** 

- je sled, kde se neopakují hrany
 pokud u=v -> uzavřený tah

**u-v cesta** 

- je tah, kde se neopakují vrcholy
- pokud u=v -> kružnice (uzavřená cesta)

**acyklický graf** - graf, ve kterém neexistuje kružnice, nazýváme les

##Souvislost grafů
- graf je souvislý, pokud má právě 1 komponentu

**Komponenta grafu** - maximální (co se do počtu vrcholů týče) souvislá část grafu

- souvislý graf je graf, ve kterém pro libovolnou dvojici vrcholů existuje u-v cesta

**Strom** - je acyklický a souvislý graf


**Kostra grafu** - minimální souvislý podgraf, který obsahuje všechny vrcholy

##Eulerovský graf

- tzv. "jednotažky", lze je nakreslit jedním tahem
- je souvislý graf G (opbecně s paralelními hranami), kde existuje eulerův tah (je jendo jestli otevřený nebo uzavřený)

**Eulerovský tah**

- takový u-v tah, který obsahuje každou hranu právě 1
- otevřený u != v
- uzavřený u=v (**eulerovská kružnice**)

**Kritérium eulerovskosti**

- souvislý graf ke eulerovský práve tehdy, když má všechny vrcholy sudého stupně, nebo právě 2 vrcholy lichého
- pokud má všechny sudé, tak existuje eulerovská kružnice
- pokád má 2 liché, tka existuje neuzavřený eul. tah, který začíná v libovolném 1 z vrcholů lichého stupně a končí v tom druhém 

**Problém čínského listonoše**
- hledáme uzavřený sled nejmenší možné váhy, který obsahuje každou hranu alespoň jednou

##Hamiltnovské grafy

**Hamiltnovská kružnice** - kružnice, která je faktorem (obsahuje každý vrchol právě jednou)

**Hamiltnosvký graf** - je graf co obsahuje hamil. kružnici

**Problém obchodního cestujícího** 

- Kn - úplný hranově ohodnocený graf, má (n-1!)/2 hran
- hledáme hamilt. kružnici nejmenší možné váhy 

##Rovinné grafy

- jsou grafy, u kterých existuje rovinné nakreslení, tj. nakreslení bez křížení hran

**Kuratovského věta**
- graf G je rovinný, pokud neobsahuje podgraf homeomorfní s K3,3 nebo K5

##Prohledávání grafu
- výsledkem je kostra
- prohledává se pro cestu z vrcholu u do vrcholu v 

### do hloubky
- algoritmus vezme první hranu (obvykle nejlevnější), dostane se k dalšímu vrcholu, kde opět vezme první hranu a takto postupuje dokud nenarazí na vrchol, který nemá další hranu, nebo konečný vrchol, v tu chvíli se vrátí na předchozí vrchol a jde druhou hranou 
![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/01_zaklady_teorie_grafu/hloubka.gif)

### do šířky
- algoritmus nejprve vyčerpá všechny dostupné hrany a až pak se přesune na další vrchol  
- ![](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif)
- 
##Minimální kostra

**Jarníkův - primův**
Algoritmus vychází z libovolného uzlu a udržuje si seznam již objevených uzlů a jejich vzdáleností od propojené části grafu. V každém svém kroku připojí ten z uzlů, mezi nímž a projenou částí grafu je hrana nejnižší délky a označí sousedy nově připojeného uzlu za objevené, případně zkrátí vzdálenosti od již známých uzlů, pokud byla nalezena výhodnější hrana. V okamžiku, kdy jsou propojeny všechny uzly, algoritmus terminuje.
![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/01_zaklady_teorie_grafu/jarnik.gif)

**Borůvkův algoritmus**

- princip skládání komponent
- na začátku všechny vrcholu jako samostatné komponenty
- algoritmus je pak postupně propojuje pomocí nejlevnějších hran
- zastaví se jakmile dosáhne jedné komponenty
- ![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/01_zaklady_teorie_grafu/boruvka.gif)

**Kruskalův algoritmus**

- seřadí si hrany od nejlevnější po nejdražší a postupně přidává hrany
- hrana je přidána, pokud alespoň jeden z vrcholů dané hrany ještě nebyl viděn
- ![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/MST_kruskal_en.gif/300px-MST_kruskal_en.gif)

##Nejkratší cesta
- hledání nejkratší cesty z vrcholu u do vrcholu v
**Dijkstrův algoritmus**
- počáteční vrchol má skére 0 a všechny ostatní nekonečno
- každý následující vrchol dostane skóre součtem skóre vrcholu a váhy hrany, kterou jsou spojené
- pokud se do daného vrcholu lze dostat více hranami, tak výsledné skóre tohoto vrcholu je to menší
- výsledná cesta je pak cesta přes vrcholy s nejmenším skórem
- ![](https://github.com/tomaskrizek/tul-szz-it-nv/blob/master/01_zaklady_teorie_grafu/dijkstra.gif)