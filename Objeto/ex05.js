/*2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`*/

    const pessoa = {
	nome: "Carol", 
  idade: 30, 
	profissao: "montador"
}

function minhaFuncao(pessoa) {
    const resultado1 = []
  console.log(pessoa.nome, '\n'(pessoa.nome.lenght), '\n'(pessoa.idade), '\n'(pessoa.profissao), '\n' (pessoa.profissao.lenght) )

  return resultado
}

console.log(minhaFuncao(pessoa))
// Retorno: ["Carol", 5, 23, "Instrutor", 9]