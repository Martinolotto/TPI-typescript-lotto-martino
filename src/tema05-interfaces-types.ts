export { }

console.log("============INTERFACE=====================");
//ej de interface
//aca se define
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

//despues la usamos 
const usuario1: Usuario = {
    id: 1,
    nombre: "Martino",
    email: "hola@mail.com"
}
//al declarar una interfaz estamos declarando la esturctura que debe respetar un objeto, en cuento a los datos que debe tener y a los tipos de datos que puede almacenar cada clave. 
console.log(usuario1);

//esto da error porque, estamos pasando un string donde deberia haber un number, y no estamos porporcionando una clave que esta definida en nuetsra interface.
// const usuario2: Usuario = {
//   id: "2",
//   nombre: "Juan",
// };
// console.log(usuario2);

console.log("==========Type==============")
type Identificador = string | number;
//le damos un alias a los tipos.
let id: Identificador = 123; //asignamos nuestro alias como tipo a la variable
id = "ABC123"; //no va a permitir asignaciones que no pertenezcan a los tipos 

console.log(id);
//tambien podemos usar type para definri estructuras de objetos, como interface.
type Producto = {
    nombre: string;
    precio: number;
};

let Aceite: Producto = {
  nombre: "aceite",
  precio: 1200, 
}

console.log(Aceite)

console.log("============Propiedad-Opcional================")
interface Alumno {
    nombre: string;
    edad: number;
    telefono?: string;
}

const alumno1: Alumno = {
    nombre: "Martino",
    edad: 18
};
//se declara como opcional, pero si viene debe cumplir con el tipo definido.

console.log(alumno1);