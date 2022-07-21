const createStudent = (stringName) => {
  let objectTwoKeys = { name: stringName };
  let goodPerson = () => 'Eita pessoa boa!';
  objectTwoKeys.feedback = goodPerson;
  
  return objectTwoKeys;
};

console.log(createStudent('Pedro o gostosão!'))

module.exports = createStudent;
