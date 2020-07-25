const emails = "testemail+david@ka.va.k.com"
const dimension = emails.length;
let correoArray =[]
let local = [];
let dominio = [];
let dominioFinal = [];
let arroba = 0;
let espacio = 0;



var emailsUnicos = function(correo) {
for (let i=0; i<dimension; i++){
let letras = correo.charAt(i)
if(letras == "@"){
    arroba += 1;
}else{
    arroba += 0;
}
arroba == 0 ? local.push(letras) :  dominio.push(letras);
}
dominio.shift();
//    Hasta aquí se encuentra dividido en local y dominio
if(espacio !=1){
    for(let a of local){
        if(a == ".") {
            // dominioFinal.push(a) 
        }else if( a == "+" ){
            dominioFinal.push(" ");
            espacio = 1;
        } else  dominioFinal.push(a) 
    }
}
let index = dominioFinal.indexOf(" ")
let dominioResultante = dominioFinal.slice(0, index);
let localString = dominioResultante.toString();
let dominiostring =dominio.toString();
console.log(localString);
console.log(dominiostring);
let resultEmail = `${localString}@${dominiostring}`
let final = [...dominioResultante,"@",...dominio];
let final2 = final. toString();
console.log(final2.split(',').join(''));
let email = final.toString();
alert(email.split(',').join(''));
};

emailsUnicos(emails);


