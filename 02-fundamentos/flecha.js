// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;
//****************/
// function saludar() {
//     return 'Hola Mundo';
// }

// console.log(sumar(10, 20));
//****************/
// let saludar = (a) => 'Hola Mundo';

// console.log(saludar());
//****************/

// function saludar(nombre) {
//     return `hola ${nombre}`;
// }

// let saludar = (nombre) => `Hola ${nombre}`;

// console.log(saludar('Daniel'));


let deadpool = {
    nombre: 'Daniel',
    apellido: 'Acevedo',
    poder: 'Vuela',
    getpoder() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    }
};

console.log(deadpool.getpoder());