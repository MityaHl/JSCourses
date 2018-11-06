//1
function check(firstNum, secondNum){
    if(firstNum > secondNum){
         return true;   
    }
    else{
        return false;
    }
}

//2
function yourString(str){
    return "Вы ввели " + str;
}

//3
function checkType(something){
    if(something === null || something === undefined){
       return true;
    }
    else{
        return false;
    }
}

//4
function addToObj(obj){
    obj.checked = true;
}

//5
function ex5(Num){
    for(var i = 0; i <= Num; i++){
        console.log(i);
    }
    for(var j = Num; j > -1; j--){
        console.log(j);
    }
}