/**
 * Los eventos son sucesos que ocurren cuando un elemento
 * es afectado por una acción, Ejm:
 * click, pasar el mouse por encima, presionar una tecla
 * manter el click presionado, escribir algo sobre el elemento(input)
 * etc
 */

/**
 * ¿Cómo se configura un evento?
 * forma 1
 * elemento.on[evento] = ()=>{}
 * forma 2
 * elemento.addEventListener("[evento]",()=>{})
 */

let contador = 0;
const textoContador = document.getElementById("textoContador");

//forma 1
const btn1 = document.getElementById("btn1");
btn1.onclick = () => {
    contador++;
    textoContador.innerText = contador;
    console.log("Ups! me hicieron click");
};

// información que trae un evento
const btn2 = document.getElementById("btn2");
btn2.onclick = (evento) => {
    /**
     * Información que produce un evento
     */
    /**
     * evento.target = retorna el elemento en el que sucede el evento
     */
    console.log(`** evento.target **`);
    console.log(evento.target);
    /**
     * evento.clientX = coordenada en X respecto del VIEWPORT en PX en donde
     * se hizo clic
     * evento.clientY = coordenada en Y respecto del VIEWPORT en PX en donde
     * se hizo clic
     */
    console.log(`** evento.clientX **`);
    console.log(evento.clientX);
    console.log(`** evento.clientY **`);
    console.log(evento.clientY);
};

/***
 * evento.offsetx coordenada en x respecto al elemento en px en dode se hizo
 * evento.offsety coordenada en yrespecto al elemento en px en dode se hizo
 */

console.log(`**evento offsetX*`);
console.log(evento.offsetX);
console.log(`**evento offsetY*`);
console.log(evento.offsetY);

/***
 * 
 * evento.altKey retorna tru si el evento a sido ejecutado con la ayuda de la tecla ALT, caso contrario retorna false
 */

console.log(`**vento.altKey*`);
console.log(vento.altKey);