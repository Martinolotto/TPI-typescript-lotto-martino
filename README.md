# Trabajo Práctico Integrador: Investigación en TypeScript

### Materia: Taller de Lenguaje de Programación

##### Tema 1. ¿Qué es TypeScript?

* 1.1. ¿Qué es TypeScript y quién lo desarrolla?  
Typescript es un superconjunto de javascript desarrollado por microsoft.
* 1.2. ¿Qué diferencias tiene con JavaScript?  
La principal diferencia que tiene con javascript, es que le agrega un tipado estatico a la sintaxis, con su propoio sistema de tipos. TypeScript verifica tipos antes de la ejecución y puede compilarse a JavaScript.
* 1.3. ¿Qué ventajas ofrece?  
Las principales ventajas que ofrece son:
  * Detecta errores mientras se escribe el código, antes de ejecutarlo.
  * Mejora el autocompletado y la refactorización en el editor.
  * Hace el código más mantanible y escalable.
  * Los tipos funcionan como documentación del propio código.
* 1.4. ¿Cuál es su versión actual?
TypeScript 7.0.2  es la última version actual estable, salió, 8 de julio de 2026.

##### Tema 2. Crear y ejecutar un proyecto

* 2.1. ¿Cómo se instala TypeScript en un proyecto?
Para instalar typescript como dependencia de desarrollo de un proyecto, en lugar de instalarlo globalmente, en el proyecto a instalar se deben ejecutar los siguientes comandos:

```
npm init -y
npm i -D typescript @types/node@24 tsx
```

-D registra los paquetes en devDependencies, como dependencias de desarrollo.
typescript, proporcioina el compilador y verificador de tipos tsc.
@types/node@24, aporta declaraciones de tipos de las apis de node.js 24.
tsx, permite ejecutar archivos TypeScript directamente durante el desarrollo. sin crear directamente otro archivo javacript. muestra resultados en la terminal.

por convencion el codigo se compila al final al momento de pasarlo a produccion, ya que el navegador no lee typescript en si, por lo que todo el proyecto se debe compilar a javascript.

* 2.2. ¿Para qué sirve el archivo tsconfig.json?
tsconfig.json es el que se encarga de configurar como TypeScript analiza y compila el proyecto
* 2.3. ¿Qué hace el comando tsc?
el comando tsc es para utilizar el compilador de typescript, analiza los tipos, y si no encuentra errores compila el codigo a javascript en un archivo dentro de la carpeta dist/.
typescript sabe donde crear la capreta dist gracias a el tsonfig.json. "outDir": "./dist"
* 2.4. ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
la diferencia que existe, es que con tsc, primero traduce el codigo a javascript en un archivo, dentro de la carpeta dist/según la configuración de tsconfig.json, pero no los ejecuta.,

en cambio tsx, traduce a javascript y ejecuta el codigo durante el desarrollo, pero sin crear ningun archivo javascript y sin verificar los tipos.
node permite ejecutar el código jvaScript compilado. Desde Node.js 24 también puede ejecutar ciertos archivos TypeScript directamente, eliminando las anotaciones de tipos compatibles, pero sin verificar los tipos.

--enable-source-maps permite que Node utilice los mapas de código fuente generados por TypeScript para mostrar ubicaciones originales cuando se producen errores.

##### Tema 3. Tipos básicos

* 3.1. ¿Qué son los tipos string, number y boolean?
Estos tipos son los primitivos, que admiten cadenas de caracteres, numeros enteros y decimales, y valores logicos
* 3.2. ¿Cómo se declara un array con tipo?  
parra declarar un array con tipo, se debe primero day un nombre a la variable, declarar el tipo y que va a ser un arreglo, con la sintaxis de tipo [] y luego asginarle los valores correspondientes al tipo de dato con el que fue definido.
* 3.3. ¿Qué es un tipo unión?
la tipo union, es una forma de declarar una variable permitiendo aditir valores de dos o mas tipos de datos diferentes. con |.
* 3.4. ¿Por qué se recomienda evitar any?
any es un tipo especial, el cual permite asginar cualuqier valor a una variables isn aplicar las comprobaciones del sistema de tipos.
nose recomienda su uso, ya que perdemos la ventaja princiapl de typescript, detectar errores antes de ejecutar un programa. El problema ocurre cuando intentamos utilizar operaciones que no son compatibles con ese tipo de dato.
  * Una alternativa es unknown, que almacena valores de diferentes tipos. pero obliga a comporbar el tipo antes de realizar operaciones que dependan de el

