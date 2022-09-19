const boton  = document.querySelectorAll('.boton');
const velocidad = document.querySelectorAll('.velocidad');
const tiempo = document.querySelectorAll('.tiempo');
const distancia = document.querySelectorAll('.distancia');
const resultado = document.querySelectorAll('.resultado');

boton[0].addEventListener('click', () => {
  let distancia = parseFloat(velocidad[0].value * tiempo[0].value).toFixed(2);
  resultado[0].innerHTML = distancia;
  setTimeout(() => { 
    velocidad[0].value = '';
    tiempo[0].value = '';
    resultado[0].innerHTML = '';
  }, 8000);
});

boton[1].addEventListener('click', () => {
  let tiempo = parseFloat(distancia[0].value / velocidad[1].value).toFixed(2);
  resultado[1].innerHTML = tiempo;
  setTimeout(() => { 
    velocidad[1].value = '';
    distancia[0].value = '';
    resultado[1].innerHTML = '';
  }, 4000);
});

boton[2].addEventListener('click', () => {
  let velocidad = parseFloat(distancia[1].value / tiempo[1].value).toFixed(2);
  resultado[2].innerHTML = velocidad;
  setTimeout(() => { 
    tiempo[1].value = '';
    distancia[1].value = '';
    resultado[2].innerHTML = '';
  }, 4000);
});

