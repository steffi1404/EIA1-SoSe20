"use strict";
var todoObjects = [
    {
        todosText: "Prüfungsvorbereitung",
        todosChecked: true
    },
    {
        todosText: "EIA",
        todosChecked: false
    },
    {
        todosText: "Sport",
        todosChecked: false
    }
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
function deleteTodo(index) {
    todoObjects.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    const artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            todoObjects.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
        }
        //drawListToDOM();
        //todosDOMElement.innerHTML = wildcard;
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=toDo.js.map