if (8 < 9){
    console.log("Sürece Güven ")   //if şartı doğru olduğu müddetçe içindeki ifade çalışacaktır yani ekrana Trus process yazdıracaktır.
}

let isLoggedin = false;

if(isLoggedin){
    console.log("uygulamaya giriş yapıldı")
}
else{
    console.log("Merhaba")
}
// if(!isLoggedin){
//     console.log("Merhaba")
// }

// Kullanıcı adı parola sorgulama.
let username="newuser";
let password="1234";

if(username=="newuser"){
    if(password == "12345"){
        console.log("uygulamaya giriş yapıldı")
    }
    else{
        console.log("parola yanlış")
    }
}
else{
    console.log("kulalnıcı adı yanlış")
}