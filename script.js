/*get history*/
function getHistory(){
    return document.getElementById("history-value").innerText;
}
/*print history on history block*/
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
/*first getting output*/
function getOutput(num){
    return document.getElementById("output-value").innerText;
}
/*for printing output on output block in comma separated form*/
function printOutput(num){
    document.getElementById("output-value").innerText=num;  
}
/*printOutput("98542588");*/
/*getting all the operators*/
var operator=document.getElementsByClassName("operator");
/*getting all the operators one by one*/
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=='clear'){
            printHistory("");
            printOutput("");
        }
        else if(this.id=='backspace'){
            var output=getOutput().toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var history=getHistory();//first get the history
            var output=getOutput();//then get the output
            if(output==""&&history!=""){//check if history is empty
                if(isNaN(history[history.length-1])){//isNaN determines if a number is illegal
                    history=history.substr(0,history.length-1);//output added with previous history

                }
            }

            if(output!="" || history!=""){
                output= output==""?output:getOutput(output);
                history=history+output;//as operator is pressed output goes to  history
                if(this.id=='='){
                    
                    var result=eval(history);//history is evaluated
                    printOutput(result);
                    printHistory("");
                }

                else{

                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }

            }
        }
        /*alert("the operator you clicked is "+this.id);*/
    });
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=getOutput();
        if(output!=NaN){//if output is a number
            output=output+this.id;
            printOutput(output);

        }
        /*alert("the number you clicked is "+this.id);*/
    });
}







