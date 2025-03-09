

function action1(callback){
    const done = document.getElementById("assignment-done")
    const convertedDone = parseInt(done.innerText);
    const actualValue = callback(convertedDone)
    done.innerText = actualValue; 

}

function action2(callback){
    const done = document.getElementById("assignment-left")
    const convertedDone = parseInt(done.innerText);
    const actualValue = callback(convertedDone)
    done.innerText = actualValue; 
}


 