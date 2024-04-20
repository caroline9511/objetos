/*3. Resolva os passos a seguir: 
    
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`*/
    const carrinho = []
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
const frutas = {
    nome:'Abacaxi',
    disponibilidade: true,
    frutas1:{
        nome: 'Banana',
        disponibilidade: false,
    frutas2: {
        nome: 'Manga',
        disponibilidade: true,
    }
 }
}
//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
function chamarFruta(fruteira) {
    const carrinho = (frutas.lenght) 
    console.log(frutas)

    
}
//d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.
chamarFruta(carrinho)