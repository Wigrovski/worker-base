'use strict'
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let age = document.getElementById('age')
let exp = document.getElementById('exp')
let worker = document.getElementById('worker')
let skill = []

const btn = document.getElementById('send')

//Объект свойств профессий
const profArr = {
    driver: ['Права', 'Наличие авто'],
    manager: ['Комуникабельность', 'Грамотность'],
    program: ['Frontend', 'Backend'],

}
//Обрабатываем выбор работников
worker.addEventListener('change', (e) => {
    if (e.target.value == 'driver') {createCheckBox(profArr.driver)}
    if (e.target.value == 'manager') {createCheckBox(profArr.manager)}
    if (e.target.value == 'program') {createCheckBox(profArr.program)}
})
//Создаем чекбоксы на основе выбранного
function createCheckBox(item) {
    const prof = document.getElementById('prof')
    const inputItem = prof.querySelectorAll('input')
    const labelItem = prof.querySelectorAll('label')

    for (let i = 0; i < inputItem.length && labelItem.length; i++) {
        inputItem[i].remove()
        labelItem[i].remove()
    }    
    for (let i = 0; i < item.length; i++) {
        const checkbox = document.createElement('input')
        const label = document.createElement('label')
        checkbox.type = 'checkbox'
        checkbox.value = item[i]
        checkbox.id = [i]
        
        label.htmlFor = [i]
        label.textContent = item[i]

        prof.append(checkbox)
        prof.appendChild(label)
    }
}

// Классы сотрудников
class Worker {
    constructor(name, surname, age, exp, worker, arr = [] ) {
        this.name = name
        this.surname = surname
        this.age = age
        this.exp = exp
        this.worker = worker
        this.arr = arr
    }
    get firstName() { 
        return  this.arr
    }
    set firstName(val) { 
        this.arr.push(val)
    }

}
class Driver extends Worker {
    constructor(name, surname, age, exp, worker, lic, auto) {
        super(name, surname, age, exp, worker)
        this.lic = lic
        this.auto = auto
    }
}
class Manager extends Worker {
    constructor(name, surname, age, exp, worker, social, literacy) {
        super(name, surname, age, exp, worker)
        this.social = social
        this.literacy = literacy
    }
}
class Programmer extends Worker {
    constructor(name, surname, age, exp, worker, frontend, backend) {
        super(name, surname, age, exp, worker)
        this.frontend = frontend
        this.backend = backend
    }
    get front() {return this.frontend}
    set front(value) {this.frontend = value}
    
}
// Собираем данные и формируем таблицу

btn.addEventListener('click', () => {
    dataCol.start()
    const dev = new Programmer (name, surname, age, exp, worker)
    dev.front = skill[0]
    console.log(dev);

    })



const dataCol = {
    name: '',
    surname: '',
    age: '',
    exp: '',
    worker: '',
    skill: [],
    start: function() {
        this.getData()
        this.getSelect()
        this.getCheck()
        console.log(worker)
        console.log(skill)
    },
    getData: function() {
        name = document.getElementById('name').value
        surname = document.getElementById('surname').value
        age = document.getElementById('age').value
        exp = document.getElementById('exp').value
    },
    getSelect: function() {
        worker = document.getElementById('worker')
        const option = worker.querySelectorAll('option')
        console.log(option);
        for (let key of option) {
            if (key.selected){
                worker = key.textContent
            }            
        }
    },
    getCheck: function() {
        const prof = document.getElementById('prof')
        const inputItem = prof.querySelectorAll('input')
        const labelItem = prof.querySelectorAll('label')
        for (let key of inputItem) {
            if (key.checked){
                skill.push(key.value)
            }
        }
    }
}






