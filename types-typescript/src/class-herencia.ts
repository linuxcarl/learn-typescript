import { extend } from "vega";

export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//SUPER clase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }
    get id(): number {
        return this._id;
    }
    /*
    set id(id: number): void {
        this._id = id;
    }
    */
    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}

// get y set
class Picture extends Item {
    // Propiedades
    public static  photoOrientation = PhotoOrientation;
    #_orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        super(id, title);
        this.#_orientation = orientation;
    }
    get orientation(): PhotoOrientation {
        return this.#_orientation;
    }
    set orientation(orientation: PhotoOrientation) {
        this.#_orientation = orientation;
    }
    // Comportamiento
    public toString() {
        return `[id: ${this.id}, 
                 title: ${this.title}, 
                 orientation: ${this.orientation}]`;
    }
}

class Album extends Item {
    pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title)
        this.pictures = [];
    }
    public addPicture(picture: Picture): void  {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
console.log('##############.: ALBUM :.##############');
console.log('album', album);
console.log('album title=>', album.title);
console.log('album id=>', album.id);

const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
console.log('##############.: ALBUM + PICTURE :.##############');
album.addPicture(picture);
console.log('album =>', album);
console.log('##############.: picture :.##############');

console.log('Picture id=>', picture.id);
console.log('Picture title=>', picture.title);
console.log('Picture orientation=>', picture.orientation);

console.log('##############.: picture  change id and title :.##############');
// Accediendo a los miembros publicos
console.log('picture old id', picture.id); // get id()
console.log('picture old titile', picture.title); // get id()
console.log('picture CLASS', picture);  
//picture.id = 100; // # set id(100);
picture.title = 'Another title'; // #album.title = 'Personal Activities'; //#console.log('album', album);
console.log('Picture new id=>', picture.id);
console.log('Picture new title=>', picture.title);
console.log('picture NEW CLASS', picture);  
console.log('##############.: picture use static propierty :.##############');
console.log('static propierty', Picture.photoOrientation.Square);
//la clase abstract no debe permitir lo siguiente
//const item = new Item(1, 'tedt');
//console.log(item);