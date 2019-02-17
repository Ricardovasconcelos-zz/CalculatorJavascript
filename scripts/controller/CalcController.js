  class CalcController {

    constructor(){
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
                console.log(button.className.baseVal.replace('btn-',''))
                
            });
            this.addEventListenerAll(button, 'mouseover mouseup mousedown', e =>{
                button.style.cursor = "pointer"
            })
        });
    }

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


todosEventos(elemento, evento, funcao){
    evento.split(' ').forEach(evento =>{
        elemento.addEventListener(evento, funcao, false)
    });
};

this.todosEventos(button, 'click drag', e ={
    console.log('meu nome é ricardo')
})



















