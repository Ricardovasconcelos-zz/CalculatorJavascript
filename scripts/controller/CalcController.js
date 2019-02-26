  class CalcController {

    constructor(){
        this._operation = [];
        this._displayCalc = document.querySelector('#display');
        this._data = document.querySelector('#data');
        this._time = document.querySelector('#hora');  
        this._dataAtual;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){ 
        this.setDisplayDateTime();

        setInterval(()=>{
            this.setDisplayDateTime();       
        },1000);

        this.setLastNumberToDisplay();
    }

    setDisplayDateTime(){
        this.displayDate = this.dataAtual.toLocaleDateString('pt-br',{
        day:"2-digit",
        month:"long",
        year:"numeric"})
        this.displayTime = this.dataAtual.toLocaleTimeString('pt-br')
    }

    addEventListenerAll(element, event, fn){

        event.split(' ').forEach(event => {
            element.addEventListener(event,fn,false);
        });
    }
    
    initButtonsEvents(){
        let $buttons = document.querySelectorAll('#buttons > g, #parts > g')
        
        $buttons.forEach((button, index)=>{
            
            this.addEventListenerAll(button,'click drag', e =>{
                let textBtn = button.className.baseVal.replace('btn-','');
                this.execBtn(textBtn);
                                
            });
            this.addEventListenerAll(button, 'mouseover mouseup mousedown', e =>{
                button.style.cursor = "pointer"
            })
        });
    }

    execBtn(value){
        switch(value){

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))          
            break;

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+') 
                break;
                
            case 'multiplicacao':
                this.addOperation('*') 
                break;    
            
            case 'divisao':
                this.addOperation('/') 
                break;
        
            case 'subtracao':
                this.addOperation('-') 
                break;

            case 'porcento':
                this.addOperation('%') 
                break;

            case 'igual':
                this.calc()
                break;

            case 'ponto':
                this.addOperation('.') 
                break;
            
            default:
                this.setError();
                break;
        }
    }

    getLastOperation(){
        return this._operation[this._operation.length - 1];
    }
    isOperator(value){
       return  (['+','-','*','%','/'].indexOf(value) > -1);
    }
    
    setLastOperation(value){
        return this._operation[this._operation.length - 1] = value ;
    }
    
    setLastNumberToDisplay(){
        let lastNumber;
        for(let i = this._operation.length -1 ; i >= 0; i--){
            if(!this.isOperator(this._operation[i])){
                lastNumber = this._operation[i];
                break;
            }
        }
        if(!lastNumber) lastNumber = 0;
        this.displayCalc = lastNumber
    }

    calc(){
        let last = ''

        if(this._operation.length > 3){
            last = this._operation.pop();
        }

        let result = eval(this._operation.join(''));

        if(last == '%'){
            result /=  100;
            this._operation = [result];
        }else{
            this._operation = [result];

            if(last){
                this._operation.push(last)
            }
        }

        
        
        this.setLastNumberToDisplay();
    }

    pushOperation(value){
        this._operation.push(value);
        if(this._operation.length > 3){    
            this.calc();
        }
    }

    addOperation(value){

        if(isNaN(this.getLastOperation())){

            if(this.isOperator(value)){
                this.setLastOperation(value);
            }else if(isNaN(value)){
                console.log('outra coisa',value)
            }else{
                this.pushOperation(value);
                this.setLastNumberToDisplay();
            }

        }else{

            if(this.isOperator(value)){
                this.pushOperation(value);
            }else{
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));
                this.setLastNumberToDisplay();
            }
        }
    }
    
    //limpa todo o array
    clearAll(){
        this._operation = [];
        this.setLastNumberToDisplay();
    }
    //Remove o ultimo index do array
    clearEntry(){
        this._operation.pop();
        this.setLastNumberToDisplay();
    }
    //seta mensagem de erro no display
    setError(){
        this.displayCalc = 'Error'
    }
 

    //------------- GET AND SETS ----------------
    get displayCalc(){
        return this._displayCalc.innerHTML;
    }  
    set displayCalc(value){
        this._displayCalc.innerHTML = value;
    }

    get displayDate(){
        return this._data.innerHTML;
    }  
    set displayDate(value){
        this._data.innerHTML = value;
    }

    get dataAtual(){
        return new Date();
    }
    set dataAtual(value){
        this._dataAtual.innerHTML = value;
    }

    get displayTime(){
        return this._time.innerHTML;
    }
    set displayTime(value){
        this._time.innerHTML = value;
    }
    
}






















