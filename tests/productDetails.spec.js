const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {

    expect(typeof productDetails).toEqual('function');
    expect(typeof productDetails('Alcool gel', 'Máscara')).toEqual('object');
    expect(productDetails().length).toEqual(2);
    expect(typeof productDetails()[0]).toEqual('object');
    expect(typeof productDetails()[1]).toEqual('object');
        expect(productDetails('firstProduct', 'secondProduct')[0]).not.toEqual(productDetails('firstProduct', 'secondProduct')[1]);
    expect(productDetails('firstProduct, secondProduct')[1]).not.toEqual(productDetails('firstProduct', 'secondProduct')[0]);
    expect(productDetails()[0].details.productId).toMatch(/123/);
    expect(productDetails()[1].details.productId).toMatch(/123/);
  });
});
