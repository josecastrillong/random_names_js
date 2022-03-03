const { faker } = require('@faker-js/faker');

const fs = require('fs');
const nombres = faker.name.firstName()
console.log(nombres)

const randomNames = Array(1000).fill().map(() => faker.name.firstName()).join('\n');
console.log(randomNames)

try {
    fs.writeFileSync('random_names.txt', randomNames)
        return console.log('Archivo creado con exito!');
    } catch(error) {
        console.log("No se pudo crear el archivo");
    };

