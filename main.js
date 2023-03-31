var mouse="";
var cor="black";
var raio=9;
var largura=5;
var canvas=document.getElementById("canvas");
var contexto=canvas.getContext("2d");

canvas.addEventListener("mousedown", mouse_para_baixo);
function mouse_para_baixo(){
    cor=document.getElementById("cor").value;
    raio=document.getElementById("raio").value;
    largura=document.getElementById("largura").value;
    mouse="mouse para baixo";    
}

canvas.addEventListener("mouseup", mouse_para_cima);
function mouse_para_cima(){
    mouse="mouse para cima";    
}

canvas.addEventListener("mouseleave", mouse_sai);
function mouse_sai(){
    mouse="mouse sai";    
}

canvas.addEventListener("mousemove", mouse_move);
function mouse_move(evento){
    var pos_x=evento.clientX - canvas.offsetLeft;
    var pos_y=evento.clientY - canvas.offsetTop;
    if(mouse == "mouse para baixo"){
        contexto.beginPath();
        contexto.strokeStyle=cor;
        contexto.lineWidth=largura;
        contexto.arc(pos_x, pos_y, raio, 0, 360);
        contexto.stroke();
    }  
}

function limpar(){
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);
}