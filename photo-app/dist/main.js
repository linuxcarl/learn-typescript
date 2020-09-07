"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, "Carlos", "Carlos Ramirez", true);
var album = new photo_app_1.Album(1, "Introducción a la programación aritentada a objetos");
var picture = new photo_app_1.Picture(3, "POO", photo_app_1.PhotoOrientation.Landscape);
//Creamos las relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
