export = {};

// string or number
let idUser: number | string;

idUser = 10;
idUser = "30";

//Buscar username dado un ID
function getUsernameById(id: number | string) {
  const users: Array<Object> = [
    { id: 1, user: "Carlos" },
    { id: 2, user: "Enrique" },
    { id: 3, user: "Tonny" },
    { id: 4, user: "Maria" },
  ];
  return users.filter((u: Object) => Number(u.id) === Number(id));
}

console.log(getUsernameById("3"));
console.log(getUsernameById("1"));
console.log(getUsernameById(2));
