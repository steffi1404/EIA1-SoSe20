interface Task {
    todosText: string;
    todosChecked: boolean;
}

var todoObjects: Task [] = [
    {todosText: "Prüfungsvorbereitung", todosChecked: true},
    
    {todosText: "EIA", todosChecked: false},
    
    {todosText: "Sport", todosChecked: false}
];


var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var counterDoneDOMElement: HTMLElement;
var counterTodoDOMElement: HTMLElement;



window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    counterDoneDOMElement = document.querySelector("#counterDone");
    counterTodoDOMElement = document.querySelector("#counterTodo");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM(); });



function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    
    for (let index: number = 0; index < todoObjects.length; index++) {
        
        
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todoObjects[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + todoObjects[index].todosText +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            
            toggleCheckState(index);
        
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            
            deleteTodo(index);
        });


        todosDOMElement.appendChild(todo);
    }


    updateCounter();
}


//COUNTER//
function updateCounter(): void {

    let i: number = 0;	
    let checkmark: number = 0;
    while (i < todoObjects.length) { 
        if (todoObjects[i].todosChecked == true) {
            checkmark++;
        }
        i++;
    }

    counterDoneDOMElement.innerHTML = checkmark + " erledigt"; 
    counterDOMElement.innerHTML = todoObjects.length + " insgesamt";
    counterTodoDOMElement.innerHTML = todoObjects.length - checkmark + " offen";
}

function addTodo(): void {
   
    if (inputDOMElement.value != "") {
        
        
        todoObjects.unshift({
            todosText: (inputDOMElement.value),
            todosChecked: false
        });
        
        inputDOMElement.value = "";

        
        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    
    todoObjects[index].todosChecked = ! todoObjects[index].todosChecked;
    
    drawListToDOM();
}

//DELETE//
function deleteTodo(index: number): void {

    todoObjects.splice(index, 1);
    
    drawListToDOM();
}

