import cipher from './cipher.js'

//Passando valores de um campo input para outro input

//Cifrar ids: conteudo, cifrar, submit, number

const bottonSubmit = document.querySelector("#submit")

bottonSubmit.addEventListener("click", function (e) {

  e.preventDefault(); //paralisa o envio do formulário

  const conteudo = document.querySelector("#conteudo")
  const cifrar = document.querySelector("#cifrar")
  const deslocamento = document.querySelector("#number")
  const mensagemCodificada = cipher.encode(Number(deslocamento.value), conteudo.value.toUpperCase())

  cifrar.value = mensagemCodificada
})






