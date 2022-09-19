const resultado = document.getElementById('resultadoo'); //resultado
const parametro_1 = document.getElementById('primer_parametro');
const parametro_2 = document.getElementById('segundo_parametro');

const resultado2 = document.getElementById('resultadoo2'); //resultado
const parametro_3 = document.getElementById('tercer_parametro');
const parametro_4 = document.getElementById('cuarto_parametro');

class Conversor {
  constructor() {
  
    const x1 = Number(parametro_1.value);
    const y1 = Number(parametro_2.value);
    

    const x3 = Number(parametro_3.value);
    const y4 = Number(parametro_4.value);

    this.calcular(x1, y1, x3, y4); //pedimos  paramtros a una funcion
  
  }

  calcular(x1, y1, x3, y4) {
    
        this.dibujarGrafico(x1, y1, x3, y4);
        this.cartesianaAPolar(x1, y1, x3, y4);
     
  }

  cartesianaAPolar(x1, y1, x3, y4) {
    const r = this.resolverR(x1, y1); 
    const o = this.resolverO(x1, y1);
    const s= this.sumatotalx(x1,y1,x3,y4);
    const e= this.sumatotaly(x1,y1,x3,y4);

    const a = this.resolverR_vector2(x3, y4); 
    const b = this.resolverO_vector2(x3, y4);
  


    console.log(`(${r}; ${o}°; ${s};)`);
    resultado.innerHTML = `v = (Modulo ${r}; Angulo ${o}°; suma de V ${s})`; //muestra el resultado

    console.log(`(${a}; ${b}°; ${e})`);
    resultado2.innerHTML = `v = (Modulo ${a}; Angulo ${b}°)`; //muestra el resultado
  }

  resolverR(x1, y1) {
    const sumaDeCuadrados = x1 ** 2 + y1 ** 2; //los datos que ingresa el usuario se elevan al cuadrado y despues se suma
    
    if (Math.sqrt(sumaDeCuadrados) % 1 === 0) { //compara que el resultado de 0
      return Math.sqrt(sumaDeCuadrados); //devuelve la raiz
    } else {
      return `&radic;${sumaDeCuadrados}`; //&radic grafica la raiz y retorna lo que este en la variable
    }
  }

  resolverR_vector2(x3, y4) {
    const sumaDeCuadradoss = x3 ** 2 + y4 ** 2; //los datos que ingresa el usuario se elevan al cuadrado y despues se suma
    
    if (Math.sqrt(sumaDeCuadradoss) % 1 === 0) { //compara que el resultado de 0
      return Math.sqrt(sumaDeCuadradoss); //devuelve la raiz
    } else {
      return `&radic;${sumaDeCuadradoss}`; //&radic grafica la raiz y retorna lo que este en la variable
    }
  }

  resolverO(x1, y1) {
    let o = parseFloat(this.radianesAGrados(Math.atan2(y1, x1))).toFixed(2); //crea una variable

    //Math.atan2() la función devuelve el ángulo en el plano (en radianes) entre el eje x positivo
    // y el rayo desde (0,0) hasta el punto (x,y), para Math.atan2(y,x). 
    //despues convierte el numero en una cadena


    if (x1 === 0 || y1 === 0) {
      return this.corregirAngulo(x1, y1); //datos en 0 
    }

    if ((x1 < 0 && y1 < 0) || (x1 > 0 && y1 < 0)) {
      return Number(o) + 360; //retorna 
    } else {
      return o; //retorna el angulo
    }

  }


  resolverO_vector2(x3, y4) {
    let f = parseFloat(this.radianesAGrados(Math.atan2(y4, x3))).toFixed(2); //crea una variable

    //Math.atan2() la función devuelve el ángulo en el plano (en radianes) entre el eje x positivo
    // y el rayo desde (0,0) hasta el punto (x,y), para Math.atan2(y,x). 
    //despues convierte el numero en una cadena


    if (x3 === 0 || y4 === 0) {
      return this.corregirAngulo(x3, y4); //datos en 0 
    }

    if ((x3 < 0 && y4 < 0) || (x3 > 0 && y4 < 0)) {
      return Number(f) + 360; //retorna 
    } else {
      return f; //retorna el angulo
    }
  }

