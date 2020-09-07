//SUPER clase
export abstract class Item {
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