const boton  = document.querySelectorAll('.boton');
const velocidad = document.querySelectorAll('.velocidad');
const tiempo = document.querySelectorAll('.tiempo');
const distancia = document.querySelectorAll('.distancia');
const resultado = document.querySelectorAll('.resultado');
const resultado1 = document.querySelectorAll('.resultado1');
const aceleracion1 = document.querySelectorAll('.aceleracion1');

boton[0].addEventListener('click', () => {
  let distancia = parseFloat(1/2* velocidad[0].value * Math.pow(tiempo[0].value,2)).toFixed(2);
  resultado[0].innerHTML = distancia;
  let distancia1 = parseFloat(velocidad[0].value * tiempo[0].value).toFixed(2);
 resultado1[0].innerHTML = distancia1;
});

boton[1].addEventListener('click', () => {
  let aceleracion = parseFloat(2*distancia[0].value / Math.pow(tiempo[1].value,2)).toFixed(2);
  resultado[1].innerHTML = aceleracion;
  let distancia1 = parseFloat(velocidad[1].value / tiempo[1].value).toFixed(2);
  resultado1[1].innerHTML = distancia1;
});

boton[2].addEventListener('click', () => {
  let tiempo1 = parseFloat(Math.sqrt (2*distancia[1].value / aceleracion1[0].value).toFixed(2));
  resultado[2].innerHTML = tiempo1;

  let tiempo2 = parseFloat(velocidad[2].value / aceleracion1[0].value).toFixed(2);
  resultado1[2].innerHTML = tiempo2;

});


