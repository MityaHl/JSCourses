function checkUndef(value) {
    if (typeof value == "undefined") {
        return true;
    }
    else {
        return false;
    }
}

function checkNull(value) {
    if (value === null) {
        return true;
    }
    else {
        return false;
    }
}

function checkNaN(value) {
    if (isNaN(value)) {
        return true;
    }
    else {
        return false;
    }
}
    
function objIsEmpty(obj){
    var counter = 0;
    for (var key in obj) {
      counter++;
    }
    if(counter === 0){
        return true;
    }
    else{
        return false;
    }
}

function random(firstIndex, lastIndex){
    var rand = firstIndex - 0.5 + Math.random() * (lastIndex - firstIndex + 1)
    rand = Math.round(rand);
    return rand;
}

function delProperty(obj){
    for(var property in obj){
        if(!checkNull(obj[property])){
            delete obj[property];
        }
    }
    return obj;
}