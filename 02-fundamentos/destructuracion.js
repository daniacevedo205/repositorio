let deadpool = {
    nombre: 'Daniel',
    apellido: 'Acevedo',
    poder: 'Vuela',
    getpoder: function() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    }
};

console.log(deadpool.getpoder());

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

let { nombre: primernombre, apellido, poder } = deadpool;

console.log(primernombre, apellido, poder);