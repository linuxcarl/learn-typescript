//crear una fotografia
 type SquareSize = '100x100' | '500x500' | '1000x1000';

 //Usamos TS, definimos tipos para parametros
 function createPicture(title: string, data: string, size: SquareSize): void{
     console.log('create Picture using',title,data,size);
 };

createPicture('Carlos',"20/12/30",'500x500');


 //Usamos TS, definimos tipos para parametros Parametro opciona ?
 function createPicture2(title?: string, data?: string, size?: SquareSize): void{
    console.log('create Picture using',title,data,size);
};

createPicture2('Carlos',"20/12/30",'500x500');
createPicture2('carlos');

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size };
};

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);
