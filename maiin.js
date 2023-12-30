let input = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTaskMsg = document.querySelector(".message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// focus on the input field
window.onload = function () {
    input.focus();
};

// adding tasks
addButton.onclick = function () {
    let theTask = input.value;
    if (theTask === "") {
        // alert('Please write the task description')
        document.querySelector(".alert").classList.add("show");
    } else {
        noTaskMsg.remove();
        let mainSpan = document.createElement("span");
        let deleteSpan = document.createElement("span");
        let text = document.createTextNode(theTask);
        let deleteText = document.createTextNode("delete");

        mainSpan.appendChild(text);
        mainSpan.className = "task-box";
        deleteSpan.appendChild(deleteText);
        deleteSpan.className = "delete";
        mainSpan.appendChild(deleteSpan);
        tasksContainer.appendChild(mainSpan);
        input.value = "";
        input.focus();
    }
};

document.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
        e.target.parentNode.remove();
        if (tasksContainer.childElementCount == 0) {
            tasksContainer.appendChild(noTaskMsg);
        }
    }
    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished");
    }
    calculateTasks();
});
// function calculate tasks list
function calculateTasks() {
    tasksCount.innerHTML = document.querySelectorAll(
        ".tasks-content .task-box"
    ).length;
    tasksCompleted.innerHTML = document.querySelectorAll(
        ".tasks-content .finished"
    ).length;
}

// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
    // When someone clicks on a close button
    close[i].onclick = function () {
        // Get the parent of <span class="closebtn"> (<div class="alert">)
        var div = this.parentElement;

        // Set the opacity of div to 0 (transparent)
        div.classList.remove("show");
        // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
        // setTimeout(function(){ div.style.display = "none"; }, 600);
    };
}
