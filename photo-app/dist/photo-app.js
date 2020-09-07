"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __orientation;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = exports.Picture = exports.User = exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
class User {
    constructor(id, username, name, register) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.register = register;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
}
exports.User = User;
//SUPER clase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    /*
    set id(id: number): void {
        this._id = id;
    }
    */
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
// get y set
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        __orientation.set(this, void 0);
        __classPrivateFieldSet(this, __orientation, orientation);
    }
    get orientation() {
        return __classPrivateFieldGet(this, __orientation);
    }
    set orientation(orientation) {
        __classPrivateFieldSet(this, __orientation, orientation);
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id}, 
                 title: ${this.title}, 
                 orientation: ${this.orientation}]`;
    }
}
exports.Picture = Picture;
__orientation = new WeakMap();
// Propiedades
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.Album = Album;
