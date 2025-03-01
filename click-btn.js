const mobileBtns = document.getElementsByClassName("mobile-btn");

for (let i = 0; i < mobileBtns.length; i++) {
    mobileBtns[i].addEventListener("click", function() {
        alert("Board updated Successfully");

        
        mobileBtns[i].disabled = true; 
        mobileBtns[i].style.backgroundColor = "gray";

        let finishTaskElement = document.getElementById("finish-task");
        let finishedCount = parseInt(finishTaskElement.innerText);
        finishedCount -= 1;
        finishTaskElement.innerText = finishedCount;

        let doneTaskElement = document.getElementById("done-task");
        let workDoneCount = parseInt(doneTaskElement.innerText);
        workDoneCount += 1;
        doneTaskElement.innerText = workDoneCount;
    });
}





