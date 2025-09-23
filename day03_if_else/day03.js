//-------------------------Homework----------------------------------
//Ex 01

//Testcase 01: 
// let isMaintain = false
// let inStock = 20
// let quantity = 1
// let amount = 500
// let orderHistory = 10
// let isGlobalShip = false
// let isVip = true
// let numberOfOrderProcessedInDay = 152

// Testcase 02

// let isMaintain = false
// let inStock = 1
// let quantity = 2
// let amount = 500
// let orderHistory = 2
// let isGlobalShip = false
// let isVip = true
// let numberOfOrderProcessedInDay = 152

// // Testcase 03
// let isMaintain = false
// let inStock = 20
// let quantity = 2
// let amount = 1500
// let orderHistory = 2
// let isGlobalShip = false
// let isVip = true
// let numberOfOrderProcessedInDay = 152

// // Testcase 04
// let isMaintain = false
// let inStock = 20
// let quantity = 2
// let amount = 300
// let orderHistory = 2
// let isGlobalShip = true
// let isVip = false
// let numberOfOrderProcessedInDay = 152

// // Testcase 05
// let isMaintain = true
// let inStock = 20
// let quantity = 2
// let amount = 300
// let orderHistory = 2
// let isGlobalShip = true
// let isVip = false
// let numberOfOrderProcessedInDay = 152

// Testcase 06
let isMaintain = false
let inStock = 20
let quantity = 2
let amount = 1000
let orderHistory = 3
let isGlobalShip = true
let isVip = true
let numberOfOrderProcessedInDay = 152

if (isMaintain) {
    console.log('the system is maintaince')
} else {
    if (quantity > inStock) {
        console.log('cancel order due to out of stock')
    } else {
        inStock--
        console.log(`stock updated: ${inStock}`)

        if ((amount > 1000 && orderHistory < 3) || (!isVip && isGlobalShip)) {
            console.log(`Order need to verification`)
        } else {
            console.log('Order is sent to packing department')
            numberOfOrderProcessedInDay++
        }
        console.log(`number of order proccessed in day: ${numberOfOrderProcessedInDay}`)
    }
}

// Ex 02

// //Testcase 01
// let isSystemDisable = false
// let waterBottle_Liter = 100
// let pesticideSprayer_mL = 200
// let sprayNumber = 2
// let tempature = 25
// let soilMoisture = 50
// let humidity = 70
// let isPesticideFound = false

//Testcase 02
// let isSystemDisable = false
// let waterBottle_Liter = 100
// let pesticideSprayer_mL = 200
// let sprayNumber = 2
// let tempature = 25
// let soilMoisture = 25
// let humidity = 70
// let isPesticideFound = false

//Testcase 03
// let isSystemDisable = false
// let waterBottle_Liter = 100
// let pesticideSprayer_mL = 200
// let sprayNumber = 2
// let tempature = 29
// let soilMoisture = 50
// let humidity = 85
// let isPesticideFound = false

// //Testcase 04
// let isSystemDisable = false
// let waterBottle_Liter = 100
// let pesticideSprayer_mL = 200
// let sprayNumber = 2
// let tempature = 25
// let soilMoisture = 50
// let humidity = 70
// let isPesticideFound = true

//Testcase 05
// let isSystemDisable = false
// let waterBottle_Liter = 100
// let pesticideSprayer_mL = 200
// let sprayNumber = 2
// let tempature = 42
// let soilMoisture = 20
// let humidity = 70
// let isPesticideFound = false

// //Testcase 06.1
// let isSystemDisable = false
// let waterBottle_Liter = 4
// let pesticideSprayer_mL = 200
// let sprayNumber = 2
// let tempature = 25
// let soilMoisture = 25
// let humidity = 70
// let isPesticideFound = false

// //Testcase 06.2
// let isSystemDisable = false
// let waterBottle_Liter = 4
// let pesticideSprayer_mL = 0
// let sprayNumber = 2
// let tempature = 25
// let soilMoisture = 25
// let humidity = 70
// let isPesticideFound = true

// //Testcase 07
let isSystemDisable = true
let waterBottle_Liter = 100
let pesticideSprayer_mL = 200
let sprayNumber = 2
let tempature = 25
let soilMoisture = 50
let humidity = 70
let isPesticideFound = false

if (isSystemDisable) {
    console.log(`The system is out of service`)
} else if (tempature > 40) {
    console.log(`Cooling and misting system is on`)
    console.log(`Warning message sent`)

} else if (soilMoisture < 30 && waterBottle_Liter > 5) {
    console.log(`Irrigation system is on`)
    waterBottle_Liter -= 10
    sprayNumber++

    console.log(`Water Bottle updated: ${waterBottle_Liter}`)
    console.log(`number of spray updated: ${sprayNumber}`)

} else if (isPesticideFound || (humidity > 80 && tempature > 28)) {
    console.log(`Apply pesticide spray`)
    pesticideSprayer_mL -= 50

    console.log(`Pesticide sprayer updated: ${pesticideSprayer_mL}`)


    if (pesticideSprayer_mL <= 0) {
        console.log(`Pesticide sprayder is out of water`)
    }
} else {
    console.log(`All metrics are stable`)
}

//-------------------------------------------------------------
// const xxx = condition ? valueIfTrue : valueIfFalse
const isLoggedIn = true
const msg = isLoggedIn ? 'User is currently logged in' : 'User is logged out'
console.log(msg)

