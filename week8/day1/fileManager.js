

const fs = require('fs');

function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        callback(data);
    });
}

function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }

        callback();

    });

}

module.exports = { readFile, writeFile };


const { readFile, writeFile } = require('./fileManager.js');

readFile('Hello World.txt', (data) => {
    console.log("Read from 'Hello World.txt':", data);

    writeFile('Bye World.txt', "Writing to the file", () => {
        console.log("Wrote to 'Bye World.txt'");
    });
});
