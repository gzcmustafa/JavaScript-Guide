//Map'de anahtarlara istediğimiz veri türünü verebiliriz. 
const map = new Map()

map.set('name','tayfun')
map.set(1,'ahmet') //map ise object gibi diyebiliriz
map.set(false,'bool2')

console.log(map)
console.log(map.get(1))

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
