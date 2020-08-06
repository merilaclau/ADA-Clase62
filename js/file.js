// 001 /////////////////////////////////////////////////////
/**
 * Escribir una funcion que nos permita pasarle un elemento 
 * y un color, y  le cambie el color de fondo al elemento.
 */

const changeBackColor = (elementId, color) => {
    let element = document.querySelector(elementId);
    element.style.backgroundColor = color;
}

//002 /////////////////////////////////////////////////////
/**
  * Modificar la funcion previa para que, si no se recibe
  * un color por parametro, se busque un color de forma
  * azarosamente.
  * (math.random)
  */

 const changeBackColorRand = (elementId, color) => {
    let element = document.querySelector(elementId);
    if (!color) {
        const makeRandomColor = () => {
            let c = '';
            while (c.length < 6) {
                c += (Math.random()).toString(16).substr(-6).substr(-1)
            }
            return '#'+c;
        }
        element.style.backgroundColor = makeRandomColor();     
    }
    element.style.backgroundColor = color;
}

// 003 /////////////////////////////////////////////////////
/**
* Crear una lista con varios elementos.
* Crear una funcion que asigne la clase
* "active" a uno de estos elementos seleccionados.
* Ademas al mismo tiempo tiene que eliminar
* la clase "active" del resto de los elementos.
* Asignarle algun estilo para diferenciar la clase
* "active" de cuando no se encuentra la misma.
*/

const assignActive = () => {
    let lis = document.querySelectorAll("#active-list > li");
    //console.log(lis); // nodelist ok
    let random = Math.floor(Math.random() * (lis.length));
    //console.log(random); // randomiza ok
    lis[random].classList.toggle("active");
    //console.log(lis[random]); 
    for (let i = 0; i < lis.length; i++) {
        if (lis[i].classList.contains("active")) {
            if (i < lis.length) {
                for (let j = i+1; j < lis.length; j++) {
                    lis[j].classList.remove("active");
                }
            }
            else {
                lis[lis.length-1].classList.remove("active");
            }
            
        }            
    }
}

//funciona a medias, a veces ningún elemento queda en active. 
//a veces se traba en un elemento fijo, aunque el random indique otra cosa.


// 004 /////////////////////////////////////////////////////

/**
 * Crear una funcion para aumentar tamaño 
 * de un titulo y otra para reducirlo.
 */

/*
const enlargeTitle = (elementId, size = "larger") => {
    let element = document.querySelector(elementId);
    element.style.fontSize = size;
}

const reduceTitle = (elementId, size = "smaller") => {
    let element = document.querySelector(elementId);
    element.style.fontSize = size;
}
*/
// ESTAS OPCIONES NO FUNCIONAN PORQUE AUMENTAN O 
// DISMINUYEN EL TAMAÑO DE LA FUENTE TOMANDO COMO BASE EL TAMAÑO DE LA FUENTE 
// DEL ELEMENTO PADRE Y ACÁ PADRE ES UNA SECTION QUE POR DEFECTO TIENE FUENTE MENOR.

const enlargeTitle = (elementId) => {
    let element = document.querySelector(elementId);
    element.style.fontSize = "xx-large";
}

const reduceTitle = (elementId) => {
    let element = document.querySelector(elementId);
    element.style.fontSize = "xx-small";
}

// 005 /////////////////////////////////////////////////////
 /**
  * Crear una lista que contenga imagenes, de las 
  * cuales se va a mostrar solo una.
  * Crear una funcion que me permita ir cambiando
  * de imagen cada vez que la ejecuto, segun el orden
  * en que estan declaradas.
  */

const imageDisplay = () => {
    let images = document.querySelectorAll(".img-list > li");
    let hasBlock = false;
    for (let i = 0; i < images.length; i++) {
        if (images[i].style.display == "block") {
            if (i < images.length-1) {
                images[i].style.display = "none";
                console.log(i);
                images[i+1].style.display = "block";
                hasBlock = true;
                i = images.length;
            }
            else {
                
            }
        } 
    }
    if (!hasBlock) {
        images[0].style.display = "block";
    }
}