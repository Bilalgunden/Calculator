var operation = document.getElementById('display');
var buttons = document.querySelector('.buttons');
var result = '';
var buttonValues = ["C","/","*","DEL","7","8","9","-","4","5","6","+","1","2","3",".","(","0",")","=","sin","cos","tan","cot"]

for (let index = 0; index < buttonValues.length; index++) {
    let div = document.createElement('div');
    div.innerText = buttonValues[index];
    div.className = 'button';
    buttons.append(div);
}
var buttonList = Array.from(document.getElementsByClassName('button')); //yukarıda tanımlayınca içeriği boş geliyor js henüz çalışmadığı için
buttonList[0].id = 'clear';
buttonList[3].id = 'remove';
buttonList[19].id = 'result';

buttons.addEventListener('click',function(elem){
        switch(elem.target.innerText){
            case 'C':
                operation.innerText = "";
                break;
            case 'DEL':
                operation.innerText = operation.innerText.slice(0, -1);
                break;
            case '=':
                try{
                    var result = operation.innerText;
                    var mapObj = {
                        sin:"Math.sin",
                        cos:"Math.cos",
                        tan:"Math.tan",
                        cot:"Math.cot",
                        log:"Math.log",
                        sqrt:"Math.sqrt",
                    };
                    result = result.replace(/sin|cos|tan|cot|log|sqrt/gi, function(matched){
                    return (mapObj[matched]);
                    });
                    operation.innerText = (eval(result).toFixed(3));
                }
                catch{
                    operation.innerText = "error";
                }
                break;
            default:
                operation.innerText += elem.target.innerText;
        }
    });