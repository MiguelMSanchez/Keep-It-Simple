(function(){
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

//Funciones
var agregarTarea = function(){
    alert("Evento click en el botón de Agregar tarea");
};
var comprobarImput = function(){
    alert("Evento click en el input de texto");
};

//Eventos
btnNuevaTarea.addEventListener("click", agregarTarea);
tareaInput.addEventListener("click", comprobarImput);

    
}());

