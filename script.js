function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 5 && hora < 12)  {
    img.src = 'midia/manhacortada.png'
    document.body.style.background = '#a7dcfd'
} 
else if (hora >= 12 && hora < 18) {
    img.src = 'midia/tardecortada.png'
    document.body.style.background = '#ffe6a8'
} 
else {
    img.src = 'midia/noitecortada.png'
    document.body.style.background = '#022a5a'
}

}
