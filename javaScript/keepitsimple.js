(function(){
    let list = document.getElementById("list"),
        newTask = document.getElementById("newTask"),
        btnSubmit = document.getElementsByClassName("btnSubmit");

        //funciones
    let addTask = function(){
        console.log("addTask")
    };
    
    let cheackInput = function(){
        console.log("cheackInput")
    };
    
    let delateTask = function(){
        console.log("deleteTask")
    };

    //eventos
    
    //agregar tarea
    btnSubmit.addEventListener("click", addTask,);

    //Comprobar Input
    newTask.addEventListener("click", cheackInput());

    //Borrando elementos de la lista
    for (let i = 0; i <= listjs.children.length -1; i++) {
        list.children[i].addEventListener("click", delateTask);
    }

}());

