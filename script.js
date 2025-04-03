const inputBox = document.getElementById("inputBox")
const taskList = document.getElementById("taskList")

function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "❌";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
    saveTasks();
})

function saveTasks(){
    localStorage.setItem("data", taskList.innerHTML);
}

function loadTasks(){
    taskList.innerHTML = localStorage.getItem("data");
}

loadTasks();
