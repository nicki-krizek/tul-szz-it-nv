# 30. - Vyhledávání
>Vyhledávání lineární a binární, datové struktury optimalizované pro vyhledávání a práce s nimi, binární vyhledávací strom, 2-3 strom, B strom, hashování.

## Lineární vyhledávání
- Postupné sekvenční procházení prvků seznamu od začátku do konce. (**sekvenční vyhledávaní**).
- Složitost procházení je O(N).
 - Nejlepší je O(1), je-li prvek na první pozici.
 - Průměrně pak O(N/2).
 - Nejhorší O(N), je-li prvke na poslední pozici.
 - Narozdíl od binárního vyhledávání lze použít na **neuspořádaný** (neseřazený) seznam.
 - V některých případech jediný možný způsob prohledávání (spojový seznam).

**Princip:** (máme pole **p** a prvek **h**)

- Porovnáme první prvek pole p s prvkem h.
- Pokud se rovnají vrátíme ho jako výsledek.
- V opačném případě zkusíme porovnat další prvek z p.
- Tento postup opakujeme až do konce pole. (nenalezení lze reprezentovat různě)

```java
/**
  * Linearni vyhledavani
  * @param array pole, ve kterem hledame
  * @param value hodnota, kterou hledame
  * @return index hledaneho prvku, -1 v pripade nenalezeni
  */
 public static int linearSearch(int[] array, int value){
     for(int i = 0; i < array.length; i++){
         if(array[i] == value) return i;
     }
     return -1;
 }
```

## Binární vyhledávání
- Vyhledávací algoritmus na nalezení zadané hodnoty pomocí **půlení intervalu**.
- Funguje pouze na **uspořádáném** (seřazeném) seznamu.
- Složitost procházení je O(log2(N)), tedy lepší (rychlejší) než u lineárního vyhledávání.
- Algoritmus je typu divide and conquer.
- Možný je rekurzivní i iterativní zápis. (iteratívní nevolá funkce a je nepatrně rychlejší)

**Princip:** (máme pole **p** a prvek **h**)

- Porovnáme prostřední prvek pole p s prvkem h.
- Pokud se rovnají vrátíme ho jako výsledek.
- V případě, že je h menší, musí se hledaný prvek v vyskytovat ve zbytku pole nalevo. (a naopak)
- Tento postup opakujeme (rekurzivně) na zbytkovém poli. (v kódu níže reprezentováno jako zarážky)
- Zbyde-li nám pouze dílčí pole s jedním prvkem a jeho hodnota neodpovídá h, hodnota h se v poli nevyskytuje.

```java
    /**
     * Binarni vyhledavani (rekurzivni zapis)
     * @param array prohledavane pole (setridene od nejvyssiho)
     * @param leftIndex prvni index, na ktery smime sahnout
     * @param rightIndex posledni index, na ktery smime sahnout
     * @param value hodnota k nalezeni
     * @return index hodnoty, -1 v pripade nenalezeni
     */
    public static int binarySearch(int[]  array, int leftIndex, int rightIndex, int value){
        if(leftIndex == rightIndex && array[leftIndex] != value) return -1;
    
        int middleIndex = leftIndex + (rightIndex - leftIndex)/2;
        if(array[middleIndex] == value) return middleIndex;
        else if(array[middleIndex] > value) 
            return binarySearch(array, middleIndex + 1, rightIndex, value);
        else return binarySearch(array, leftIndex, Math.max(leftIndex, middleIndex - 1), value);
}    

## Datové struktury optimalizované pro vyhledávání
### Binární vyhledávací strom (BST)
- Postaveno na principu binárního vyhledávání. (vyvážený BST strom má složitost vyhledávání O(log2(N))
- Jedná se o binární strom, každý uzel tedy má nanejvýš dva potomky − levého a pravého.
- Každému uzlu je přiřazen určitý klíč. Podle hodnot těchto klíčů jsou uzly uspořádány.
- Levý podstrom uzlu obsahuje pouze klíče menší než je klíč tohoto uzlu.
- Pravý podstrom uzlu obsahuje pouze klíče větší než je klíč tohoto uzlu.
- Může (multimnožina) i nemusí (množina) podporovat duplicitní hodnoty. (ostrá a neostrá nerovnost, záleží na implementaci)
- Základ pro konstrukci abstraktnějších datových struktur jako jsou množiny, multimnožiny a asociativní pole.

![Binární vyhledávací strom](30_bst.png)

*Binární vyhledávací strom*

### 2-3 strom

### B strom

### Hashovaní