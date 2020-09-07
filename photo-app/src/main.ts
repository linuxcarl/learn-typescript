import { Album, PhotoOrientation, Picture, User } from "./photo-app";

const user = new User(1, "Carlos", "Carlos Ramirez", true);
const album = new Album(1,"Introducción a la programación aritentada a objetos");
const picture = new Picture(3, "POO", PhotoOrientation.Landscape);

//Creamos las relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);