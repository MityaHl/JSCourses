var numbers =  document.querySelectorAll('.number');
var operations = document.querySelectorAll('.operation');
var decimalBtn = document.getElementById('decimal');
var C = document.getElementById('C');
var display = document.getElementById('display');
var memoryOldNumber = 0;
var memoryNewNumber = false;
var memoryOperation = '';

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    number.addEventListener('click', function(e){
      pressNumber(e.target.textContent);
    });
}

for(var i = 0; i < operations.length; i++){
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e){
        pressOperation(e.target.textContent)
    });
}

decimalBtn.addEventListener('click', function(e){
      decimal();
    });

C.addEventListener('click', function(e){
      clearC();
    });

function pressNumber(number){
    if(memoryNewNumber){
        display.value = number;
        memoryNewNumber = false;
    } else {
        if(display.value === '0') {
            display.value = number;
        } else {
           display.value += number; 
        }
    }
}

function pressOperation(oper){
    var localMemory = display.value;
    if(memoryNewNumber && memoryOperation !== '='){
        display.value = memoryOldNumber;
    } else {
        memoryNewNumber = true;
        if(memoryOperation === '+') {
            memoryOldNumber += parseFloat(localMemory);
        } else if(memoryOperation === '-') { 
            memoryOldNumber -= parseFloat(localMemory);
        } else if(memoryOperation === '*') { 
            memoryOldNumber *= parseFloat(localMemory);
        } else if(memoryOperation === '/') { 
            memoryOldNumber /= parseFloat(localMemory);
        } else { 
            memoryOldNumber = parseFloat(localMemory);
    }
        display.value = memoryOldNumber;
        memoryOperation = oper;
    }
}

function decimal(){
    var localMemory = display.value;
    if(memoryNewNumber){
        localMemory = '0.';
        memoryNewNumber = false;
    } else { 
        if(display.value.indexOf(".") === -1){
        localMemory += '.';
        }
    }
    display.value = localMemory;
}

function clearC(){
    display.value = "0";
}