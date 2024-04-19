const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])  // será impresso no console 'Matheus Nachtergaele'
console.log(filme.elenco[filme.elenco.length - 1]) // será impresso no console '"Matheus Nachtergaele", "Denise Fraga", "Virginia Cavendish"
console.log(filme.transmissoesHoje[2])// será impresso 'globo, 14h.'