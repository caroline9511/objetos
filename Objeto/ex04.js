//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

/* Exemplo de entrada
const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
 
 // Exemplo de saída
 "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"*/

 const pessoa = {
    nome:('Milly'),
    apelidos: ['fofa', 'querida', 'fedor']
    }
    function novaPessoa(Pessoa) {
        const objeto = {
        ...Pessoa,
        }
         console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
 }
 novaPessoa(pessoa)

 // Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto:

 const pessoa1 = {
    nome:('Milly'),
    apelidos: ['fofa', 'querida', 'fedor']
    }
const novoUsuario = {
    ...usuario,
apelidos:['fedor', 'dengosa', 'neguinha']
}
console.log(novoUsuario)
