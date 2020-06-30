//Select the Elements
var clear = document.querySelector(".clear");
var dateElement = document.getElementById("date");
var list = document.getElementById("list");
var input = document.getElementById("input");
//Classes names
var CHECK = "fa-check-circle";
var UNCHECK = "fa-circle-thin";
var LINE_THROUGH = "lineThrough";
//Variables
var LIST = ["wef"];
var id = 0;
//document.querySelector("#Zähler").innerHTML= (LIST.length + " in total");
//console.log(LIST.length); 
//Datum
var options = { weekday: "long", month: "short", day: "numeric" };
var today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
// add to do function
function addToDo(toDo, id, done, trash) {
    if (trash) {
        return;
    }
    var DONE = done ? CHECK : UNCHECK;
    var LINE = done ? LINE_THROUGH : "";
    var item = "<li class=\"item\">  <i class=\"fa " + DONE + " co\" job=\"complete\" id=\"" + id + "\"></i>  <p class=\"text " + LINE + "\"> " + toDo + " </p>  <i class=\"fa fa-trash-o de\" job=\"delete\" id=\"" + id + "\"></i> </li>";
    var position = "beforeend";
    list.insertAdjacentHTML(position, item);
}
//add an item to the list 
document.addEventListener("keyup", function (even) {
    if (event.keyCode == 13) { //= enter taste
        var toDo = input.value;
        //if the input isnt empty:
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            //document.getElementById("#Zähler") = (LIST.length +1); 
            //LIST.length = +1; 
            id++;
            document.querySelector("#Zähler").innerHTML = (id + " in total");
        }
        input.value = "";
    }
});
// Complete to do 
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}
//remove to do function 
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
    //document.getElementById("#Zähler") = (LIST.length -1); 
    //LIST.length = -1; 
    id--;
    document.querySelector("#Zähler").innerHTML = (id + " in total");
}
//target the items created dynamically
list.addEventListener("click", function (event) {
    var element = event.target; //return 
    var elementJob = element.attributes.job.value; //complete or delete
    if (elementJob == "complete") {
        completeToDo(element);
    }
    else if (elementJob == "delete") {
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
