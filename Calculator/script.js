class Calculator{
    constructor(){
        this.result=document.querySelector('.calculator-screen-two');
        this.subRes=document.querySelector('.calculator-screen-one');
        this.numbers=[...document.querySelectorAll('[data-number]')];
        this.options=[...document.querySelectorAll('[data-option]')];
        this.operators=[...document.querySelectorAll('[data-operator]')];
        this.numbers.forEach(number => number.addEventListener('click',this.addNumber));
        this.options.forEach(option => option.addEventListener('click', this.addOption)); 
        this.operators.forEach(operator => operator.addEventListener('click', this.calculate));

        this.calculate = [];
        this.newNumber = false ;
        this.teset = false ; 
        this.lastOperator = null;
        this.vurrentResult = 0;
        this.clear()
    }
    addNumber = (e) =>{
        if(this.teset) this.clear();
        this.numbers = e.target.textContent;

        if(this.result.value === '0') this.result.value = this.number;
    }
}