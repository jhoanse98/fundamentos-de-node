// let buffer = Buffer.from([1,2,3,4]);  <Buffer 01 02 03 04>

// let buffer = Buffer.from("Hola"); <Buffer 48 6f 6c 61> el buffer almacena de forma hexadecimal

//console.log(buffer);

//-- abecedario con buffer

let abc= Buffer.alloc(26);

for (let i=0; i<26; i++){
    abc[i]=i+97
};

console.log(abc.toString());

console.log(abc);