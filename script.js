'use strict'
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let age = document.getElementById('age')
let exp = document.getElementById('exp')
let worker = document.getElementById('worker')
const tableElem = document.getElementById('table')
const tableData = document.getElementById('table-data')
let skill = []
let id = ''
const tableArr = JSON.parse(localStorage.getItem('tableArr')) || []

const btn = document.getElementById('send')

//Объект свойств профессий
const profArr = {
    driver: ['Права', 'Наличие авто'],
    manager: ['Комуникабельность', 'Грамотность'],
    program: ['Frontend', 'Backend'],
}
// Классы сотрудников
class Worker {
    constructor(name, surname, age, exp, worker, arr = []) {
        this.name = name
        this.surname = surname
        this.age = age
        this.exp = exp
        this.worker = worker
        this.arr = arr
    }

}
class Driver extends Worker {
    constructor(name, surname, age, exp, worker, arr, lic, auto) {
        super(name, surname, age, exp, worker, arr)
        this.lic = lic
        this.auto = auto
    }
    get skill() {return this.lic || this.auto}
    set skill(value) {this.lic = value ; this.auto = value}

}
class Manager extends Worker {
    constructor(name, surname, age, exp, worker, arr, social, literacy) {
        super(name, surname, age, exp, worker, arr)
        this.social = social
        this.literacy = literacy
    }
    get skill() {return this.social || this.literacy}
    set skill(value) {this.social = value ; this.literacy = value}
}
class Programmer extends Worker {
    constructor(name, surname, age, exp, worker, arr, frontend, backend) {
        super(name, surname, age, exp, worker, arr)
        this.frontend = frontend
        this.backend = backend
    }
    get skill() {return this.frontend || this.backend}
    set skill(value) {this.frontend = value ; this.backend = value}
    
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
// Собираем данные

const data = {
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
//Обрабатываем события при нажатии кнопки
btn.addEventListener('click', () => {
    data.start()

    if (id == 'driver') {
        const driver = new Driver (name, surname, age, exp, worker)
        driver.lic = skill[0]
        driver.auto = skill[1]
        driver.arr.push(driver.lic, driver.auto)
        tableArr.push(driver)
        console.log(tableArr)
    }
    if (id == 'manager') {
        const manager = new Manager (name, surname, age, exp, worker)
        manager.social = skill[0]
        manager.literacy = skill[1]
        manager.arr.push(manager.social, manager.literacy)
        tableArr.push(manager)
        console.log(tableArr)
    }
    if (id == 'program') {
        const programmer = new Programmer (name, surname, age, exp, worker)
        programmer.frontend = skill[0]
        programmer.backend = skill[1]
        programmer.arr.push(programmer.frontend, programmer.backend)
        tableArr.push(programmer)
        console.log(tableArr)
    }
    localStorage.setItem('tableArr', JSON.stringify(tableArr))
    
})
//Формируем таблицу








