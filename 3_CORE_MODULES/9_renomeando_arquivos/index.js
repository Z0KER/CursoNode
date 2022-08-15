const fs = require('fs')

const arqAntigo = 'arquivo.txt', arqNovo = 'novo.txt'

fs.rename(arqAntigo, arqNovo, (err) => {
    if(err) {
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})