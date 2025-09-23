//alert('Hello JS day 1 alert apostrophe')
//alert("Hello JS day 1 alert quotation marks")

console.log('Hello JS log')


//let vs const
//backtick

const shirt = 250000
const quantity = 2
const vat = 0.1
let totalWithoutVAT = shirt * quantity
let totalWithVAT = totalWithoutVAT + totalWithoutVAT * vat
console.log('Total with VAT:', totalWithVAT, 'VND')
console.log(`Total with VAT backtick: ${totalWithoutVAT + totalWithoutVAT * vat} VND`)

//boolean
//undefined -> JS gán
//null -> gán by code
let popupDiscount = null
console.log(typeof (popupDiscount))

if (popupDiscount === null) {
    console.log('No discount');
}

let age
if (age === undefined) {
    console.log('This is undefined value')
}

//-------------------------Homework----------------------------------
//Ex 01: 
const targetURL = 'https://anhtester.com/'
let defaultTimeout = 5000
let isHeadlessMode = true
console.log(`Ex 01: You are opening website ${targetURL} with default time out ${defaultTimeout}ms on Headless Mode is ${isHeadlessMode}`)

//Ex 02:
const testUsername = 'tomsmith'
const testPassword = 'SuperSecretPassword!'

console.log(`Ex 02: Start login with user '${testUsername}' and password '${testPassword}' having ${testPassword.length} charactors`)

//Ex 03
let testResult
let errorMessage = null
console.log(`Ex 03: testResult value is ${testResult} and type is ` + typeof (testResult))
console.log(` errorMessage value is ${errorMessage} and type is ` + typeof (errorMessage))

let isTestPassed = false

if (errorMessage === null) {
    isTestPassed = true
    console.log(`Ex 03: This test is passed: ${isTestPassed} `)
} else
    console.log(`Ex 03: This test is failed: ${isTestPassed} `)

//Ex: 04
const totalTestCase = 50
let numberOfPass = 45
let numberOfFail = 3
const totalExecuteTime = 120.5

let numberOfSkip = totalTestCase - numberOfPass - numberOfFail
let rateOfPass = (numberOfPass / totalTestCase) * 100
let avgExecuteTime = totalExecuteTime / (numberOfFail + numberOfPass)

console.log(`Ex 04: We have overall ${totalTestCase} test cases, ${numberOfPass} test cases passed, ${numberOfFail} testcases failed, ${numberOfSkip} testcases are not run`)
console.log(`rate of pass is ${rateOfPass} percent, average take ${avgExecuteTime} second to execute 1 testcase `)
console.log(`total ${totalExecuteTime} second to run ${totalTestCase - numberOfSkip} testcase`)