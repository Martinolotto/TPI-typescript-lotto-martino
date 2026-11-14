# Glosario de TypeScript

Trabajo Práctico Integrador 4 — Investigación en TypeScript

Este glosario reúne conceptos estudiados durante los seis temas del trabajo práctico. Cada término incluye una definición breve y un ejemplo en TypeScript.

## 1. TypeScript

**Definición:** Lenguaje basado en JavaScript que incorpora un sistema de tipos para detectar errores durante el desarrollo. El código se transforma a JavaScript para ejecutarse.

```typescript
let mensaje: string = "Hola, TypeScript";
console.log(mensaje);
```

## 2. Anotación de tipo

**Definición:** Sintaxis que permite indicar explícitamente el tipo de una variable, parámetro o retorno mediante `:`.

```typescript
let edad: number = 18;
console.log(edad);
```

## 3. Tipos primitivos

**Definición:** Tipos básicos para representar valores, como `string` (texto), `number` (números) y `boolean` (verdadero o falso).

```typescript
let nombre: string = "Martino";
let nota: number = 9;
let aprobado: boolean = true;
console.log(nombre, nota, aprobado);
```

## 4. Array tipado

**Definición:** Arreglo cuyos elementos deben respetar el tipo declarado. Se puede escribir como `tipo[]`.

```typescript
let notas: number[] = [10, 9, 8];
console.log(notas);
```

## 5. Tipo unión (union type)

**Definición:** Permite que un valor pertenezca a uno de varios tipos, separados por el operador `|`.

```typescript
let identificador: string | number = 123;
identificador = "ABC123";
console.log(identificador);
```

## 6. `any`

**Definición:** Tipo que desactiva gran parte de las comprobaciones de TypeScript para un valor. Se recomienda evitarlo cuando sea posible.

```typescript
let dato: any = "Hola";
dato = 42;
console.log(dato);
```

## 7. `unknown`

**Definición:** Tipo que admite valores desconocidos, pero exige comprobar su tipo antes de realizar operaciones específicas.

```typescript
let dato: unknown = "Hola";
if (typeof dato === "string") {
    console.log(dato.toUpperCase());
}
```

## 8. Parámetro tipado

**Definición:** Parámetro de una función cuyo tipo se declara explícitamente para controlar qué argumentos puede recibir.

```typescript
function duplicar(numero: number) {
    return numero * 2;
}
console.log(duplicar(5));
```

## 9. Tipo de retorno

**Definición:** Tipo indicado después de los parámetros de una función para especificar qué clase de valor devuelve.

```typescript
function sumar(a: number, b: number): number {
    return a + b;
}
console.log(sumar(3, 4));
```

## 10. `void`

**Definición:** Tipo de retorno utilizado cuando una función no devuelve un valor útil.

```typescript
function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}`);
}
saludar("Martino");
```

## 11. Parámetro opcional

**Definición:** Parámetro que puede omitirse al llamar una función. Se indica con `?` y, si no se proporciona, su valor es `undefined`.

```typescript
function presentar(nombre: string, apellido?: string): void {
    console.log(nombre, apellido ?? "Sin apellido");
}
presentar("Martino");
```

## 12. Parámetro por defecto

**Definición:** Parámetro que utiliza un valor predeterminado cuando no se proporciona un argumento o se pasa `undefined`.

```typescript
function mostrarRol(nombre: string, rol: string = "USER"): void {
    console.log(nombre, rol);
}
mostrarRol("Martino");
```

## 13. Interfaz (`interface`)

**Definición:** Declaración que describe la estructura que debe cumplir un objeto, incluyendo sus propiedades y tipos.

```typescript
interface Alumno {
    nombre: string;
    edad: number;
}
const alumno: Alumno = { nombre: "Martino", edad: 18 };
console.log(alumno);
```

## 14. Alias de tipo (`type`)

**Definición:** Nombre reutilizable que se asigna a una definición de tipo. Puede representar objetos, uniones y otras combinaciones.

```typescript
type ID = string | number;
let id: ID = "A-10";
console.log(id);
```

## 15. Propiedad opcional

**Definición:** Propiedad de un objeto que puede estar ausente. Se declara con `?` después de su nombre.

```typescript
interface Producto {
    nombre: string;
    descripcion?: string;
}
const producto: Producto = { nombre: "Aceite" };
console.log(producto);
```

## 16. Enumeración (`enum`)

**Definición:** Conjunto de constantes relacionadas agrupadas bajo un nombre. Sus miembros pueden tener valores numéricos o de cadena.

```typescript
enum EstadoPedido {
    PENDIENTE = "PENDIENTE",
    ENTREGADO = "ENTREGADO"
}
let estado: EstadoPedido = EstadoPedido.PENDIENTE;
console.log(estado);
```

## 17. Tipo literal

**Definición:** Tipo que acepta únicamente un valor específico; varios tipos literales pueden combinarse mediante una unión.

```typescript
type Rol = "ADMIN" | "USER";
let rol: Rol = "ADMIN";
console.log(rol);
```