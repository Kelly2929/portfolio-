const chalk = require('chalk');

function displayColorfulMessage() {
    console.log(chalk.blue('Hello, world!') + ' ' + chalk.red('This is a colorful message.'));
}


import('chalk').then(chalk => {
    function displayColorfulMessage() {
        console.log(chalk.default.blue('Hello, world!') + ' ' + chalk.default.red('This is a colorful message.'));
    }

    displayColorfulMessage();
}).catch(error => console.error('Error importing chalk:', error));

