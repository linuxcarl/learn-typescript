export = {};

// string or number
let idUser: number | string;

idUser = 4;
idUser = "3";

//Buscar username dado un ID
function getUsernameById(id: number | string): Array<object> {
  const users: Array<Object> = [
    { id: 1, user: "Carlos" },
    { id: 2, user: "Enrique" },
    { id: 3, user: "Tonny" },
    { id: 4, user: "Maria" },
  ];
  return users.filter((u: Object) => Number(u.id) === Number(id));
}

console.log(getUsernameById(idUser));
console.log(getUsernameById("1"));
console.log(getUsernameById(2));

//#################
//Alias de tipos: TS
type NumberAndString = number | string;
let idUser2: NumberAndString;
idUser2 = "3";
type arrayReturn = Array<object>;
//Buscar username dado un ID
function getUsernameById2(id: NumberAndString): arrayReturn {
  const users: Array<Object> = [
    { id: 1, user: "Carlos" },
    { id: 2, user: "Enrique" },
    { id: 3, user: "Tonny" },
    { id: 4, user: "Maria" },
  ];
  return users.filter((u: Object) => Number(u.id) === Number(id));
}

console.log(getUsernameById2(idUser));
console.log(getUsernameById2("1"));
console.log(getUsernameById2(2));


//#################
//Tipos Literales: TS
//ejemplo imagenes de : 100x100, 300x300, 500x500
type SquareSize = '100x100' | '300x300' | '500x500';

//const smallPicture: SquareSize = '200x200';//error porque solo tenemos 3 opciones
const smallPicture: SquareSize = '100x100';
const mediumPicture: SquareSize = '300x300';
console.log(mediumPicture, smallPicture);