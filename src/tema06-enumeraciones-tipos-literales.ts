export { };

//enum
console.log("==========ENUM==============")
// es una enumeracion, 
//Su objetivo es definir un conjunto de constantes relacionadas y un tipo que permita utilizarlas.
enum EstadoPedido {
    PENDIENTE = "PENDIENTE",
    ENVIADO = "ENVIADO",
    ENTREGADO = "ENTREGADO"
    //miembro del enum --- valor asociado al miembro
}

let estado: EstadoPedido = EstadoPedido.PENDIENTE;

console.log(estado);

estado = EstadoPedido.ENVIADO;


// enum tecnicamente estamos definiendo un objeto que contiene, estados en este caso o claves , o propiedades asginables a una variable, de manera que para asginarlas, debemos, asignar a nuestra variable nuestro enum, antes definiendo su tipo con el nombre de nuestro enu antes definido, y para acceder a una propiedad de nuestro enum para asginarla, lo hacemos mediante la notacion de puntos como lo hariamos con un objeto, tecnicamente estamso definiendo, los posibles valores que podra tomar esa variable
//  literalemente, usando notacion de puntos para poder asginarle la propiedad admitida, por nuestro enum. no podriamos asginar nada que no esta definido si estamos ponineod como tipo a nuestro enum.
console.log("============ENUM-NUMERICO=============")
enum Nivel {
    BAJO,
    MEDIO,
    ALTO
}

let nivelActual: Nivel = Nivel.MEDIO;

console.log(nivelActual); // 1
console.log(Nivel.BAJO);   // 0
console.log(Nivel.ALTO);   // 2
//cuando no le damos numero, typescrip los genera automatico empzando por 0.
// 

console.log("===============TIPOS-LITERALES====================")
//restringimos la declaracion a solo tipos liyterales que admitimos. solo esos valores.
type Estado = "ACTIVO" | "INACTIVO" | "PENDIENTE";

let estadoUsuario: Estado = "ACTIVO";

console.log(estadoUsuario);

estadoUsuario = "PENDIENTE"; // Correcto
// estadoUsuario = "BLOQUEADO"; // Error de TypeScript