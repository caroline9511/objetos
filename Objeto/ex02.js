const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // será: "juca, 3, SDR"
console.log(gato) // será: "juba, 3, SDR"
console.log(tartaruga) // "Jubo, 3, SDR" 

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? * ele copia o objeto anterior.