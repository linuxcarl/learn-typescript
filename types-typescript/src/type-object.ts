//Type: object
let user: object;
user = {};

user = {
  id: 1,
  name: "Carlos",
  username: "carlosr123",
  isPro: true,
};

console.log("user", user);
//esto da error por que se esta usendo object y no Object de js
//console.log('user.name', user.name);//error

const objectJs = {
  id: 1,
  name: "Carlos",
  username: "carlosr123",
  isPro: true,
};
console.log(objectJs instanceof Object);//valida que la instacia sea de Object JS
console.log('user.username', objectJs.username);