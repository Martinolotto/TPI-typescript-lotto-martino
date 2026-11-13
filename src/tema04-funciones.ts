export {};

console.log("======================FUNCIONES===============================");

//como se indican los tipos de los parametros
function sumar(a: number, b: number) {
  return a + b;
}
console.log(sumar(10, 5));

//no va a admitir guardar otro tipo de dato como parametro.

//console.log(sumar(1, "a")); //va a dar 1a en ts, por cositas de js, pero nos da el aviso de que no se podra asignar.

console.log("=================TIPOS-DE-RETORNO===============================");
//Indica que tipo de valor debe devolver una funcion
//definimos el tipo de dato a retornar la funcion
function leer(palabra1: string, p2: string): string {
  return palabra1 + " " + p2;
}

console.log(leer("hola", "martino"));

// function leer2(palabra1: string, p2: string): string {
//   return (111, palabra1, p2);
// }

// console.log(leer2("hola", "chau")); error de tipos al retorno

//si la funcion no devuelve nada usamos void
function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}`);
}
saludar("gil"); // aca la funciion no retorna nada solo muestra un mensaje, no devuelve un valor. TypeScript también puede inferir el tipo de retorno. No siempre necesitamos escribirlo explícitamente.

console.log("=======================PARAMETROS-OPCIONALES=================================");
//definimos los obligatorios nomrmal, los opcionales con? despues del nombre del parametro directamente, igualmente indicamos del tipo que debe ser si viene.
function saludarOpcional(nombre: string, apellido?: string): void {
    console.log(nombre, apellido);
    //apellido puede ser string | undefined 
    //console.log(apellido.toUpperCase); por lo que esto da error
    if (apellido !== undefined) { //comprobamos si existe 
      console.log(apellido.toUpperCase());
    }
}

saludarOpcional("Martino", "Lotto");
saludarOpcional("Martino"); //da undefined al no proporcionar el valor

console.log("===================PARAMETROS-POR-DEFECTO========================");
function crearUsuario(nombre: string, rol: string = "USER"): void {
  console.log(`Usuario: ${nombre}, Rol: ${rol}`);
}

// cuando no viene, va por defecto
crearUsuario("Martino");
// si viene se reemplaza
crearUsuario("Juan", "ADMIN");
