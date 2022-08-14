const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {name: 'nome', message: 'Qual é o seu nome?'},
    {name: 'idade', message: 'Qual é a sua idade?'}
]).then((respostas) => {
    console.log(chalk.black.bgYellow(`Seu nome é ${respostas.nome} e você tem ${respostas.idade} anos!`))
}).catch((err) => {
    console.log(err)
})