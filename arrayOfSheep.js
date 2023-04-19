function countSheeps(arrayOfSheep) {
  let count=0
  arrayOfSheep.forEach(element => (element===true) ? count++:false)
  return count
}