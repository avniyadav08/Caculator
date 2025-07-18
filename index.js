function appendValue(value){
    document.getElementById('display').value +=value;
}

function clearDisplay(){
    document.getElementById('display').value='';
}

function backspace(){
    let current=document.getElementById('display').value;
    document.getElementById('display').value=current.slice(0,-1);

}

function percent(){
    let display=document.getElementById('display');
    display.value=parseFloat(display.value)/100;
}

function squareRoot(){
    let display=document.getElementById('display')
    display.value=Math.sqrt(display.value);
}

function calculateResult(){
    try{
        const result=eval(document.getElementById('display').value);
        document.getElementById('display').value=result;
    }
    catch(error){
        document.getElementById('display').value='Error';
    }
}

const buttons=document.querySelectorAll('button');

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        button.style.border='2px solid #FF5733';

        setTimeout(()=>{
            button.style.border='none';
        },200);
    })
})

document.addEventListener('keydown',(e)=> {
    const key = e.key;

    if(!isNaN(key)||['+','-','*','/','.','%'].includes(key)){
        appendValue(key);
    }else if(key ==='Enter'){
        calculateResult();
    }else if(key ==='Backspace'){
        backspace();
    }else if(key==='Escape`'){
        clearDisplay();
    }

})
