function segundaPotencia(){
    var cx1= window.document.querySelector('input#num1')
    var res = window.document.getElementById('res')
    var n1 = Number(cx1.value)
    var s = n1 * n1
    //res.innerHTML = `O quadrado de ${n1} é <strong> ${s} </strong> `
    alert(`O quadrado de ${n1} é ${s} `);
}