export enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
export class User{
    private album: Album[];

    constructor(private id: number, private username: string, private name: string, private register: boolean){
        this.album = [];
    }
    public addAlbum(album: Album):void{
        this.album.push(album);
    }
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
export class Picture extends Item {
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

export class Album extends Item {
    pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title)
        this.pictures = [];
    }
    public addPicture(picture: Picture): void  {
        this.pictures.push(picture);
    }
}
