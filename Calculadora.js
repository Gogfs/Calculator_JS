function appendToDisplay(input){
    var display = document.getElementById("display");
    display.value += input; 
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let num = display.value.replace(',' , '');
        display.value = num;
        display.value = eval(display.value).toLocaleString("en-US");
    }
    catch(error){
        display.value = "Erro";
    }
}