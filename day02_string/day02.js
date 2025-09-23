//includes()
//trim()
//concat()
//toLowerCase()
//toLocalUpperCase()
//replace()
//replaceAll()
//split()
//indexOf()
//slice()

const url = 'https://evt.wellbarrier.com/#returnUrl=/well/454d7568-b7fe-4b8a-af4c-4a894a0ff214/wellbore/'
const startPosition = url.indexOf('well/') + 5
const endPosition = url.indexOf('/wellbore')
const wellId = url.slice(startPosition, endPosition)
console.log(`Well Id is ${wellId}`)

const splitUrl = url.split('/')
console.log(splitUrl)

const spilArr = url.split('/')[5]
console.log(spilArr)

//floor: 4.99 = 4.01 = 4
//cell: 4.99 = 4.01 =5
//round: 4.7 = 5, 4.49 = 4
console.log(Math.round(4.5))

//random interger 0-100
console.log(Math.floor(Math.random() * 101))

// 0*101 = 0
//0.999999*101=100.99999999 -> Math.floor = 100

const random50_100 = Math.floor(Math.random() * (100 - 50 + 1) + 50)
console.log(random50_100)

// 55-50 = 5+1=6 => do rong 6
//0 + 50 = 50
// 1+50 = 51

const priceTextUI = 'Tam tinh: 1,1250,500.75 VND'
const totalPriceTextUI = 'tong cong (da giam): 1,125,450.75 VND'

let price = priceTextUI.replaceAll(',', '').replace('VND', '').replace('Tam tinh: ', '')
console.log(price)

//const rNumber = ...
//console.log(`tester_${rNumber}`)

const randomNumber = Math.floor(Math.random() * 9000) + 1000
console.log(`tester_${randomNumber}`)


const min = 1000
const max = 9999
const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min
console.log(`tester_${randomNumber2}`)

// % chia lay du
//parseInt()
//parseFloat()
//Number()
//Number.isNaN()
//+=
//++x vs x++
//== vs ===

//priority



//-------------------------Homework----------------------------------
//Ex: 01
const productInfo_text = "SKU: APL-IP15-BLK | Tình trạng: Còn hàng (5556 sản phẩm)"
const skuStartPostion = productInfo_text.indexOf("SKU: ") + 5
const skuEndPostion = productInfo_text.indexOf(" |")

let sku = productInfo_text.slice(skuStartPostion, skuEndPostion)
console.log(`sku: ${sku}`)

let stockStart = productInfo_text.indexOf('(') + 1
let stockEnd = productInfo_text.indexOf(' sản phẩm')
let stockNumber = productInfo_text.slice(stockStart, stockEnd)
const quantity = parseInt(stockNumber, 10);
console.log(`Stock: ${stockNumber}`)


//Ex: 02

const productTitle_UI = "  Apple iPhone 15 Pro Max - 256GB (Blue Titanium)  ";
const brandName_API = "apple";
const skuCode = "SKU#8825-A5";
let productTitle = productTitle_UI.toLowerCase().trim().replace('(', '').replace(')', '').replace('- ', '').replaceAll(' ', '-').replace(brandName_API + ' ', '')

let skuCodeconvert = skuCode.replace('-', '').replace('#', '').toLowerCase().replace('sku', 'sku-')

console.log(`${brandName_API}-${productTitle}_${skuCodeconvert}`)
