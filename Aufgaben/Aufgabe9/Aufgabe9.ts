//Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables
let LIST: string = ["wef"]; 
let id = 0;

//document.querySelector("#Zähler").innerHTML= (LIST.length + " in total");
//console.log(LIST.length); 



//Datum
const options = {weekday: "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

 // add to do function

 function addToDo (toDo, id, done, trash){

    if(trash){return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";


    const item =  `<li class="item"> \ <i class="fa ${DONE} co" job="complete" id="${id}"></i> \ <p class="text ${LINE}"> ${toDo} </p> \ <i class="fa fa-trash-o de" job="delete" id="${id}"></i> </li>`; 
    
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);


 }



//add an item to the list 

document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){ //= enter taste
        const toDo = input.value;

        //if the input isnt empty:
        if(toDo){
            addToDo(toDo, id, false, false); //funktion toDo starten
            LIST.push({
                name : toDo, 
                id : id, 
                done : false, 
                trash : false
            });
            //document.getElementById("#Zähler") = (LIST.length +1); 
            //LIST.length = +1; //geht nicht

            id++;
            document.querySelector("#Zähler").innerHTML= (id + " in total"); 

        }
        input.value = "";//input feld wieder leer machen danach
    }

});

// Complete to do 
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
//set done to true if it was false and fals if it was true:
    LIST[element.id].done = LIST[element.id].done ? false : true;
}


//remove to do function 
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
    //document.getElementById("#Zähler") = (LIST.length -1); 
    //LIST.length = -1; 
    id--;
    document.querySelector("#Zähler").innerHTML= (id + " in total");

}

//target the items created dynamically
list.addEventListener("click", function(event){
    const element = event.target; //return 
    const elementJob = element.attributes.job.value; //complete or delete

    if (elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }
});




/*
var TaskList: string [] = [];

var list = document.createElement('ul');


TaskList.forEach(function (pups) {
	var li = document.createElement('li');
	li.textContent = pups;
	list.appendChild(li);
});
var app = document.querySelector('#pupu');
app.appendChild(list);

document.querySelector("button").addEventListener("click", myFunctionListe);
function myFunctionListe(){
    //alert("test"); 
    let task = document.getElementById("input").value;
    //alert(task); 
    
    TaskList.push(task); 
    //alert("huhu: "+TaskList); 
        
    document.getElementById("ausgabe").innerHTML = TaskList;
    //document.getElementById("ausgabe").innerHTML = TaskList[0];
    //document.getElementById("ausgabe").innerHTML = TaskList[1]; 
    //document.getElementById("ausgabe").innerHTML = TaskList[2]; 
    for (let i: number = 0;  i < TaskList;  i++) {
        document.getElementById("ausgabe").innerHTML = TaskList[i];  
        console.log(TaskList[i]);
    }
   
    document.getElementById("dieliste").innerHTML = TaskList.length + " in total"; //--> funktioniert   
}
}

 
/*
   for (let i = 0; i < TaskList.length; i++) {
        console.log(TaskList[i]);
     }
    let i: number = 0;	
    do {
        console.log(TaskList[i]);
        i++;
    } while (i < TaskList) 
*/