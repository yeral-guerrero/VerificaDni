const divisor = 23;
var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

var nombre01=document.getElementById("nombre");
var dni= document.getElementById("dni_numero");
var letra=document.getElementById("dni_letra");

var resto = Number(Number(dni.value) % Number(divisor));

var dniprobable = String(Number(dni.value) + letra.value);


var dnicorrect = String(Number(dni.value) + letras[resto]);

var btn_submit = document.getElementById("verifica")

btn_submit.addEventListener("click", function () {
   
    if(dniprobable===dnicorrect)
        alert("DNI Correcto Felicidades")
    else
        alert("DNI Incorrecto...Revise por favor!")
});

