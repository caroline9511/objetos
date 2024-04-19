const pessoa = {
    nome: 'Carol',
    idade: 30,
    generoMusical:'Todas, menos música clássica.'
}
function novoObjeto(pessoa) {
    const pessoaNova = {
        ...pessoa,
        comidaFavorita:['pizza'],
        melhorAmigo: {
     nome:['Diulie'],
     idade: 28,
    }
}
console.log(`o nome da pessoa é ${pessoaNova.nome}, e sua comida favorita é ${pessoaNova.comidaFavorita},sua melhor amiga é sua ${pessoaNova.melhorAmigo.nome}, e tem ${pessoaNova.melhorAmigo.idade} anos`)

}

novoObjeto(pessoa)
