'use strict'
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let age = document.getElementById('age')
let exp = document.getElementById('exp')
let worker = document.getElementById('worker')

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
    constructor(name, surname, age, exp) {
        this.name = name
        this.surname = surname
        this.age = age
        this.exp = exp
    }
}
class Driver extends Worker {
    constructor(name, surname, age, exp, lic, auto) {
        super(name, surname, age, exp)
        this.lic = lic
        this.auto = auto
    }
}
class Manager extends Worker {
    constructor(name, surname, age, exp, social, literacy) {
        super(name, surname, age, exp)
        this.social = social
        this.literacy = literacy
    }
}
class Programmer extends Worker {
    constructor(name, surname, age, exp, frontend, backend) {
        super(name, surname, age, exp)
        this.frontend = frontend
        this.backend = backend
    }
}
// Собираем данные и формируем таблицу
const dataCol = {
    name: '',
    surname: '',
    age: '',
    exp: '',
    data: [],
    getData: function() {
        name = document.getElementById('name').value
        surname = document.getElementById('surname').value
        age = document.getElementById('age')
        exp = document.getElementById('exp')
    },
    start: function() {
        this.getData()
    }


}
btn.addEventListener('click', () => {dataCol.start(); console.log(dataCol);})








// btn.addEventListener('click', () => {
//     let name = document.getElementById('name').value
//     let surname = document.getElementById('surname').value
//     let age = document.getElementById('age').value
//     let exp = document.getElementById('exp').value

    
// })






