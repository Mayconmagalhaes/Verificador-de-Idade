//função de verificação ao clicar
function verificar() {
  var data = new Date() //carrega o dia definido na maquina do usuario
  var ano = data.getFullYear() //carrega o ano definido na maquina do usuario
  var fano = document.getElementById("txtano") //carrega o ID do html (texto nesse caso) para a modificação realizada segundo o codico
  var res = document.getElementById("res")
  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!") //envia um alerta em caso de inconsistencia
  } else {
    var fsex = document.getElementsByName("radsex") //carrega o nome de um elemento do html (os inouputs nesse caso) para a modificação realizada segundo o codico
    var idade = ano - Number(fano.value) //variavel que calcula o ano menos o numero inserido para resultar em idade
    var gênero = "" //variavel que calcula o gênero de acordo com a seleção do usuario
    var divPrincipal = document.createElement("div") //variavel que cria uma div no html
    var img = document.createElement("img") //variavel que cria uma tag img no html
    img.setAttribute("id", "foto") //insere os atributos da tag criada
    divPrincipal.appendChild(img) //chama a div para inserção da tag

    if (fsex[0].checked) {
      //resultados possiveis em caso de seleção do Gênero Masculino
      gênero = "Homem"
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./assets/Bebe - M.png") //Foto a ser inserida após o resultado
      } else if (idade < 25) {
        //jovem
        img.setAttribute("src", "./assets/Jovem - M.png")
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./assets/Adulto - M.png")
      } else {
        //Idoso
        img.setAttribute("src", "./assets/Idoso - M.png")
      }
    } else if (fsex[1].checked) {
      //resultados possiveis em caso de seleção do Gênero Feminino
      gênero = "Mulher"
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./assets/Bebe - F.png") //Foto a ser inserida após o resultado
      } else if (idade < 25) {
        //jovem
        img.setAttribute("src", "./assets/Jovem - F.png")
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./assets/Adulto - F.png")
      } else {
        //Idoso
        img.setAttribute("src", "./assets/Idoso - F.png")
      }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos` //Texto a ser exibido após o caculo, inserido as informações calculadas
    res.appendChild(divPrincipal) //Chama a div para haver um espaçamento entro o texto e a imagem carregada
    res.appendChild(img) //Chama a imagem para ser exibida
  }
}
