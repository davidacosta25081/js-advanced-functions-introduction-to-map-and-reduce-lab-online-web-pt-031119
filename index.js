function mapToNegativize(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(-1 * array[i])
  }
  return newArr;
}


function mapToNoChange(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i])
  }
  return newArr;
}

function mapToDouble(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push( array[i] * 2 )
  }
  return newArr;
}


function mapToSquare(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push( array[i] ** 2 )
  }
  return newArr;
}

function reduceToTotal(array) {
  for (let i = 0; i < array.length; i++) {
    let total += array[i];
  }
  return total;
}


function reduceToTotal(array, startingPoint) {
  for (let i = 0; i < array.length; i++) {
     startingPoint += array[i];
  }
  return startingPoint;
}
