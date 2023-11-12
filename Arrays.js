let students = ["Oliver","Johannes","Sabrina","Anna","Alexander"]

sonuc = students.length;

// sonuc=students.toString();
// sonuc=students.join("**");

//eleman silme
sonuc = students.pop(); //son eleman silinir ve silinen eleman geri döndürülür
sonuc=students.shift(); //ilk eleman silinir.

sonuc = students.push("Sena"); //dizinin sonuna eleman eklenir.

sonuc = students.unshift("Sena") //diznin başına eleman ekler
 
console.log(sonuc);
console.log(students);