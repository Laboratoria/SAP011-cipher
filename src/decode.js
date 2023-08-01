import cipher from './cipher.js'

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