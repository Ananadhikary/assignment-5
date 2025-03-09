
  function disableButton(button) {
    button.disabled = true;
  }

  document.querySelectorAll(".btn-2").forEach(button => {
    button.addEventListener("click", function () {
        const taskCard = this.closest("div.shadow-md"); 
        const taskTitle = taskCard.querySelector("h1").innerText;

        const activityLog = document.querySelector(".bg-[#FFFFFF] ml-6.w-1/5.shadow-md .divider");
        const logEntry = document.createElement("p");
        logEntry.innerText = `Completed: ${taskTitle}`;
        logEntry.classList.add("activity-entry", "mt-2");
        
        activityLog.insertAdjacentElement("afterend", logEntry);
    });
});

document.querySelector(".btn-primary").addEventListener("click", function () {
    document.querySelectorAll(".activity-entry").forEach(entry => entry.remove());
});