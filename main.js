//Here You Can get random Numbers
document.getElementById('random-numbers').addEventListener('click', function(){
    const inputNumber = getInputValue('random-input');
    const randomNumber = Math.round(Math.random(inputNumber) * (2000 - 1001))  + 1001;
    document.getElementById('random-input').value = randomNumber;
})

//Here I have made Simple calculator

function insertNumbers(num){
    const insertNumber = getInputValue('calculate-numbers');
    document.getElementById('calculate-numbers').value = insertNumber + num;
}

function backspace(){
    const backspace = getInputValue('calculate-numbers');
    document.getElementById('calculate-numbers').value = backspace.substring(0, backspace.length-1);
}

function cleanCode(){
    document.getElementById('calculate-numbers').value = "";
}

function submitButton(){
    let autoGenarate = getInputValue('random-input');
    let calculateNumber = getInputValue('calculate-numbers');

    if(autoGenarate == calculateNumber){
        let successText = document.getElementById('successText');
        successText.style.display = "block";

        let unmatchingText = document.getElementById('unmatchingText');
        unmatchingText.style.display = "none";
    }
    
    else if(autoGenarate != calculateNumber){
            let unmatchingText = document.getElementById('unmatchingText');
            unmatchingText.style.display = "block";
            
            let successText = document.getElementById('successText');
            successText.style.display = "none";
        } 
    
}

function getInputValue(id){
    let inputValue = document.getElementById(id).value;
    return inputValue;
}
