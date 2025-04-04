const inputBox = document.getElementById("inputBox")
const taskList = document.getElementById("taskList")

function addTask(){
    if(inputBox.value.trim() === ""){
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
        const li = e.target.parentElement;
        li.classList.add("removed");
        setTimeout(() => {
            li.remove();
            saveTasks();
        }, 600)
    }
});

function saveTasks(){
    if (taskList.children.length === 0) {
        localStorage.removeItem("data"); 
    } else {
        localStorage.setItem("data", taskList.innerHTML);
    }
}

function loadTasks(){
    let savedTask = localStorage.getItem("data");
    taskList.innerHTML = savedTask ? savedTask : "";
}

inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

loadTasks();
