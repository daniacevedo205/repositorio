/*let getnombre = async() => {
    return 'daniel';
}

console.log(getnombre());
*/

let getnombre = () => {
    return new Promise((resolve, reject) => {
        resolve('Daniel');
    });

}