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


        let now = new Date();
        let timeString = now.toLocaleTimeString();
        let history = document.getElementById("history-list");
        let newHistoryItem = document.createElement("div");
        newHistoryItem.classList.add("bg-color", "m-3","p-2","rounded-lg")
        newHistoryItem.innerText = `You have Complete The Task Add Dark Mode at ${timeString}`;
        history.appendChild(newHistoryItem);
        let clearBtn = document.getElementById("Clear-btn").addEventListener("click", function(){
            history.innerText='';
        })

        
    });
}





