function pag3() {
    var a = document.getElementById('val-1').value
    if (a == 'monke') {
        return true
    } else {
        alert('¡Inténtalo de nuevo Crack!')
        return false
    }
}

function audio() {
    var audio = document.getElementById("myaudio");
    audio.volume = 0.2;
}

function playAudio() {
    var boton = document.getElementById("myAudio");
    boton.play();

}