
const average = (arrayInteger) => {
  if(arrayInteger.length === 0) return undefined;
  let sum = 0;
  for(let i = 0; i < arrayInteger.length; i += 1){
    if (typeof arrayInteger[i] !== 'number'){
      return undefined;
    } else {
      sum += arrayInteger[i];
    }
  }
  return sum;
};

console.log(average([4.6, 3]));

module.exports = average;
