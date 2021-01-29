function pag4() {
    var a = document.getElementById('val-1').value
    if (a == 'JAMÁS' || a == "jamás") {
        return true
    } else {
        alert('¡Nooooooo! Le has hecho daño a una mujer')
        return false
    }
}