 //deucerto com DOM
function éDeMaior(){
var cx = window.document.querySelector('input#ida')
var res = window.document.querySelector('div#conf')
var age = Number(cx.value)
    if (age >= 1 && age<=17){ 
    //res.innerHTML = `Você tem ${age} anos.
    //Acesso negado!`
        alert(`Você tem ${age} anos
        Acesso negado!`)
    }else if (age >140){
      //  res.innerHTML = `Você tem ${age} anos.Duvido!!.
     //   Acesso negado!`
        alert(`Você tem ${age} anos.
        Duvido!!`)
    }else{                         
       // res.innerHTML =  `Você tem ${age} anos.
       // Acesso permitido!` 
        alert(`Você tem ${age} anos.
         Acesso permitido!`)
    }
}

/*
function éDeMaior(){
var cx = window.document.querySelector('input#ida')
var age = Number(cx.value)
    
    if (age >= 1 && age<=17){
    alert('Aproveite enquanto não paga boletos')

    }else {                      //Funcionou o que ele pediu
    alert('Vou pagar os boletos,rsss') 
    }
}
*/

/* if, else if, else
function éDeMaior(){
    var cx = window.document.querySelector('input#ida')
    var age = Number(cx.value)
        
        if (age >= 1 && age<=17){
        alert('Aproveite enquanto não paga boletos')
        }else if(age > 140){
            alert(`Você tem ${age}!DUVIDO!!!`)
        }else {                      //Funcionou o que ele pediu
            alert('Vou pagar os boletos,rsss') 
        }
    }
*/