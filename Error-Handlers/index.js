function calculateSquare(number) {
    try {
        if (number < 0) {
            throw new Error("Negatif sayılar için karekök hesaplanmaz.")
        }
        return Math.sqrt(number)
    }
    catch (error) {
        console.error("hata: " + error.message);
        return -1;
    } finally {
        console.log("karekök hesaplama işlemi tamalandı.")
    }
}

// console.log(calculateSquare(9)); 
console.log(calculateSquare(-2)); 