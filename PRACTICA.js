
function respuestaClick() {
    let input1 = document.getElementById("nombramiento")
    let inicio = document.createElement("div")
    inicio.innerHTML= `BIENVENIDO/A ${input1.value}`
    document.getElementById("hola").appendChild(inicio)
    const jugador = JSON.stringify(input1.value)
    localStorage.setItem("jugador", jugador)
}


problemasResueltos = []

const numeroDeIntentos = []

let nota = problemasResueltos.length

//PROBLEMA1

    function PROBLEMA1(){
    //declaración de variables, características y ubicación
    let enunciado= document.createElement("p")
    enunciado.innerHTML = "4x+7y=26"
    document.getElementById("2do").appendChild(enunciado)
    enunciado.setAttribute("id", "enunciado")
    
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
         if(4*(variableX.value) + 7*(variableY.value)!= 26){
            let Error = document.createElement("p")
            Error.innerHTML = `Pensá bien, ya que te dio ${(4*variableX.value) + (7*variableY.value)} pero el resultado debe dar 26`
            document.getElementById("hola").appendChild(Error)
            Error.setAttribute("id", "Error")
            numeroDeIntentos.push(Error)
        }

        else{
            //Creación en el cuadrante 2
            let input1 = document.getElementById("nombramiento")
            let Acierto = document.createElement("p")
            Acierto.innerHTML= `¡EXCELENTE TU PLANTEO, ${input1.value}! YA RESOLVISTE ${problemasResueltos.length+1} PROBLEMA/S, LO CUAL TOTALIZA EL ${(((problemasResueltos.length+1)/4)*100)}% DE ESTE BLOQUE DE ECUACIONES`
            document.getElementById("hola").appendChild(Acierto)   
            //Calificación por terminar el bloque
            let nota = problemasResueltos.length
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

            //eliminaciones totales en el cuadrante 1
            let eliminarX = document.getElementById("x")
            let eliminarY = document.getElementById("y")
            let eliminarEnunciado = document.getElementById("enunciado")
            let eliminarResultado = document.getElementById("resultado")
            let eliminarBoton1 = document.getElementById("ejercicio1")
            
            eliminarX.parentNode.removeChild(eliminarX)
            eliminarY.parentNode.removeChild(eliminarY)
            eliminarEnunciado.parentNode.removeChild(eliminarEnunciado)
            eliminarResultado.parentNode.removeChild(eliminarResultado)
            eliminarBoton1.parentNode.removeChild(eliminarBoton1)
            problemasResueltos.push(PROBLEMA1)
            numeroDeIntentos.push(Acierto)


        }

    }

}


//PROBLEMA2

function PROBLEMA2(){
    //declaración de variables, características y ubicación
    let enunciado= document.createElement("p")
    enunciado.innerHTML = "8x+3y=27"
    document.getElementById("2do").appendChild(enunciado)
    enunciado.setAttribute("id", "enunciado")
    
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
         if(8*(variableX.value) + 3*(variableY.value)!= 27){
            let Error = document.createElement("p")
            Error.innerHTML = `Pensá bien, ya que te dio ${(8*variableX.value) + (3*variableY.value)} pero el resultado debe dar 27`
            document.getElementById("hola").appendChild(Error)
            Error.setAttribute("class", "Error") 
            numeroDeIntentos.push(Error)
        }
        else{
            //Creación en el cuadrante 2
            let input1 = document.getElementById("nombramiento")
            let Acierto = document.createElement("p")
            Acierto.innerHTML= `¡EXCELENTE TU PLANTEO, ${input1.value}! YA RESOLVISTE ${problemasResueltos.length+1} PROBLEMA/S, LO CUAL TOTALIZA EL ${(((problemasResueltos.length+1)/4)*100)}% DE ESTE BLOQUE DE ECUACIONES`
            document.getElementById("hola").appendChild(Acierto)
            //Calificación por terminar el bloque
            let nota = problemasResueltos.length
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

            //eliminaciones totales en el cuadrante 1
            let eliminarX = document.getElementById("x")
            let eliminarY = document.getElementById("y")
            let eliminarEnunciado = document.getElementById("enunciado")
            let eliminarResultado = document.getElementById("resultado")
            let eliminarBoton2 = document.getElementById("ejercicio2")


            eliminarX.parentNode.removeChild(eliminarX)
            eliminarY.parentNode.removeChild(eliminarY)
            eliminarEnunciado.parentNode.removeChild(eliminarEnunciado)
            eliminarResultado.parentNode.removeChild(eliminarResultado)
            eliminarBoton2.parentNode.removeChild(eliminarBoton2)
            problemasResueltos.push(PROBLEMA2)
            numeroDeIntentos.push(Acierto)
        }

    }

}




//PROBLEMA3

