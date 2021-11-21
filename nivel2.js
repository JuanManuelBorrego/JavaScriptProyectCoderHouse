const datosNombre = JSON.parse(localStorage.getItem("jugador"))
let tomarNombre = document.createElement("p")
tomarNombre.innerHTML = datosNombre
document.getElementById("recuperandoMemoria").appendChild(tomarNombre) 