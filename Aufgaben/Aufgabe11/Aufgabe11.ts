

//var todosText: string[] =       ["Lorem" , "Ipsum" , "Dolor"];
//var todosChecked: boolean[] =    [true    , false   , false];

interface Task {
    todosText: string;
    todosChecked: boolean;
}

var todoObjects: Task [] = [
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

    
    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    
    for (let index: number = 0; index < todoObjects.length; index++) {
        //todoObjects[index].todosText

    
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


function updateCounter(): void {

    let i: number = 0;	
    let checkmark: number = 0;
    while (i < todoObjects.length) { 
        if (todoObjects[i].todosChecked == true) {
            checkmark++;
        }
        i++;
    }

    counterDoneDOMElement.innerHTML = checkmark + " done"; // alle mit todosChecked = true

    counterDOMElement.innerHTML = todoObjects.length + " in total";

    counterTodoDOMElement.innerHTML = todoObjects.length - checkmark + " open tasks";//alle mit todosChecked = false
}





function addTodo(): void {

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





function toggleCheckState(index: number): void {

 

    //todoObjects.todosChecked[index] = !todoObjects.todosChecked[index];



    //Haken soll gestzt / nicht gesetzt werden:
    todoObjects[index].todosChecked = ! todoObjects[index].todosChecked;


    //todoObjects[todoObjects.todosChecked] = !todoObjects[todoObjects.todosChecked];

    //counterDoneDOMElement.innerHTML = todoObjects.todosChecked.length + " done";




    
    drawListToDOM();
}


function deleteTodo(index: number): void {
  

    todoObjects.splice(index, 1);
    

    drawListToDOM();
}




//Spracheingabe:
declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands ( {
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            todoObjects.unshift({
                todosText: (wildcard),
                todosChecked: false
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    

});