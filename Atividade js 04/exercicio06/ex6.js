// . Crie o seguinte array com os valores let idades [ 16, 48, 23, 22, 45, 8,
//     12]
//     a. Utilize o método filter para selecionar apenas as idades que são
//     maiores ou igual a 18;
//     b. Agora forEach para passar uma mensagem informando a idade
//     do usuário. (Sua idade é: ${idade}).




// let idade = [ 12, 35, 76 , 89]
// let tomate = idade.filter((idade) => {
//     return idade > 36
// })
// console.log(idade);
// console.log(tomate);


let idades =  [ 16, 48, 23, 22, 45, 8, 12]

let idade = idades.filter((idades) => {
    return idades > 18
})

idade.forEach((idade) => {
console.log(`Sua idade é: ${idade}`);
console.log(`---------------`);
})