// setTimeout(() => {
//     console.log('Hola Mundo');

// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Daniel',
        id
    }

    if (id === 10) {
        callback(`El usuario con id ${id} no existe en la BD`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
});