##### Tema 4. Funciones

* 4.1. ¿Cómo se indican los tipos de los parámetros?  
para indicar los tipos de los parametros, seguido de ellos al declararlos, se tiene que seguir con : y el tipo de dato que va a admitir ese parametro.
* 4.2. ¿Cómo se indica el tipo de retorno?
un tipo de retorno de indica luego de declarar los parametros de la funcion con : y el tipo de dato a retornar, luego de las (), pero si la funcion no retorna nada, se indica el tipo como void.
* 4.3. ¿Qué es un parámetro opcional?  
Un parametro opcional, permitie invocar una funcion sin proprocionar necesariamente un argumento para ese parámetro. Se declara agregando `?` despues del nombre del parametro directamente , los parámetros opcionales con `?` deben colocarse después de los obligatorios. cuando no recibe un argumento en undefined, por lo que puede tomar el valor tipo | undefined, y realizar una comprbacion antes de realizar operaciones con ese parametro dentro de la función.
* 4.4. ¿Qué es un parámetro por defecto?  
Un parámetro por defecto es aquel que se le asgina un valor predeterminado en la declaracion de la funcion. Si al llamar a la funcion no proporcionamos ese argumento, Javascript utiliza automaticamente el valor establecido.

##### Tema 5. Interfaces y type

* 5.1. ¿Qué es una interfaz y para qué sirve?  
una interfaz es una forma de esstblecer una estructura para los objetos.  
sirve para definir la estructura que debe cumplir un obejto, como las claves que va a contener, y el tipo de dato que va a almcaenar cada una. Al usarla con un objeto que definamos este va a tener que seguir obligatoriamente su estructura.
* 5.2. ¿Qué es un type?  
un typw pwemite declarar un alias de tipo, es decir, darle un nombre a una defincion de tipo que podemos reutilizar. No se limita a a describir estructuras de objetos, puedo representar uniones, tipos literales y otras combinaciones.
* 5.3. ¿Cómo se declara una propiedad opcional?
Una propiedad opcional es aquella que puede estar presente o ausente en un objeto sin generar un error de tipos. Se declara colocando ? despues del nombre de la propiedad, igual que los parámetros opcionales.
* 5.4. ¿Cuándo conviene usar cada uno?
  Conviene usar Interface, principalmente para definir estructuras de objetos y contratos de clases.
  Conviene usar Type para alias de tipos, uniones, intersecciones y tipos literales.



##### Tema 6. Enums y tipos literales

* 6.1. ¿Qué es un enum?
  Un enum, permite definir un conjunto de constantes relacionadas bajo un mismo nombre, sirve cuando una veriable debe representar uno de varios estados o categorías conocidas.
* 6.2. ¿Qué es un tipo literal?
  permite restringir una variable para que solamente acepte determinados valores exactos, en lugar de aceptar todos los valores de un tipo general como string o number.
* 6.3. ¿En qué se parecen y en qué se diferencian?
    Ambos se parecen en que permiten restringir los valores que puede admitir una variable.
    Pero lo hacen de manera diferente.
    La principal diferencia es que enum genera una enumeracion, un objeto en tiempo de ejecucion, en cambio cuando definis un tipo literal, el tipo desaparece al compilar, pero sus valores permanecen, lo que desaparece es la declaración

* 6.4. ¿En qué situaciones se puede usar cada uno?
conviene usar cada uno segun lo que necesitemos, 
enum: cuando queremos agrupar constantes con nombres y acceder a ellas mediante notación de puntos.
Tipos literales: cuando solamente necesitamos restringir los valores posibles sin crear una estructura adicional en JavaScript.

Fuentes consultadas

- Documentación oficial de TypeScript: <https://www.typescriptlang.org/docs/handbook/>
