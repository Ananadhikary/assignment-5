document.getElementById("redirectDiv").addEventListener("click", function () {
    window.location.href = "redirect.html";
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-2");
    const historySection = document.getElementById("history");
    const clearHistory = document.getElementById("remove"); 

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const taskCard = this.closest(".shadow-md");
            const taskTitle = taskCard.querySelector("h1").textContent;

            
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const amPm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            const formattedTime = `${hours}:${minutes} ${amPm}`;

            
            const historyEntry = document.createElement("p");
            historyEntry.textContent = `You have completed "${taskTitle}" at ${formattedTime}`;
            historyEntry.classList.add("history-item"); 
            historyEntry.style.backgroundColor = "#F4F7FF";
            historyEntry.style.borderRadius = "5px";
            historyEntry.style.padding = "10px";
            historyEntry.style.margin = "20px";
            historyEntry.style.fontSize = "14px";
            historyEntry.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
            
             

            historySection.appendChild(historyEntry);

    
            this.disabled = true;
            this.textContent = "Completed";
        });
    });

    
    clearHistory.addEventListener("click", function () {
        const historyItems = document.querySelectorAll(".history-item");
        historyItems.forEach(item => item.remove());
    });
});


    // color
    
   function changeColor(){
    document.body.style.backgroundColor = `rgb(`+ Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + `,` + Math.round(Math.random() * 255) + ')';
   }