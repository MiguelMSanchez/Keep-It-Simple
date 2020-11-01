(function(){
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

//Funciones
    function agregarTarea(){
    var tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea); 

    if(comprobarImput(tarea)){ 
         //Agregamos el contenido al enlace
         enlace.appendChild(contenido);
        //Le establecemos un atributo href
         enlace.setAttribute("href", "#");
        // Agregamos el enlace a la nueva tarea (li)
         nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
         lista.appendChild(nuevaTarea);

         agregarEventoATareas(lista)

    }
   
};

function comprobarImput(tarea){
    if(tarea ===""){
        tareaInput.setAttribute("placeholder", "Agregue una nueva tarea");
        tareaInput.className = "error";
        return false;
    }else {
        return true;
    } 
};


/*var eliminarTarea = function(){
}; */

function eliminarTarea(){
    this.remove() // el this dentro de la funcion de un eventListener, es siempre el elemente que disparo el evento (en este caso, el elemento clickeado)
};



//Eventos

//Agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

//Comprobar Input
tareaInput.addEventListener("click", comprobarImput);

//Agrega un event Listener a todas las tareas, que al clickearlas se ejecuta Eliminar tarea
function agregarEventoATareas(lista){
    for (var i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }     
}
  
}());

