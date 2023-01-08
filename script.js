'use strict'
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let age = document.getElementById('age')
let exp = document.getElementById('exp')
let worker = document.getElementById('worker')
let skill = []
let id = ''


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
    get lic() {return this.lic}
    set auto(value) {this.auto = value}
}
class Manager extends Worker {
    constructor(name, surname, age, exp, worker, social, literacy) {
        super(name, surname, age, exp, worker)
        this.social = social
        this.literacy = literacy
    }
    get social() {return this.social}
    set literacy(value) {this.literacy = value}
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

    if (dataCol.id == 'driver') {
        const person = new Driver (name, surname, age, exp, worker)
        person.lic = skill[0]
        person.auto = skill[1]
        console.dir(person)
    }
    if (dataCol.id == 'manager') {
        const person = new Manager (name, surname, age, exp, worker)
        person.social = skill[0]
        person.literacy = skill[1]
        console.dir(person)
    }
    if (dataCol.id == 'program') {
        const person = new Manager (name, surname, age, exp, worker)
        person.front = skill[0]
        person.backend = skill[1]
        console.dir(person)
    }
    console.log(this.driver);
})


const dataCol = {
    name: '',
    surname: '',
    age: '',
    exp: '',
    worker: '',
    skill: [],
    id: '',

    start: function() {
        this.getData()
        this.getSelect()
        this.getCheck()
        console.log(worker)
        console.log(name)
        console.log(surname)
        console.log(age)
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
        for (let key of option) {
            if (key.selected) {
                id = key.value
                worker = key.textContent
            }            
        }
    },
    getCheck: function() {
        const prof = document.getElementById('prof')
        const inputItem = prof.querySelectorAll('input')
        for (let key of inputItem) {
            if (key.checked){
                skill.push(key.value)
            }
        }
    }
}






