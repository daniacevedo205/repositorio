//requireds

const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true
        }
    })
    .argv;

const { crearArchivo } = require('./multiplicar.js');

let argv2 = process.argv;

console.log(argv);

console.log(argv2);