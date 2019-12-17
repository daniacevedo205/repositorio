let nombre = 'deadpool';

let real = 'Rambo';

//console.log(nombre + ' ' + real);
//console.log(`${nombre} ${real}`);

//let nombrecompleto = nombre + ' ' + real;
//let nombretemplate = `${nombre} ${real}`;

//console.log(nombrecompleto === nombretemplate);

function getnombre() {
    return `${nombre} ${real}`
}

console.log(`El nombre de ${getnombre()}`);