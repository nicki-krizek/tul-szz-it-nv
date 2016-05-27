# 17. - Programování síťových operací
> Programování síťových operací, koncepce socketů a jejich využití, blokující a neblokující komunikační operace.

## Síťové programování
Síťovou aplikací budeme nadále rozumět takovou aplikaci, která si dokáže přímo vyměňovat data s jinou aplikací umístěnou kdesi (tedy v blíže neurčeném geografickém umístění) v počítačové síti. 

**IP Adresa** je číslo, které jednoznačně identifikuje síťové rozhraní v počítačové síti, která používá IP protokol.

- **IPv4** - 62.20.197.2
- **IPv6** - 2620:0:1cfe:face:b00c::3

**Port** je speciální číslo (0 až 65535), které slouží v počítačových sítích při komunikaci pomocí protokolů TCP a UDP k rozlišení aplikace v rámci počítače. Standartně (http - 80) využívané porty popsány jako [well known](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml).

- **FTP** - 21
- **SSH** - 22
- **HTTP** - 80

**URI** (uniform resource identificator) je textový řetězec s definovanou strukturou, který slouží k přesné specifikaci zdroje informací (ve smyslu dokument nebo služba), hlavně za účelem jejich použití pomocí počítačové sítě, zejména Internetu. URL je podmnožinou URI.  (*scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]*)

- **https://example.org/absolute/URI/with/absolute/path/to/resource.txt**
- **ftp://example.org/resource.txt**

## Protokol TCP/IP
**TCP** (Transmission Control Protocol ) je nejpoužívanějším protokolem transportní vrstvy v sadě protokolů **TCP/IP** používaných v síti Internet. Použitím TCP mohou aplikace na počítačích propojených do sítě vytvořit mezi sebou spojení, přes které mohou obousměrně přenášet data. Protokol garantuje spolehlivé doručování a doručování ve správném pořadí. TCP také umožňuje rozlišovat a rozdělovat data pro více aplikací (například webový server a emailový server) běžících na stejném počítači.

## Sockety
Socket je obecný model point to point (roura) komunikace. Socket je obecně nezávislý na **TCP/IP** protokolu a poprvé byl představen jako programátorské rozhraní zvané [Berkley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) v operačním systému BSD (Berkley Software Distribution). Tento model implementují například **Unixové sockety**, které slouží pro meziprocesovou komunikace. V dnešní době je však pod pojmem Socket myšlena spíše implementace **síťových Socketů** postavených na protokolu** TCP/IP**, právě těmi se budeme dále zabývat.

### Typy socketů
- **Unix Domain Sockets** - Sockety pužívané pro meziprocesovou komunikaci v prostředí Unixu.
- **Internet Domain Sockets** - Síťové sockety ,podporované napříč platformami.
 - **TCP** - streamovanáspojovaná komunikace (Nejdříve se musí navázat spojení mezi párem socketů, server socketnaslouchá na portu, klientský navazuje spojení.)
 - **UDP** - nespojovaná datagramová komunikace (S každým zaslaným datagramem se zasílá lokální socke tdescriptor a adresa příjemce.)
 - **RawIP** - obvykle dostupné jen routerech a nízkoúrovňových službách jako je  (ICMP) ping. (OS již obvykle nepodporují, lze falšovat hlavičky a tak dále.)

### Síťové sockety
Socket je jeden **koncový bod** dvoubodového komunikačního spojení mezi dvěma programy na síti. Je svázán s číslem portu, aby TCP ( nebo jiná) vrstva mohla přiřadit data určité aplikaci na tomto portu poslouchající. Koncový bod tvoří dvojice **jméno hostitele** a **číslo portu**. Každé TCP spojení je identifikováno dvěma koncovými body, takzvaný **socketpair**.

**Níže jsou uvedeny základní funcke poskytované socketem:**

- **socket()** vytváří nový socket daného typu, identifikovaný celým číslem, s alokovanými systémovými prostředky.
- **bind()** je obvykle používán na straně serveru a typicky spojuje lokální port s IP adresou.
- **listen()** se používá na straně serveru uvádí TCP socket do stavu listen.
- **connect()** se používá na straně klienta a přiřazuje volný lokální port k socketu. V případě TCP socketu vytvoří nové TCP spojení.
- **accept()** se používá na straně serveru. Potvrzuje příchozí požadavek na ustavení nového TCP spojení od vzdáleného klienta a vytváří nový socket.
- **send()** a **recv()**, nebo **write()** a **read()**, nebo **sendto()** a **recvfrom()**, se používají pro odesílání a přijímání dat z/na vzdálený socket.
- **close()** požádá systém o uvolnění prostředků, které měl socket alokované. V případě TCP je spojení přerušeno.
- **gethostbyname()** a gethostbyaddr() se používají pro vzájemný překlad jmen hostů a adres. Podporováno je pouze IPv4.
- **select()** je využíván k čekání, než bude socket nebo seznam socketů připraven.
- **poll()** se používá ke kontrole stavu socketu ze skupiny socketů. Skupina může být kontrolována, zda je možné do některého socketu zapsat, číst z něj, nebo zda nenastala nějaká chyba.
- **getsockopt()** umožňuje získat aktuální stav dané vlastnosti socketu.
- **setsockopt()** umožňuje nastavit hodnotu dané vlastnosti socketu.

*Převzato z Berkley Sockets spíše pro orientaci, reálně se může v závisloti na implementaci.*

### Komunikace
Komunikace probíhá tak jak je znázorněno na následujícím obrázku.

![Komunikace pomocí Java socket](17_socket.png)

*Komunikace pomocí Java socket*

### Příklad
Uvedený příklad je v Javě, která má oddělené třídy `Socket` a `ServerSocket'`.


**Klient**

```java
import java.io.*;
import java.net.*;
class TCPClient {
 public static void main(String argv[]) throws Exception {
  String sentence;
  String modifiedSentence;
  BufferedReader inFromUser = new BufferedReader(new InputStreamReader(System.in));
  Socket clientSocket = new Socket("localhost", 6789);
  DataOutputStream outToServer = new DataOutputStream(clientSocket.getOutputStream());
  BufferedReader inFromServer = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
  sentence = inFromUser.readLine();
  outToServer.writeBytes(sentence + '\n');
  modifiedSentence = inFromServer.readLine();
  System.out.println("FROM SERVER: " + modifiedSentence);
  clientSocket.close();
 }
}
```

**Server**

```java
import java.io.*;
import java.net.*;
class TCPServer {
 public static void main(String argv[]) throws Exception {
  String clientSentence;
  String capitalizedSentence;
  ServerSocket welcomeSocket = new ServerSocket(6789);
  while (true) {
   Socket connectionSocket = welcomeSocket.accept();
   BufferedReader inFromClient = new BufferedReader(new InputStreamReader(connectionSocket.getInputStream()));
   DataOutputStream outToClient = new DataOutputStream(connectionSocket.getOutputStream());
   clientSentence = inFromClient.readLine();
   System.out.println("Received: " + clientSentence);
   capitalizedSentence = clientSentence.toUpperCase() + '\n';
   outToClient.writeBytes(capitalizedSentence);
  }
 }
}
```

## Blokují a neblokucící operace