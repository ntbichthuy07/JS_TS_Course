//Class === instance

class Car {
    // 1 class field
    isEngineOn = false

    // 2 contructor
    constructor(brand, color) {
        this.brand = brand
        this.color = color
    }

    // method
    startEngine = () => {
        this.isEngineOn = true
        console.log(`This car have brand ${this.brand}`);


    }
    displayInfo = () => {
        console.log(` This ${this.brand} has color as ${this.color}`);

    }

}

//use
const car = new Car('toyota', 'black')
car.displayInfo()


class User {
    constructor(email, displayName = 'Customer', role = 'user') {
        this.email = email
        this.displayName = displayName
        this.role = role
    }
    introduce() {
        console.log('this is', this)
        console.log(`${this.displayName} email ${this.email} role ${this.role}`)

    }
}
const user1 = new User('user1@gamil.com')
user1.introduce()

//tinh dong goi
class BankAccount {
    #balance = 0;
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
            console.log(`Deposit success ${amount}`);

        }
    }
    getBalance() {
        return this.#balance
    }
}

const myAccount = new BankAccount()
myAccount.deposit(100)
//console.log(myAccount.#balance) -> Private field '#balance' must be declared in an enclosing class 
console.log(myAccount.getBalance());


//tinh truy tuong
class CoffeeMachine {
    #cleanMachine() {
        console.log('clean machine')

    }
    makeCoffee() {
        this.#cleanMachine()
        console.log('coffe is ready....')
    }
}

const machine = new CoffeeMachine()
machine.makeCoffee()

//3.Tinh ke thua = extend
class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eating`)

    }
}

class Dog extends Animal {
    constructor(name, color) {
        super(name)// call constructor of parent class
        this.color = color
    }

    bark() {
        console.log('Go go');

    }

    // //overwriten
    // eat() {
    //     console.log('This is dog')

    // }
}

const myDog = new Dog('Kitty', 'yellow')
myDog.eat()

//4.Tinh da hinh
class Shape {
    draw() {
        console.log('Shap')

    }
}
class Circle extends Shape {
    draw() {
        console.log('circle')

    }
}

class Square extends Shape {
    draw() {
        console.log('square')

    }
}

const shapes = [new Circle(), new Square(), new Square()]
shapes.forEach(shape => shape.draw())


//Page - Objects
//--BasePage.js => class general actions
//--LoginPage.js -> class Login page
//--HomePage.js -> class homepage
//tests
//--login.test.js // test scenario
//export => import

//File basePage.js
class BasePage {
    constructor(page, url) {
        this.page = pa

        ge
        this.url = url
    }
}
