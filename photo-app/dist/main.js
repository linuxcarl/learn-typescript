"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./class/album");
const photo_orientation_1 = require("./class/photo-orientation");
const picture_1 = require("./class/picture");
const user_1 = require("./class/user");
const user = new user_1.User(1, "Carlos", "Carlos Ramirez", true);
const album = new album_1.Album(1, "Introducción a la programación aritentada a objetos");
const picture = new picture_1.Picture(3, "POO", photo_orientation_1.PhotoOrientation.Landscape);
//Creamos las relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
