import { Item } from "./item";
import { PhotoOrientation } from "./photo-orientation";

export class Picture extends Item {
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
