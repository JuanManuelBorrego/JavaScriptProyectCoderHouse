notasParciales = []

const numeroDeIntentos = []

function respuestaClick() {
    let input1 = $("#nombramiento")
    $("#hola").append(`<div>BIENVENIDO/A ${input1.val()}</div>`)    
    const jugador = JSON.stringify(input1.val())
    localStorage.setItem("jugador", jugador)
}


function F2(){ $("#continuar").one("click",function(){
    window.location.href= "./nivel2Ejercicio2.html"
})}

function F3(){
    $("#continuar").one("click",function(){
        window.location.href= "./FINALIZACIÓN.html"
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
         if((`${A*variableX.value + (B*variableY.value)}` != `${C}`) && (`${(G*variableX.value) + (B*variableY.value)}`!==`${I}`)){
            let Error = document.createElement("p")
            Error.innerHTML = `Pensá bien, ya que la primera ecuación te dio ${(A*variableX.value) + (B*variableY.value)} pero el resultado debe dar ${C} y la segunda ecuación te dio ${G*variableX.value + (H*variableY.value)} pero debe darte ${I}`
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
                localStorage.setItem("Calificación 5", nota1)
            }
            else if(F==2){
                F3()
                const nota2 = JSON.stringify((6+(1/(numeroDeIntentos.length+1))*4))
                localStorage.setItem("Calificación 6", nota2)
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
$("#ejercicio1").one("click",function(){
    PROBLEMA(2,1,5,1,-3,6,0)
})
}


$("#ejercicio2").one("click",function(){
    PROBLEMA(5,-2,4,2,3,4,18)
})

$("body").fadeIn(800)

const datosNombre = JSON.parse(localStorage.getItem("jugador"))





