//var todosText: string[] =       ["Lorem" , "Ipsum" , "Dolor"];
//var todosChecked: boolean[] =    [true    , false   , false];
var todoObjects = [
    {
        todosText: "Lorem",
        todosChecked: true
    },
    {
        todosText: "Ipsum",
        todosChecked: false
    },
    {
        todosText: "Dolor",
        todosChecked: false
    },
];
/*
var CheckedCounter: boolean;
window.addEventListener("load", function(){
    if (todoObjects.todosChecked == true){
        ++CheckedCounter;
    }
    
    console.log(CheckedCounter)
})
*/
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
    var _loop_1 = function (index) {
        //todoObjects[index].todosText
        var todo = document.createElement("div");
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
    };
    for (var index = 0; index < todoObjects.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    var i = 0;
    var checkmark = 0;
    while (i < todoObjects.length) {
        if (todoObjects[i].todosChecked == true) {
            checkmark++;
        }
        i++;
    }
    counterDoneDOMElement.innerHTML = checkmark + " done"; // alle mit todosChecked = true
    counterDOMElement.innerHTML = todoObjects.length + " in total";
    counterTodoDOMElement.innerHTML = todoObjects.length - checkmark + " open tasks"; //alle mit todosChecked = false
}
function addTodo() {
    if (inputDOMElement.value != "") {
        //todoObjects.todosText.unshift(inputDOMElement.value);
        //todoObjects.todosChecked.unshift(false);
        todoObjects.unshift({
            todosText: (inputDOMElement.value),
            todosChecked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    //todoObjects.todosChecked[index] = !todoObjects.todosChecked[index];
    //Haken soll gestzt / nicht gesetzt werden:
    todoObjects[index].todosChecked = !todoObjects[index].todosChecked;
    //todoObjects[todoObjects.todosChecked] = !todoObjects[todoObjects.todosChecked];
    //counterDoneDOMElement.innerHTML = todoObjects.todosChecked.length + " done";
    drawListToDOM();
}
function deleteTodo(index) {
    todoObjects.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            todoObjects.unshift({
                todosText: (wildcard),
                todosChecked: false
            });
        }
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
