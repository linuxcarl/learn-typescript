import { Album } from "./class/album";
import { PhotoOrientation } from "./class/photo-orientation";
import { Picture } from "./class/picture";
import { User } from "./class/user";

const user = new User(1, "Carlos", "Carlos Ramirez", true);
const album = new Album(1,"Introducción a la programación aritentada a objetos");
const picture = new Picture(3, "POO", PhotoOrientation.Landscape);

//Creamos las relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);