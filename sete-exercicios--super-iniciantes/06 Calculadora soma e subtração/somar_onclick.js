function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    //res.innerHTML = `A soma entre${n1} e ${n2} é igual a <strong>${s}</strong>`
    alert(`A soma entre${n1} e ${n2} é igual a ${s}`)
}
function subtrair(){
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.querySelector('div#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 -  n2
    res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
    alert(`A subtração entre ${n1} e ${n2} é igual a ${s}`)
}