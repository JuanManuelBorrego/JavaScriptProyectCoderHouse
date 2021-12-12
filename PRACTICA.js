function respuestaClick() {
    let input1 = $("#nombramiento")
    $("#hola").append(`<div>BIENVENIDO/A ${input1.val()}</div>`)    
    const jugador = JSON.stringify(input1.val())
    localStorage.setItem("jugador", jugador)
}


problemasResueltos = []

const numeroDeIntentos = []

let nota = problemasResueltos.length
const notaEnJson = JSON.stringify(nota)
localStorage.setItem("calificacion", notaEnJson)


function siguiente(){
    window.location.href= "./ejercicio3.html"
}

function F2(){ $("#continuar").one("click",function(){
    window.location.href= "./ejercicio2.html"
})}

function F3(){
    $("#continuar").one("click",function(){
        window.location.href= "./ejercicio3.html"
    })
}

function F4(){
    $("#continuar").one("click",function(){
        window.location.href= "./ejercicio4.html"
    })
}
   
function F5(){
    $("#continuar").one("click", function(){
        window.location.href="./nivel2.html"
    })
}

//PROBLEMA PRINCIPAL

    function PROBLEMA(A,B,C,F){
    this.A = A.value
    this.B = B.value
    this.C = C.value
    //declaración de variables, características y ubicación
    let enunciado= document.createElement("p")
    enunciado.innerHTML = `${A}x+${B}y=${C}`
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
         if(`${A*variableX.value + (B*variableY.value)}` !=`${C}`){
            let Error = document.createElement("p")
            Error.innerHTML = `Pensá bien, ya que te dio ${(A*variableX.value) + (B*variableY.value)} pero el resultado debe dar ${C}`
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







//EVENTOS
{
$("#confirmar").on("click", function(){
    respuestaClick()
})
}

{
$("#ejercicio1").one("click",function(){
    PROBLEMA(4,7,26,F2)
})
}


$("#ejercicio2").one("click",function(){
    PROBLEMA(8,3,27,F3)
})

$("#ejercicio3").one("click", function(){
    PROBLEMA(20,3,101,F4)
})

$("#ejercicio4").one("click", function(){
    PROBLEMA(15,17,62,F5)
})

$("body").fadeIn(800)

const datosNombre = JSON.parse(localStorage.getItem("jugador"))


