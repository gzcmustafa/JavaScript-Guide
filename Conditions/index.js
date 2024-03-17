// let number = 25;

// if (number < 0 ) {
//     console.log("sayı negatif")
// } else if (number == 0){
//     console.log("sıfır")
// } else if (number % 2 == 0 ){
//     console.log("çift sayı")
// } else {
//     console.log("tek sayı")
// }


let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName="Pazartesi"
        break;
    case 2:
        dayName="Salı"
        break;
    case 3:
        dayName="Çarşamba"
        break;
    case 4:
        dayName="Perşembe"
        break;
    case 5:
        dayName="Cuma"
        break;
    case 6:
        dayName="Cumartesi"
        break;
    case 7:
        dayName="Pazar"
        break;
    default:
        dayName="Geçersiz gün"
}
console.log("Bugün günlerde " +dayName )