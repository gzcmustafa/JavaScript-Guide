# JavaScript Nedir ?
En basit cümle ile JavaScript kısaca JS , “Geliştiricilerin etkileşimli web uygulamaları oluşturmak için kullandığı bir programlama dilidir.”

Javascript’den önce web sayfaları statikti yani okuduğumuz kitaplarda ki gibi sabit değişmeyen sayfalara sahiptiler. Statik bir sayfada içerikler sabit bir düzende görülür. Günümüzde web sayfaları dinamik olarak tasarlanıyor yani kullanıcının etkileşimine yanıt verebilir şekilde. İşte Javascript web uygulamalarını daha dinamik hale getirmek için tarayıcı bazlı bir teknoloji olarak ortaya çıktı. JavaScript’de ki gelişmeler arttıkça JavaScript hem istemci hem sunucu tarafında kullanılmaya başlandı. Bu da günümüzde ki en çok kullanılan programlama dillerinden biri olmasını sağladı .

Bu kısımda daha fazla teorik bilgi verip yazıyı uzatmak istemedim bu yüzden JavaScript’in tarihçesi, kullanım alanları vb… konularda araştırma yaparsanız çok iyi olur.

# Değişken Nedir ?
Herhangi bir programlama diline başlamadan önce bazı temel kavramları öğrenmek en doğrusu.

Değişkenler, programlama dillerinde bilgileri geçici olarak depolamak için kullanılır ve bu bilgiler daha sonra program içinde kullanılmak üzere çağrılabilir.

Örneğin, Js dilinde bir kişinin adını ve soyadını depolamak için bir değişken kullanalım:
`   let adSoyad = 'Mustafa Gözcü'  ` 
Burada ki let ifadesi Js’de değişken oluştururken kullanmamız gereken bir anahtar kelime toplamda 3 tanedir, bunlar var, let, const ve bunları kullanım durumlarına göre kullanıyoruz işte değişkenin tam olarak ne olduğunu bilmeden bu anahtar kelimelerini öğrenmeye çalışsaydık bizim için zor olurdu. Örnekde ki adSoyad ifadesi ise değişkenimize verdiğimiz isim oluyor, buraya daha farklı şeylerde yazabilirsiniz ama bunun belli bir standartı var. = işaretinden sonraki kısımsa değişkenimizin değerini ifade ediyor. Yani değişkenimizin adı adSoyad , değeri ‘Mustafa Gözcü’ şeklinde ki String bir ifade. ( String’de js’de bir veri tipidir detaylı olarak ilerleyen bölümlerde işleyeceğiz şimdilik sadece bunu bilsek yeter)

### JavaScript’de değişken tanımlama anahtar kelimeleri
Değişkenin ne olduğunu öğrendikten sonra bu değişkenleri oluştururken kullanmak zorunda olduğumuz anahtar kelimeleri öğrenelim. Toplamda 3 tane var demiştik bunlar var, let, const . Günümüzde var çok tercih edilmiyor. Peki neden birbirinden farklı anahtar kelimeleri var diye düşünecek olursak , scope ( kapsam ) durumundan dolayı diyebiliriz. Bu scope (kapsam) kavramını ilerleyen bölümlerde daha detaylı şekilde inceleyeceğiz şimdilik bunu bilmemiz yeterli ;

JavaScript’te “scope” (kapsam), bir değişkenin erişilebilir olduğu belirli bir bölgeyi ifade eder. Kapsam, değişkenlerin tanımlandığı ve kullanılabildiği alanı belirler.

Kısaca farklı zamanlarda değişebileceğini düşündüğümüz değerler için let, eğer hiç bir şekilde değişmeyen değerler olacaksa const (pi sayısı vb…) anahtar kelimesini kullanıyoruz. Dediğim gibi ilerleyen bölümlerde daha detaylı bir şekilde değineceğiz.
`const pi = 3.14; 
 var x = 5; 
let y = "Merhaba"; `
