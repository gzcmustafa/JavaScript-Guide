// Set oluşturma
const mySet = new Set();

// Set'e eleman ekleme
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Aynı elemanı tekrar eklemek, set'te sadece bir kez saklanır

// Set'teki eleman sayısı
console.log(mySet.size); // 3

// Set'teki elemanları gezme
mySet.forEach(item => {
  console.log(item);
});

// Bir elemanın set içinde olup olmadığını kontrol etme
console.log(mySet.has(2)); // true
console.log(mySet.has(5)); // false

// Bir elemanı set'ten silme
mySet.delete(2);

// Set'i boşaltma
mySet.clear();



// Map oluşturma
const myMap = new Map();

// Map'e eleman ekleme
myMap.set('name', 'Steve');
myMap.set('age', 121);
myMap.set('country', 'TR');

// Map'ten bir değeri alma
console.log(myMap.get('name')); // 'John'

// Map'teki eleman sayısı
console.log(myMap.size); // 3

// Map'teki elemanları gezme
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Bir anahtarın Map içinde olup olmadığını kontrol etme
console.log(myMap.has('age')); // true
console.log(myMap.has('city')); // false

// Bir anahtarı Map'ten silme
myMap.delete('age');

// Map'i boşaltma
myMap.clear();

