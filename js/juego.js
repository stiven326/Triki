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