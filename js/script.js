//password generator

//ci serve: il suo nome
let Name = prompt('Scrivi il tuo nome');
console.log(Name);

//ci serve il suo cognome
let Cognome = prompt('Scrivi il tuo cognome');
console.log(Cognome);


//ci serve: colore preferito
let FavoriteColor = prompt('Scrivi il tuo colore preferito');
console.log(FavoriteColor);

//creazione password
const UserPassword = Name + Cognome + FavoriteColor + "23";
console.log(UserPassword);

//print password
document.getElementById("user-suggested-password").innerHTML = UserPassword;

