
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs')

console.clear();

//forma normal
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=')




//forma avanzada utilizando libreria yargs

crearArchivo(argv.base, argv.l, argv.h)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));


