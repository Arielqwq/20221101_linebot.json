// 引用 export default，import 自訂變數 from 來源(習慣:後面叫什麼前面叫什麼)
// 如果是引用檔案，必須使用相對路徑，就算同資料夾也要寫 './xxxx'，直接打名字會變成引用套件
// import 都放最上面
import a from './a.js'
// 引用具名匯出，具名的可以自己挑要匯入的東西
// import { 匯出的變數名 }.from 來源
// import { b1, b2 as bb } from './b.js'

// 引用具名匯出
// import * as 自訂變數 from 來源
import * as b from './b.js'
// 同時引用預設和具名
import c, { animals, fruits } from './c.js'
/*
console.log(a)
// console.log(b1, bb)
console.log(b.b1, b.b2)

console.log(c)
console.log(animals, fruits)
*/
// 修改預設匯入(export default) 只會改到這個檔案讀到的值，不會改道原來檔案的變數
// a.a1 = 11
// console.log(a.a1)
// console.log(a.get())

// 無法直接用 = 修改具名匯入的值
// b.b1 = '1111'
// 如果具名匯入的是物件或陣列可以用 key 修改，或用 function 操作。
// 會同時改這個檔案和來源檔案的值
b.b3.firstName = 'asd'
console.log(b.getB())
