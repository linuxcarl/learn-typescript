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
exports.Picture = void 0;
const item_1 = require("./item");
const photo_orientation_1 = require("./photo-orientation");
class Picture extends item_1.Item {
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
Picture.photoOrientation = photo_orientation_1.PhotoOrientation;
