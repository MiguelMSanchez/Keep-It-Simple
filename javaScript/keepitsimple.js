(function(){
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

//Funciones
    var agregarTarea = function(){
    var tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);

    if(tarea ===""){
        tareaInput.setAttribute("placeholder", "Agregue una nueva tarea");
        tareaInput.className = "error";
        return false;

    }

    enlace.appendChild(contenido);
};


var comprobarImput = function(){
};

var eliminarTarea = function(){
};

//Eventos

//Agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

//Comprobar Input
tareaInput.addEventListener("click", comprobarImput);

//Borrando Elemehntos de la lista
for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
    
}
    
}());

