const URLGET = "http://ejercicios.json"

$("#programa").click(()=>{
    $.getJSON(URLGET,(respuesta, status)=>{
        if(status==="success"){
        console.log(respuesta.nivel)}
    })
})