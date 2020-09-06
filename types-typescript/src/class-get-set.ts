import { extend } from "vega";

export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// get y set

class Picture  {
    // Propiedades
    #_id: number;
    #_title: string;
    #_orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this.#_id = id;
        this.#_title = title;
        this.#_orientation = orientation;
    }

    get id(): number {
        return this.#_id;
    }
    set id(id: number): void {
        this.#_id = id;
    }
    get title(): string {
        return this.#_title;
    }
    set title(title: string): void {
        this.#_title = title;
    }
    get orientation(): PhotoOrientation {
        return this.#_orientation;
    }
    set orientation(orientation: PhotoOrientation): void {
        this.#_orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, 
                 title: ${this.title}, 
                 orientation: ${this.orientation}]`;
    }
}

class Album {
    #_id: number;
    #_title: string;
    pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#_id = id;
        this.#_title = title;
        this.pictures = [];
    }

    get id(): number {
        return this.#_id;
    }
    set id(id: number): void  {
        this.#_id = id;
    }
    get title(): string {
        return this.#_title;
    }
    set title(StringTitle: string): string {
        this.#_title = StringTitle;
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
album.addPicture(picture);
console.log('##############.: picture :.##############');

console.log('Picture id=>', picture.id);
console.log('Picture title=>', picture.title);
console.log('Picture orientation=>', picture.orientation);

console.log('##############.: picture  change id and title :.##############');
// Accediendo a los miembros publicos
console.log('picture old id', picture.id); // get id()
console.log('picture old titile', picture.title); // get id()
picture.id = 100; // # set id(100);
picture.title = 'Another title'; // #album.title = 'Personal Activities'; //#console.log('album', album);
console.log('Picture new id=>', picture.id);
console.log('Picture new title=>', picture.title);