const calculator = (number1, number2) => {
  const objCalculator = { sum: number1 + number2 };
  objCalculator.mult = number1 * number2;
  objCalculator.div = Math.floor(number1 / number2);
  objCalculator.sub = number1 - number2;
  return objCalculator;
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  } if (type === 'values') {
    return Object.values(object);
  } if (type === 'entries') {
    return Object.entries(object);
  }
};

module.exports = { calculator, arrayGenerator };
