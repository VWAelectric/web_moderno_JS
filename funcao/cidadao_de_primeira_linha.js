// Função em JS é First_Class Object (Citizens)
//Higher-order function

// criar de forma literal

function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a , b) {return a + b }, fun1, fun2]
console.log(array[0] (2, 3))

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro

function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função

function soma (a, b) {
    return function(c) {
       console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)

/**
 * O que vimos nessa aula foi: 
   * Podemos criar funções de forma literal, que é o padrão.
   * Podemos armazenar uma função em uma variável, pode ser uma variável do tipo let, const ou var.
   * Podemos armazenar uma função dentro de um array.
   * Podemos atribuir uma função para um atributo de um objeto. 
   * Podemos passar uma função como parâmetro para outra função.
   * Podemos criar uma função e retornar ela dentro de uma outra função, você não obrigatoriamente precisa retornar.
 */