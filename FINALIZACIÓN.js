

let promedioFinal = document.createElement("h6")
promedioFinal.innerHTML= `<br><br><br>CONSTE EL PRESENTE CERTIFICADO PARA ACREDITAR QUE ${JSON.parse(localStorage.getItem("jugador"))}, HA COMPLETADO SUS ESTUDIOS SOBRE "SISTEMAS DE ECUACIONES LINEALES CON DOS INCÓGNITAS", OBTENIENDO UNA CALIFICACIÓN FINAL DE ${(JSON.parse(localStorage.getItem("Calificación 1"))+JSON.parse(localStorage.getItem("Calificación 2"))+JSON.parse(localStorage.getItem("Calificación 3"))+JSON.parse(localStorage.getItem("Calificación 4"))+JSON.parse(localStorage.getItem("Calificación 5"))+JSON.parse(localStorage.getItem("Calificación 6")))/6}!<br><br><br> EQUIPO DE MATEMAGICS`
document.getElementById("cuadro1").appendChild(promedioFinal)


