const tarea = document.querySelector("#inputarea");
const guardar = document.querySelector("#buttontarea");
const lista = document.querySelector("#listaTareas")
const datosGuardados = localStorage.getItem("tareas");
let arraytarea = datosGuardados ? JSON.parse(datosGuardados) : [];


function dibujarTarea() {
    
    lista.innerHTML= "";
    arraytarea.forEach((tarea)=>{
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tarea.texto;
        let borrar = document.createElement("button");
        borrar.textContent = "X";
        nuevaTarea.appendChild(borrar);
        lista.appendChild(nuevaTarea);

        if (tarea.completada === true) {
            nuevaTarea.classList.add("completada");
        }

        nuevaTarea.addEventListener("click", ()=>{

            tarea.completada = !tarea.completada;

            dibujarTarea();
        })

        borrar.addEventListener("click", (event)=>{

            event.stopPropagation();

            arraytarea = arraytarea.filter((t)=>{
                return t !== tarea;
            })

            dibujarTarea();
        })

    })

    localStorage.setItem("tareas", JSON.stringify(arraytarea));

}

guardar.addEventListener("click", () =>{

    if (tarea.value.trim()==="") {
        
    } else {
    let nuevatarea = {texto:tarea.value, completada: false};
    arraytarea.push(nuevatarea);

    tarea.value = "";   
    }

    dibujarTarea();
    


})

dibujarTarea();