  sumatotalx(x1,y1,x3,y4){
 
    const pi = Math.PI;
    y1=  y1 *pi / 180 ;
y4=  y4 * pi  /180 ;


var coseno= x1*Math.cos(y1);
var senoy= x1*Math.sin(y1);
var senox =x3*Math.sin(y4);
var  cosenox=x3*Math.cos(y4);


if(coseno<0 ){
  coseno=coseno*-1;
  }
  if(senoy<0 ){
  senoy=senoy*-1;
  }
  if(cosenox<0 ){
  cosenox=cosenox*-1;
  }
  if(senox<0 ){
  senox=senox*-1;
  }





  

var totaly=senoy+senox;
var totalx=coseno-cosenox;


var totalraiz=Math.sqrt((totaly** 2) + (totalx** 2));
//return totalraiz;
//return "a "+prue+" b "+pur+" c "+a+" d "+b;
   // return coseno-senox;
    //return totalraiz;
    return totaly+' '+' '+totalx;

   
    
  }

  sumatotaly(x1,y1,x3,y4){

    
    var seno= x1*Math.sin(y1);
   var cosey =x3*Math.cos(y4);
    
    return seno-cosey ;
    
  }

  

  radianesAGrados(radianes) { //se pasa de radianes a grados
    const pi = Math.PI;
    return radianes * (180 / pi);
  }

 // gradosARadianes(grados) { //se pasa de grados a radianes
   // const pi = Math.PI;
    //return grados * (pi / 180);
  //}

  corregirAngulo(x1, y1) { //para datos en 0
    if (x1 === 0) {
      if (y1 > 0) {
        return 90;
      } else {
      //  return 270;
      return 0;
      }
    } else {
      if (x1 > 0) {
        return 0;
      } else {
        return 180;
      }
    }
  }

  corregirAngulo(x3, y4) { //para datos en 0
    if (x3 === 0) {
      if (y4 > 0) {
        return 90;
      } else {
      //  return 270;
      return 0;
      }
    } else {
      if (x3 > 0) {
        return 0;
      } else {
        return 180;
      }
    }
  }

  dibujarGrafico(x1, y1, x3,y4) {
    const ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'scatter',
      plugins: [
        {
          beforeDraw: (chart) => {
            var xAxis = chart.scales['x-axis-1'];
            var yAxis = chart.scales['y-axis-1'];
            const scales = chart.chart.config.options.scales;
            scales.xAxes[0].ticks.padding = yAxis.top - yAxis.getPixelForValue(0) + 6;
            scales.yAxes[0].ticks.padding = xAxis.getPixelForValue(0) - xAxis.right + 6;
            
          },
        },
      ],
      data: {
        datasets: [
          {
            label: 'Vector v', 
            data: [
              {
                x: 0,
                y: 0,
                
               
              },
              {
                x: x1,
                y: y1,
              
              },

              {
                x: 0,
                y: 0,
                
               
              },
              {
                x: 0,
                y: 0,
              
              },
              {
                x: 0,
                y: 0,
                
               
              },
              {
                x: x3,
                y: y4,
               
              },

              

              
            ],
            
            borderColor: '#2525cf',
            showLine: true,
            fill: false,
          },
        ],
      },  

      
      
    
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                min: -10, //maximo del eje y 
                max: 10,
                stepSize: 1, //espacio
                callback: (v) => (v == 0 ? '' : v),
              },
              gridLines: {
                drawTicks: false, //los numeros ordenados en el eje x
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: -10, //maximo del eje y 
                max: 10,
                stepSize: 1,
                callback: (v) => (v == 0 ? '' : v),
              },
              gridLines: {
                drawTicks: false,
              },
            },
          ],
        },
      },
    });
  }
}



function start() { //ejecute sin presionar nada
  let = new Conversor();
}

start();