function PROBLEMA3(){
    //declaración de variables, características y ubicación
    let enunciado= document.createElement("p")
    enunciado.innerHTML = "20x+3y=101"
    document.getElementById("2do").appendChild(enunciado)
    enunciado.setAttribute("id", "enunciado")
    
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
         if(20*(variableX.value) + 3*(variableY.value)!= 101){
            let Error = document.createElement("p")
            Error.innerHTML = `Pensá bien, ya que te dio ${(20*variableX.value) + (3*variableY.value)} pero el resultado debe dar 101`
            document.getElementById("hola").appendChild(Error)
            Error.setAttribute("id", "Error")
            numeroDeIntentos.push(Error)
        }

        else{
            //Creación en el cuadrante 2
            let input1 = document.getElementById("nombramiento")
            let Acierto = document.createElement("p")
            Acierto.innerHTML= `¡EXCELENTE TU PLANTEO, ${input1.value}! YA RESOLVISTE ${problemasResueltos.length+1} PROBLEMA/S, LO CUAL TOTALIZA EL ${(((problemasResueltos.length+1)/4)*100)}% DE ESTE BLOQUE DE ECUACIONES`
            document.getElementById("hola").appendChild(Acierto)
            //Calificación por terminar el bloque
             let nota = problemasResueltos.length
             if(nota==3){
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
            //eliminaciones totales en el cuadrante 1
            let eliminarX = document.getElementById("x")
            let eliminarY = document.getElementById("y")
            let eliminarEnunciado = document.getElementById("enunciado")
            let eliminarResultado = document.getElementById("resultado")
            let eliminarBoton3 = document.getElementById("ejercicio3")
            
            eliminarX.parentNode.removeChild(eliminarX)
            eliminarY.parentNode.removeChild(eliminarY)
            eliminarEnunciado.parentNode.removeChild(eliminarEnunciado)
            eliminarResultado.parentNode.removeChild(eliminarResultado)
            eliminarBoton3.parentNode.removeChild(eliminarBoton3)
            problemasResueltos.push(PROBLEMA3)
            numeroDeIntentos.push(Acierto)


        }

    }

}




//PROBLEMA4

function PROBLEMA4(){
    //declaración de variables, características y ubicación
    let enunciado= document.createElement("p")
    enunciado.innerHTML = "15x+43y=88"
    document.getElementById("2do").appendChild(enunciado)
    enunciado.setAttribute("id", "enunciado")
    
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

         //ESTRUCTURA IF...ELSE

         if(15*(variableX.value) + 43*(variableY.value)!= 88){
            let Error = document.createElement("p")
            Error.innerHTML = `Pensá bien, ya que te dio ${(15*variableX.value) + (43*variableY.value)} pero el resultado debe dar 88`
            document.getElementById("hola").appendChild(Error)
            numeroDeIntentos.push(Error)
            
        }

        else{
            //CREACIÓN EN EL CUADRANTE 2
            //Felicitaciones por el ejercicio resuelto
            let input1 = document.getElementById("nombramiento")
            let Acierto = document.createElement("p")
            Acierto.innerHTML= `¡EXCELENTE TU PLANTEO, ${input1.value}! YA RESOLVISTE ${problemasResueltos.length+1} PROBLEMA/S, LO CUAL TOTALIZA EL ${(((problemasResueltos.length+1)/4)*100)}% DE ESTE BLOQUE DE ECUACIONES`
            document.getElementById("hola").appendChild(Acierto)
            //Calificación por terminar el bloque
            let nota = problemasResueltos.length
            if(nota==3){
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

            //ELIMINACIONES EN EL CUADRANTE 1
            let eliminarX = document.getElementById("x")
            let eliminarY = document.getElementById("y")
            let eliminarEnunciado = document.getElementById("enunciado")
            let eliminarResultado = document.getElementById("resultado")
            let eliminarBoton4 = document.getElementById("ejercicio4")
            
            eliminarX.parentNode.removeChild(eliminarX)
            eliminarY.parentNode.removeChild(eliminarY)
            eliminarEnunciado.parentNode.removeChild(eliminarEnunciado)
            eliminarResultado.parentNode.removeChild(eliminarResultado)
            eliminarBoton4.parentNode.removeChild(eliminarBoton4)

            //PUSHEOS A LOS ARRAYS
            problemasResueltos.push(PROBLEMA4)
            numeroDeIntentos.push(Acierto)
        }

    }
}


//EVENTOS

let nombre = document.getElementById("confirmar")
nombre.addEventListener("click", respuestaClick)

let problema1 = document.getElementById("ejercicio1")
problema1.addEventListener("click", PROBLEMA1)

let Problema2 = document.getElementById("ejercicio2")
Problema2.addEventListener("click", PROBLEMA2)

let Problema3 = document.getElementById("ejercicio3")
Problema3.addEventListener("click", PROBLEMA3)

let Problema4 = document.getElementById("ejercicio4")
Problema4.addEventListener("click", PROBLEMA4)






