// o que são array ou vetores

// como se declara um array

// let array = ['string', 1 , true];
// console.log(array);

// pode guardar varios tipos de dados

let array = ['string', 1, true, ['array1'],['array2'],['array3'],['array4']];
//pegando o primeiro valor do array
console.log(array[3]);

// MANIPILANDO O ARRAY

//forEAch() => intera um array;
//push() => add um item no final do array;
//pop() => remove item do final do array;
//shift() => remove item no início do array;
//unshift() => add item no início do array;
//indexOf() => retorna o índice de um valor;
//splice() => remove ou substitui um item pelo índice;
//slice() => retorna uma parte de um array existente;

//array.forEach(function(item, index){console.log(item, index)});

// array.push('novo item');
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift('novo item no inicio');
// console.log(array)


// console.log(array.indexOf(true));

// array.splice(0, 3);
// console.log(array);

// let novoArray = array.slice(0, 3);
// console.log(novoArray);

// OBJTOS
/*DADOS QUE POSSUEM PROPRIEDADES E VALORES QUE DEFINEM SUAS CARACTERÍSTICAS. DEVE SER DECLARADO ENTRE CHAVES "{}". 

MANIPULANDO OBJETOS

AS PROPRIEDADES DE OBJETO PODEM SER ATRIBUÍDAS Á VARIÁVEIS, FACILITANDO A MANIPULAÇÃO DO OBLETO.
CHAMAMOS ISSO DE DESESTRUTURAÇÃO.*/

let object = { string: 'string', number: 1, Boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto Interno'}}

console.log(object.Boolean);

//DESESTRUTURAÇÃO EX: 1

var string = object.string;
console.log(string);

let arrayInterno = object.array;
console.log(arrayInterno);

//EX2

var { string , Boolean, objectInterno} = object;
console.log(string , Boolean, objectInterno);