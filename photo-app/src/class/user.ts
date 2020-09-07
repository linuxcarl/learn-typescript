import { Album } from "./album";

export class User{
    private album: Album[];

    constructor(private id: number, private username: string, private name: string, private register: boolean){
        this.album = [];
    }
    public addAlbum(album: Album):void{
        this.album.push(album);
    }
}