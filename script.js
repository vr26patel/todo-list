const inputBox = document.getElementById("inputBox")
const taskList = document.getElementById("taskList")

function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "❌";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveTask();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    let storedData = localStorage.getItem("data");
    if (storedData && storedData !== "null" && storedData !== "[]") {  
        taskList.innerHTML = storedData;
    }
}

showTask();