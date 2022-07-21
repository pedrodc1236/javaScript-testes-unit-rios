/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle('1')).toBeUndefined();
    expect(typeof circle(1)).toEqual('object');
    expect(Object.keys(circle(5))).toHaveLength(3);
    expect(circle()).toBeUndefined();
    expect(circle(2).circumference).toBeCloseTo(12.56);
    expect(circle(3).area).toBeCloseTo(28.26)
    expect(Object.values(circle(3))).toEqual([3, 28.259999999999998, 18.84]);
  });
});
