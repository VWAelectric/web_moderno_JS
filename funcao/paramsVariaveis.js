function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] 
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))



//Arguments é um array interno de uma função que tem todos os argumentos que foram passados.

/**
 * Toda função tem esse array disponível, quando nenhum parâmetro é passado esse array está vazio,
 * você tem a possibilidade de pegar todos os parâmetros que foram passados e a partir daí chamar
 * uma função e fazer qualquer  tipo de operação, inclusive o que foi feito no exemplo acima, que 
 * foi pegar cada um dos parâmetros e somar.
 * Obs: nos três primeiros os parâmetros se comportaram normalmente, mas nos dois últimos temos que 
 * tomar cuidado que o JS não vai nos restringir em usar strings, mudando o comportamento, no caso 
 * do quarto exemplo ele somou os dois números e concatenou a string  e no exemplo 5 simplismente 
 * contatenou as strings.
 */