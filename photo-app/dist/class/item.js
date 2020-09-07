"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
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
exports.Item = Item;
