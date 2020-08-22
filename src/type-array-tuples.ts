// Corchetes []

// Type explicit

let users: string[];
users = ["carlos", "enrique", "tonny", "ana"];

//users = [1, 3, false,'carlos']; error porque elegimos que nuestro array es un string

// Array<Type>
let pictureTitles: Array<string>;
pictureTitles = ['Perfil','Vaciones','Trabajo'];

// Array<Type>
let arrayNumbers: Array<number>;
arrayNumbers = [1,23,45,5,0,3,2];

users.sort();
//accediendo a los valores
console.log('first user: ', users);
console.log('picture: ', pictureTitles);
console.log('numbers: ', arrayNumbers.sort());