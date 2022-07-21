const newObj = {};

const orderFromMenu = (request) => {
  newObj.consumption.push(request);
};

const createMenu = (objMenu) => {
  newObj.fetchMenu = () => objMenu;
  newObj.consumption = [];
  newObj.order = orderFromMenu;
  newObj.pay = () => {
    let sum = 0;

    for (let index in newObj.consumption) {
      if (objMenu.food[newObj.consumption[index]]) {
        sum += objMenu.food[newObj.consumption[index]];
      } else if (objMenu.drink[newObj.consumption[index]]) {
        sum += objMenu.drink[newObj.consumption[index]];
      }
    }

    return sum + (sum * 0.1);
  };

  return newObj;
};

module.exports = createMenu;
