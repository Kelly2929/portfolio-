const fs = require('fs');
const pathToFile = 'C:\\Users\\Laura\\Documents\\Kelly\\portfolio\\bootcamp2\\week12\\ex3\\Hello World.txt';
readFile(pathToFile, (err, data) => { /* Your callback code here */ });

function readFile(filePath, callback) {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}

function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

module.exports = { readFile, writeFile };
