import { Picture } from "./picture";
import { Item } from './item'
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