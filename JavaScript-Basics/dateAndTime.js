let nowTime = new Date(); //şuanki tarihi ve zamanı almak için kullancağız

// date için 2 tane metodumuz var biri get biri set , get motdu tarihi,zamanı vb... almamıza yarar. set metodu ise bunu istediğimiz şekilde değiştirmemizi sağlar.

// Get Methods
sonuc = nowTime;
sonuc= nowTime.getDate();//günü getirir
sonuc = nowTime.getDay(); // 0: pazar   6:cumartesi
sonuc = nowTime.getHours(); // saat
sonuc = nowTime.getTime();

//Set Methods
nowTime.setFullYear(2025);  
nowTime.setMonth(7);  
sonuc = nowTime;


console.log(sonuc);
console.log(typeof sonuc);

