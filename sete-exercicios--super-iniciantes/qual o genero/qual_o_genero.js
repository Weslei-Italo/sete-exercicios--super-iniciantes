/*function verificar() {
    var  fsex = document.getElementsByName('radsex')
    var genero = " "
    if(fsex[0].checked) {
        genero = 'Ele'
    } else if (fsex[1].checked) {
        genero = 'Ela'
    }
    alert(`Desejo felicidades a ${genero}`)
}

*/

function verificar() {
    var input = document.querySelector('input:checked')
    var value = input.value;

    if(value == "masculino") {
        var mensagem ="Hoje é aniversário de kira.Dê Parabêns a ele."
    }else {
        var mensagem = "Hoje é aniversário de Kira.Dê Parabêns a ela."
    }
    alert(mensagem);
}

//var botão = document.querySelector("button");
//botão.onclick = gerarMensagem; //sem isso funciona legal também 