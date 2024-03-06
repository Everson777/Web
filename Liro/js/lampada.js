//dom

const Lampada = document.querySelector('#Lampada')
const bt01 = document.querySelector('#btligar')
const bt02 = document.querySelector('#btdesligar')

//Evento
bt01.addEventListener('click',Ligar)
bt02.addEventListener('click',Desligar)
Lampada.addEventListener('dblclick',quebrar)
//Função

function Ligar(){
Lampada.src = 'imagen/acesa.gif'
}
function Desligar(){
Lampada.src = 'imagen/apagada.gif'

}
function quebrar(){
Lampada.src = 'imagen/quebrada.jpg'

}