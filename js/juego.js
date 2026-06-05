let turno = turnoAleatorio()
impTablero() 

function turnoAleatorio(){
    let turno = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    if(turno == 1 ){
        return turno = 'X'
    }else{
        return turno = 'O'
    }
}

function jugada(id_Celda){

    let celda = document.getElementById(id_Celda)
    if (celda.innerText == ''){
        celda.innerText = turno
        if(turno == 'X'){
            jugador1.push(id_Celda)

        }else{
            jugador2.push(id_Celda)

        }
        turno = cambiaTurno(turno)
    }

}
function impTablero(){
    let tablero = document.getElementById('contenedor')
    for (i=1; i<=9;i++){
        tablero.innerHTML += `<div id="${i}" class="celda" onclick="{jugada('${i}')}"></div>`
    }
}

function cambiaTurno(turno){
    if(turno == 'X'){
        return turno = 'O'
    }else{
        return turno = 'X'
    }
}

let jugador1 = []
let jugador2 = []
function ganador(){
    const jugadasGanadoras = [[1,2,3],
                              [4,5,6],
                              [7,8,9],
                              [1,4,7],
                              [2,5,8],
                              [3,6,9],
                              [1,5,9],
                              [3,5,7]]                                              
                            
}