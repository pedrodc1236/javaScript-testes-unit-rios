const myCounter = () => {
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var index = 2; index <= 3; index += 1) {
      myArray.push(index);
    }
  }
  return myArray;
};

module.exports = myCounter;
