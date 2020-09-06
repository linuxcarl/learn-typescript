export {};

//<type> // angle bracket syntax
let username: any;
username = 'carlos';

//una cadena donde ts confia en nostros!
let message: string = (<string>username).length > 5 ?
                    `estas ok!! ${username+ '!!!'}`:
                    `Àmigo tienes un problema!!`;

console.log(message);

let userNameWithId: any = 'carlose extra 1';
username = (<string>userNameWithId).substr(0,7);
console.log('username only', username);
//#################//#
//Sintaxis "as" //es equivalente a usar <string>
username = 'SrCha';
let messageAs: string = (username as string).length > 5 ?
                    `estas ok!! ${username+ '!!!'}`:
                    `Àmigo tienes un problema!!`;
console.log(messageAs);
