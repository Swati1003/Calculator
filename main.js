let answer = document.getElementById("answer");
inputs = document.querySelectorAll(".buttons input");
let screenvalue = '';
inputs.forEach(inp => {
    inp.addEventListener("click", (e) => {
        text=e.target.value;
        if (text =="AC"){
            screenvalue='';
            answer.value = screenvalue;
        }
        else if(text == "="){
            answer.value = eval(screenvalue);
            screenvalue = answer.value;
        }
        else if(text == "DEL"){
            answer.value = answer.value.substr(0,answer.value.length -1);
        }
        else if(text=="e"){
            screenvalue += 2.718;
            answer.value = screenvalue;
        }
        else if(text=="π"){
            screenvalue += 3.141;
            answer.value = screenvalue;
        }
        else if(text=="ln x"){
            screenvalue = Math.log(eval(screenvalue));
            answer.value = screenvalue;
        }
        else if(text=="1/x"){
            screenvalue = 1/eval(screenvalue);
            answer.value = screenvalue;
        }
        else if(text=="√x"){
            screenvalue = eval(screenvalue)**(1/2);
            answer.value = screenvalue;
        }
        else if(text=="+/-"){
            screenvalue += "-";
            answer.value = screenvalue;
        }
        else if(text=="sin x"){
            screenvalue = Math.sin(eval(screenvalue));
            answer.value = screenvalue;
        }
        else if(text=="cos x"){
            screenvalue = Math.cos(eval(screenvalue));
            answer.value = screenvalue;
        }
        else if(text=="tan x"){
            screenvalue = Math.tan(eval(screenvalue));
            answer.value = screenvalue;
        }
        else if(text=="e\u02E3"){
            screenvalue = Math.exp(eval(screenvalue));
            answer.value = screenvalue;
        }
        else if(text=="x\u00B2"){
            screenvalue = (eval(screenvalue))**2;
            answer.value = screenvalue;
        }
        else{
            screenvalue += text;
            answer.value = screenvalue;
        }
    });
});