"use strict";
var todoObjects = [
    { todosText: "Prüfungsvorbereitung", todosChecked: true },
    { todosText: "EIA", todosChecked: false },
    { todosText: "Sport", todosChecked: false }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var counterDoneDOMElement;
var counterTodoDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    counterDoneDOMElement = document.querySelector("#counterDone");
    counterTodoDOMElement = document.querySelector("#counterTodo");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < todoObjects.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todoObjects[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + todoObjects[index].todosText +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
//COUNTER//
function updateCounter() {
    let i = 0;
    let checkmark = 0;
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
function addTodo() {
    if (inputDOMElement.value != "") {
        todoObjects.unshift({
            todosText: (inputDOMElement.value),
            todosChecked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todoObjects[index].todosChecked = !todoObjects[index].todosChecked;
    drawListToDOM();
}
//DELETE//
function deleteTodo(index) {
    todoObjects.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=toDo.js.map