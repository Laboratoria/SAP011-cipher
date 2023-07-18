import cipher from './cipher.js';

console.log(cipher);

//Passando valores de um campo input para outro input

//Cifrar

const bottonSubmit = document.querySelector("#submit");

bottonSubmit.addEventListener("click", function (e) {

    e.preventDefault(); //paralisa o envio do formulário 

    const conteudo = document.querySelector("conteudo");
    const cifrar = documento.querySelector("cifrar");

    cifrar.value = conteudo.value
})

//Decifrar

const bottonSend = document.querySelector("#send");

bottonSend.addEventListener("click", function (e) {

    e.preventDefault(); //paralisa o envio do formulário 

    const senha = document.querySelector("#senha");
    const decifrar = document.querySelector("#decifrar");

    decifrar.value = senha.value;
    //const value = senha.value;

    //console.log(value);

})