import cipher from './cipher.js';

console.log(cipher);

//Passando valores de um campo input para outro input

//Cifrar ids: conteudo, cifrar, submit, number

const bottonSubmit = document.querySelector("#submit");

bottonSubmit.addEventListener("click", function (e) {

  e.preventDefault(); //paralisa o envio do formulário

  const conteudo = document.querySelector("#conteudo")
  const cifrar = document.querySelector("#cifrar")
  const deslocamento = document.querySelector("#number")
  const mensagemCodificada = cipher.encode(Number(deslocamento.value), conteudo.value.toUpperCase())

  cifrar.value = mensagemCodificada
})

// Decifrar ids: message, decifrar, send, desloc

const bottonSend = document.querySelector("#send")

bottonSend.addEventListener("click", function (e) {

  e.preventDefault() //paralisa o envio do formulário 

  const message = document.querySelector("#message")
  const decifrar = document.querySelector("#decifrar")
  const deslocDecode = document.querySelector("#desloc")
  const mensagemDecodificada = cipher.decode(Number(deslocDecode.value), message.value.toUpperCase())

  decifrar.value = mensagemDecodificada //letras minúsculas em maiúsculas
})





