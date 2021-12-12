$("body").fadeIn(800)



$("#programa").on("click",(e)=>{
    $.getJSON("./ejercicios.json",(respuesta, status)=>{
        if(status==="success"){
            respuesta.forEach((contenidos) => {
                $(".container-fluid").appendChild(`<li>${contenidos.nivel}-${contenidos.contenido}-${contenidos.variables}</li>`);
            });
        }
    })
})


problemasResueltos = []

const numeroDeIntentos = []

let nota = problemasResueltos.length

function F2(){ $("#continuar").one("click",function(){
    window.location.href= "./nivel2Ejercicio2.html"
})}


function FINAL(){ $("#continuar").one("click",function(){
    window.location.href= "./FINALIZACIÓN.html"
})}

function PROBLEMA(A,B,C,F,G,H,I){
    this.A = A.value
    this.B = B.value
    this.C = C.value
    this.G = G.value
    this.H = H.value
    this.I = I.value
    //declaración de variables, características y ubicación
    let enunciado= document.createElement("p")
    enunciado.innerHTML = `${A}x+(${B})y=${C} y ${G}x+(${H})y=${I}`
    document.getElementById("2do").appendChild(enunciado)
    enunciado.setAttribute("id", "enunciado")
    
    let continuar = document.createElement("button")

    var variableX = document.createElement("input")
        variableX.setAttribute("id", "x")
        variableX.type= "number"
        variableX.placeholder="Acá va la X"
        document.getElementById("3ro").appendChild(variableX)
    
        let variableY = document.createElement("input")
        variableY.setAttribute("id", "y")
        variableY.type= "number"
        variableY.placeholder="Acá va la Y"
        document.getElementById("3ro").appendChild(variableY)
    
        let resultado = document.createElement("button")
        resultado.setAttribute("id", "resultado")
        resultado.innerHTML="RESULTADO"
        document.getElementById("4to").appendChild(resultado) 

    //creación de la función algebraica con las variables (inputs) ya creadas
    let probando = document.getElementById("resultado")
    probando.addEventListener("click", calculo1)
    function calculo1(){

         //if...else de la función creada
         if(`${A*variableX.value + (B*variableY.value)}` != `${C}`){
            let Error = document.createElement("p")
            Error.innerHTML = `Pensá bien, ya que la primera ecuación te dio ${(A*variableX.value) + (B*variableY.value)} pero el resultado debe dar ${C} y la segunda ecuación te dio ${G*variableX.value + (H*variableY.value)} pero debe darte ${I}`
            document.getElementById("hola").appendChild(Error)
            Error.setAttribute("id", "Error")
            numeroDeIntentos.push(Error)
            const numeroDeIntentosEnJson = JSON.stringify(numeroDeIntentos)
            localStorage.setItem("Número de intentos", numeroDeIntentos)
        }
        
        else{
            //Creación en el cuadrante 2
            let input1 = document.getElementById("nombramiento")
            let Acierto = document.createElement("p")
            Acierto.innerHTML= `¡EXCELENTE TU PLANTEO, ${JSON.parse(localStorage.getItem("jugador"))}!`
            document.getElementById("hola").appendChild(Acierto)
            let continuar = document.createElement("button")
            continuar.innerHTML = "¡Continuemos!"
            document.getElementById("hola").appendChild(continuar)
            continuar.setAttribute("id","continuar")
            F()
            
            
            
            problemasResueltos.push(Acierto)
            const numeroDeProblemasResueltosEnJson = JSON.stringify(problemasResueltos.length)
            localStorage.setItem("Problemas ya resueltos", numeroDeProblemasResueltosEnJson)
            //Calificación por terminar el bloque
            if(nota==3){
                //calificación
                let notaFinal = document.createElement("p")
                notaFinal.innerHTML = `FINALIZASTE ESTA PRIMERA SECCIÓN CON UNA NOTA DE ${(6+(4/(numeroDeIntentos.length+1))*4)}`
                document.getElementById("hola").appendChild(notaFinal)
                const notaBloque1 = JSON.stringify((6+(4/(numeroDeIntentos.length+1))*4))
                localStorage.setItem("Calificación del bloque 1", notaBloque1)
                //acceso al nivel 2
                let pasarAlSegundoNivel = document.createElement("button")
                pasarAlSegundoNivel.innerHTML = "NIVEL 2"
                document.getElementById("hola").appendChild(pasarAlSegundoNivel)
                pasarAlSegundoNivel.addEventListener("click",redireccion)
                function redireccion(){
                    window.location.href= "./nivel2.html"
                }
            }         
            numeroDeIntentos.push(Acierto)


        }

    }

}

$("#ejercicio1").one("click", function(){
    PROBLEMA(2,1,5,F2,-3,6,0) 
})

$("#ejercicio2").one("click", function(){
    PROBLEMA(5,-2,4,FINAL,3,4,18) 
})

const datosNombre = JSON.parse(localStorage.getItem("jugador"))
let tomarNombre = document.createElement("p")
tomarNombre.innerHTML = datosNombre
document.getElementById("recuperandoMemoria").appendChild(tomarNombre)

