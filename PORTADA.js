function respuestaClick() {
    let input1 = $("#nombramiento")
    const jugador = JSON.stringify(input1.val())
    localStorage.setItem("jugador", jugador)
}


{
$("#confirmar").on("click", function(){
    respuestaClick()
    window.location.href= "./introduccion.html"
})
}