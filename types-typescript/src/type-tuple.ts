
export = {};
// la idea de las tuplas es que cada valor sea diferente
// tuple [1,"user"];

let user: [number, string];
user = [1, 'Carlos Ramirez Flores'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores 
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'anita', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'manuel']); // 0
array.push([2, 'anita']); // 1
array.push([3, 'sarai']); // 2
console.log('array', array);

// Uso de funciones Array
// sarai -> sarai001

array[2][1] = array[2][1].concat('001'); // sarai001
console.log('array', array);