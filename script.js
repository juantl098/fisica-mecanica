var valor=document.getElementById("valor");
//detecta cuando se escribe el numero
//llamo la funcion a convertir
valor.addEventListener('keyup',convertir);
txtResultado=document.getElementById("resultado");
unidad1=document.getElementById("unidad1");
//detecta cuando se selecciona una unidad
unidad1.addEventListener('change',convertir);
unidad2=document.getElementById("unidad2");
unidad2.addEventListener('change',convertir);
//variable para calcular el resultado
var resultado;
//funcion para calcular
function convertir(){
    //si no introduce nada 
    if(valor.value==''){
        return;
    }
    //convierto el input a numerico
    numero=valor.value;
    numero=parseFloat(numero);
    if(unidad1.value=="kilometro"&& unidad2.value=="kilometro"){
        resultado= numero * 1;
        txtResultado.innerHTML=numero+" kilometro/s equivalen a "+resultado+" kilometro/s";
    }
    if(unidad1.value=="kilometro"&& unidad2.value=="Metro"){
        resultado= numero * 1000;
        txtResultado.innerHTML=numero+" kilometro/s equivalen a "+resultado+" Metro/s";
    }
    if(unidad1.value=="kilometro"&& unidad2.value=="centimetro"){
        resultado= numero * 100000;
        txtResultado.innerHTML=numero+" kilometro/s equivalen a "+resultado+" Centimetro/s";
    }
    if(unidad1.value=="Metro"&& unidad2.value=="kilometro"){
        resultado= numero / 1000;
        txtResultado.innerHTML=numero+" Metro/s equivalen a "+resultado+" kilometro/s";
    }
    if(unidad1.value=="Metro"&& unidad2.value=="Metro"){
        resultado= numero * 1;
        txtResultado.innerHTML=numero+" Metro/s equivalen a "+resultado+" Metro/s";
    }
    if(unidad1.value=="Metro"&& unidad2.value=="centimetro"){
        resultado= numero * 100;
        txtResultado.innerHTML=numero+" Metro/s equivalen a "+resultado+" Centimetro/s";
    }
    if(unidad1.value=="centimetro"&& unidad2.value=="kilometro"){
        resultado= numero / 100000;
        txtResultado.innerHTML=numero+" Centimetro/s equivalen a "+resultado+" kilometro/s";
    }
    if(unidad1.value=="centimetro"&& unidad2.value=="Metro"){
        resultado= numero /100;
        txtResultado.innerHTML=numero+" Centimetro/s equivalen a "+resultado+" Metro/s";
    }
    if(unidad1.value=="centimetro"&& unidad2.value=="centimetro"){
        resultado= numero * 1;
        txtResultado.innerHTML=numero+" Centimetro/s equivalen a "+resultado+" Centimetro/s";
    }
    if(unidad1.value=="m/s"&& unidad2.value=="m/s"){
        resultado= numero * 1;
        txtResultado.innerHTML=numero+" m/s equivalen a "+resultado+" m/s";
    }
    if(unidad1.value=="k/h"&& unidad2.value=="k/h"){
        resultado= numero * 1;
        txtResultado.innerHTML=numero+" k/h equivalen a "+resultado+" k/h";
    }
    if(unidad1.value=="k/h"&& unidad2.value=="m/s"){
        resultado= numero * 5/18;
        txtResultado.innerHTML=numero+" k/h equivalen a "+resultado+" m/s";
    }
    if(unidad1.value=="m/s"&& unidad2.value=="k/h"){
        resultado= numero * 18/5;
        txtResultado.innerHTML=numero+" M/s equivalen a "+resultado+" k/h";
    }
    if(unidad1.value=="m/h"&& unidad2.value=="m/s"){
        resultado= numero * (1609.34/1)*(1/3600);
        txtResultado.innerHTML=numero+" M/h equivalen a "+resultado+" M/s";
    }
    if(unidad1.value=="m/h"&& unidad2.value=="k/h"){
        resultado=  1.609344 *numero;
        txtResultado.innerHTML=numero+"  M/h equivalen a "+resultado+" k/h";
    } 
}