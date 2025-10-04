// function getUserId() {
//     //hua tra ve so 1 sau 1s
//     return new Promise(resolve => setTimeout(() => resolve(1), 1000))
// }
// function getUserFromId(id) {
//     return new Promise(resolve => setTimeout(() => {
//         resolve({ id: id, name: 'Ana' })
//     }, 1000))
// }

// async function getUserInfo() {
//     console.log('Start...');
//     const id = await getUserId()
//     const userInfo = await getUserFromId(id);
//     console.log(userInfo.name)


// }

// getUserInfo()

// async function getData() {
//     console.log('Loading...');
//     //fetch tuong tu postman
//     const result = await fetch('url')
//     const data = await result.json()
//     console.log('loaded')
//     return data


// }

// async function getBookList() {
//     try {
//         console.log('Start calling API');
//         const response = await fetch('https://api.anhtester.com/api/books')
//         if (!response.ok) {
//             throw new Error(`HTTP errror! status:${response.status}`)
//         }
//         const data = await response.json()
//         const bookData = data.response
//         const first50Books = bookData.slice(0, 50)
//         console.log('50 sach dau tien:', first50Books);
//         console.log('array lenght:', first50Books.length)
//         return first50Books

//     } catch (error) {
//         console.log('Error wwhen calling API', error.message)
//         throw error
//     }
// }


// async function Example() {
//     const books = await getBookList()
//     const bookOnSale = books.filter(book => book.status === 1)
//     console.log(`Status =1: `, bookOnSale)

//     const bookOnPrice = books.filter(book => book.price > 500)
//     console.log('book wwith price 500:', bookOnPrice)

// }

// Example()


// class APIService {
//     constructor(baseUrl) {
//         this.baseUrl = baseUrl
//     }

//     async fetchData(endPoint) {

//     }
//     async main() {

//     }
// }

import { PI, sum } from "../utils/math.js";
console.log(PI)
console.log(sum(5, 8))
