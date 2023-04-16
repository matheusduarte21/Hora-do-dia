
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    

    if (hora >= 0 && hora < 12){
       img.src ='manha.jpg'
       document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 0 && hora <= 18) { 
        img.src ='tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#515154'
    }

    
}
