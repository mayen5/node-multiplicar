// requireds
const fs = require('fs');
const { resolve } = require('path');
// const fs = require('express');
// const fs = require('./fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un número`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor introducido ${limite} no es un número`);
        return;
    }

    console.log(`=====================================`.cyan);
    console.log(`============Tabla del ${base}==============`.blue);
    console.log(`=====================================`.cyan);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }
    console.log(`=====================================`.cyan);
    console.log(`=====================================`.blue);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}