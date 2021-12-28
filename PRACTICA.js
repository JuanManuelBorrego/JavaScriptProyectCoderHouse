
notasParciales = []

const numeroDeIntentos = []

function respuestaClick() {
    let input1 = $("#nombramiento")
    $("#hola").append(`<div>BIENVENIDO/A ${input1.val()}</div>`)    
    const jugador = JSON.stringify(input1.val())
    localStorage.setItem("jugador", jugador)
}


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
    this.F = F
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
        resultado.innerHTML="¿=?"
        document.getElementById("4to").appendChild(resultado) 

    //creación de la función algebraica con las variables (inputs) ya creadas
    let probando = document.getElementById("resultado")
    probando.addEventListener("click", calculo1)
    function calculo1(){
         //if...else de la función creada
         if(`${A*variableX.value + (B*variableY.value)}` !=`${C}`){
            let Error = document.createElement("p")
            Error.innerHTML = `Pensá bien, ya que te dio ${(A*variableX.value) + (B*variableY.value)} pero el resultado debe dar ${C}`
            swal ( "UFFF..." ,  Error.innerHTML ,  "error" )
            Error.setAttribute("id", "Error")
            numeroDeIntentos.push(Error)
            const numeroDeIntentosEnJson = JSON.stringify(numeroDeIntentos)
            sessionStorage.setItem("Número de intentos", numeroDeIntentos)
        }
        
        else{
            //Creación en el cuadrante 2
            let Acierto = document.createElement("p")
            Acierto.innerHTML= `¡EXCELENTE TU PLANTEO, ${JSON.parse(localStorage.getItem("jugador"))}!`
            document.getElementById("4to").appendChild(Acierto)
            let continuar = document.createElement("button")
            continuar.innerHTML = "¡Continuemos!"
            document.getElementById("6to").appendChild(continuar)
            continuar.setAttribute("id","continuar")
            let borrarBotonResultado = document.getElementById("resultado")
            borrarBotonResultado.parentNode.removeChild(borrarBotonResultado)
            if(F==1){
                F2()
                const nota1 = JSON.stringify((6+(1/(numeroDeIntentos.length+1))*4))
                localStorage.setItem("Calificación 1", nota1)
            }
            else if(F==2){
                F3()
                const nota2 = JSON.stringify((6+(1/(numeroDeIntentos.length+1))*4))
                localStorage.setItem("Calificación 2", nota2)
            }
            else if (F==3) {
                F4()
                const nota3 = JSON.stringify((6+(1/(numeroDeIntentos.length+1))*4))
                localStorage.setItem("Calificación 3", nota3)
            } 
            else if (F==4) {
                F5()
                const nota4 = JSON.stringify((6+(1/(numeroDeIntentos.length+1))*4))
                localStorage.setItem("Calificación 4", nota4)
            }
            
                //calificación
                let notaParcial = document.createElement("p")
                notaParcial.innerHTML = `OBTUVISTE UNA NOTA DE ${(6+(1/((numeroDeIntentos.length)+1))*4)}`
                document.getElementById("hola").appendChild(notaParcial)
                        
                
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
    PROBLEMA(4,7,26,1)
})
}


$("#ejercicio2").one("click",function(){
    PROBLEMA(8,3,27,2)
})

$("#ejercicio3").one("click", function(){
    PROBLEMA(20,3,101,3)
})

$("#ejercicio4").one("click", function(){
    PROBLEMA(15,17,62,4)
})

$("body").fadeIn(800)

const datosNombre = JSON.parse(localStorage.getItem("jugador"))

