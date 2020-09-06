// Type Number
// declared variables explicit / explicito
let phone: number;
phone = 33130204422;

// declared variables inflicted / inferido

let whatsapp = 3312489613;

let hexadecimal: number = 0xf00d;
let binary: number = 0b10101;
let octal: number = 0o744;

// type boolean / explicit
let isPro: boolean;
isPro = true;

// type boolean / inflected
let isUser =  true;

// type String 
let name: string = 'Carlos Enrique Ramírez Flores';
let userName: string = "carlos_ram" 

// Template String
// Uso de back-tick `
const data = `
    .:: User Info ::.
    Name: ${name}
    User: ${userName}
    Phone: ${phone}
    Whatsapp: ${whatsapp}
    Is Pro: ${isPro}
`;
console.log(data);