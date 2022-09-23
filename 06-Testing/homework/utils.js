function sumArray(array, num){
  for (let i = 0; i < array.length -  1; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[i] + array[j] === num) return true;
    }
  }
  return false;
}

function pluck(array, prop) {
  return array.map(e => e[prop]);
}

module.exports = {
  sumArray,
  pluck
}