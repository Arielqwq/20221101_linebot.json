const a1 = 1
const a2 = 2
/*
// 一個檔案只能有一個export default，匯出位置隨意，匯出一定要放最後面(?)
// 後面只能放一個，一個以上大括號
export default {
  a1, a2
}
*/
const get = () => {
  return { a1, a2 }
}
export default {
  a1, a2, get
}