function mapToNegativize(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(-1 * array[i])
  }
  return newArr;
}  
