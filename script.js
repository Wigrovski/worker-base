'use strict'

class Worker {
    constructor(name, surname, age, exp, arr = []) {
        this.name = name
        this.surname = surname
        this.age = age
        this.exp = exp
        this._arr = arr
    }
    get arr() {
        return this._arr
    }
    set arr(value) {
        this.arr.push(value)
    }
}

class Driver extends Worker {
    constructor(name, surname, age, exp, arr, lic, auto) {
        super(name, surname, age, exp, arr)
        this.lic = lic
        this.auto = auto
    }
}

const wrk = new Worker()
const drv = new Driver()

drv.lic = 'yes'
drv.arr = 'Ivan'

console.log(drv.arr);