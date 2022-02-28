const { faker } = require('@faker-js/faker');

const fs = require('fs');


const randomNames = Array(1000).fill().map(() => faker.name.firstName()).join('\n');


fs.writeFileSync('random_names.txt', randomNames, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

