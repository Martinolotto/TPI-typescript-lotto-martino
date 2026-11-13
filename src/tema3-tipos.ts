///convierte el archivo en un modulo, evita colisiones entre declaraciones de variables globales  de diferentes archivos
export { }
console.log("=================PRIMITIVOS===============================");
//Tipos Primitivos 

let edad: number = 18;
console.log(edad);

let nombre: string = "Martino";
console.log(nombre);

let esMayorDeEdad: boolean = edad >= 18;
console.log(esMayorDeEdad);

// edad = "18"; //error de tipo al querer asignar un string a un numero

console.log("===================ARRAY=============================");
//array
//primero se define el tipo de dato y luego se define el array
let notas: number[] = [10, 9, 8, 7, 6];
console.log(notas);

let nombres: string[] = ["Martino", "Juan", "Pedro", "Maria", "Ana"];
console.log(nombres);

let aprobados: boolean[] = [true, true, true, false, true];
console.log(aprobados);

// notas.push("aprobado") // error de tipos, notas solo adminte number,
//push metodo que agrega elementos al final del arreglo

console.log("==================TIPO-UNION==============================");
//union de tipos
let identificador: string | number = 123;
console.log(`como number ${identificador}`);
identificador = "ABC"
console.log(`toma el ultimo valor declarado admitido ${identificador}`);
//identificador = true; solo podes guardar los tipos declarados.

console.log("===================ANY=============================");
//any
let dato: any = "Hola";

dato = 123;
dato = true;

console.log(`dato es ${dato} porque fue declarado como any`);

console.log(dato.toUpperCase);//da undefined, porque es una operacion solo para strings

