  class CalcController {

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalc = document.querySelector('#display');
        this._date = document.querySelector('#data');
        this._time = document.querySelector('#hora');
        this._displayCalc;
        this._currentDate;
        this.initialize();
    }
    
    initialize(){

        setInterval(()=>{
            this.Date = this.currentDate.toLocaleDateString(this._locale);
            this.Time = this.currentDate.toLocaleTimeString(this._locale);
        }, 1000)

    }

    //Métodos DisplayTime
    get Time(){
        return this._time.innerHTML;
    }
    set Time(value) {
        return this._time.innerHTML = value;
    }

    //Métodos DisplayDate
    get Date(){
        return this._date.innerHTML;
    }
    set Date(value) {
        return this._date.innerHTML = value;
    }

    //Métodos DisplayCalc
    get displayCalc(){
        return this._displayCalc.innerHTML;
    }
    set displayCalc(value){
        this._displayCalc.innerHTML = value; 
    }

    //Métodos CurrentDate
    get currentDate() {
        return new Date();
    }
    set currentDate(value) {
        this._currentDate = value;
    }

}