const createMenu = require("../src/restaurant");

describe("10 - Implemente os casos de teste e a função `createMenu`", () => {
  it("Verifica se a função `createMenu` tem o comportamento esperado", () => {

    const menu = createMenu({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    });
    expect(typeof menu).toEqual("object");
    expect(typeof menu.fetchMenu).toEqual("function");

    expect(Object.keys(menu.fetchMenu())).toEqual([
      "food",
      "drink"
      ]);

    expect({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    }).toEqual(menu.fetchMenu());
   
    expect(menu.consumption).toEqual([]);

    menu.order('coxinha')
    expect(menu.consumption).toEqual(['coxinha']);
    menu.order("agua");
    menu.order("sopa");
    menu.order("cerveja");
    expect(menu.consumption).toEqual(['coxinha', 'agua', 'sopa', 'cerveja']);
   menu.order("cerveja");
    expect(menu.consumption).toEqual(['coxinha', 'agua', 'sopa', 'cerveja', 'cerveja']); 
    expect(menu.pay()).toBeCloseTo(34.65);
  });
});
