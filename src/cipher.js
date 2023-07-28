//dentro da constante cipher criar objeto encode e decode
const cipher = {
  encode: function (deslocamento, conteudo) {
    let textoCodificado = ""
    for (let i = 0; i < conteudo.length; i++) {
      const codigoASC = conteudo.charCodeAt(i);
      // Verifica se o caractere é uma letra maiúscula (códigos ASCII 65 a 90).
      if (codigoASC >= 65 && codigoASC <= 90) {
        //Aplica o deslocamento para codificar o caractere.
        const codigoCodificado = (codigoASC - 65 + deslocamento) % 26 + 65
        //Converte o código ASCII de volta para o caractere correspondente.
        const caractereCodificado = String.fromCharCode(codigoCodificado)
        // Adiciona o caractere codificado na string final.
        textoCodificado += caractereCodificado 
      } else {
        // Caso o caractere não seja uma letra maiúscula, mantém o caractere inalterado na string final.
        textoCodificado += conteudo[i] 
        //colocar um alert
      }
    }
    return textoCodificado // Retorno da string final codificada.
  }, 
  decode: function (deslocDecode, message) {
    let textoDecodificado = ""
    for (let i = 0; i < message.length; i++) {
      const ascCodigo = message.charCodeAt(i);

      if (ascCodigo >= 65 && ascCodigo <= 90) {
        // Aplica o deslocamento negativo para decodificar o caractere.
        const codigoDecodificado = (ascCodigo + 65 + deslocDecode) % 26 + 65
        const caractereDecodificado = String.fromCharCode(codigoDecodificado)
        // Adiciona o caractere decodificado na string final.
        textoDecodificado += caractereDecodificado
      }else{
        textoDecodificado += message[i]
        //colocar um alert
      }
    }
    return textoDecodificado // Retorno a string final decodificada.
  }
};  
export default cipher;

