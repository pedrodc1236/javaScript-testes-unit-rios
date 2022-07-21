/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    expect(getCharacter(undefined)).toBeUndefined();
    const characters = {
      arya: {
        name: 'Arya Stark',
        class: 'Rogue',
        phrases: ['Not today', 'A girl has no name.'],
      },
      brienne: {
        name: 'Brienne Tarth',
        class: 'Knight',
        phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
      },
      melissandre: {
        name: 'Melissandre',
        class: 'Necromancer',
        phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
      },
    };    
    expect(getCharacter('Arya')).toEqual(characters.arya);
    expect(getCharacter('Brienne')).toEqual(characters.brienne);
    expect(getCharacter('Melissandre')).toEqual(characters.melissandre);
    expect(getCharacter('arYa')).toEqual(characters.arya);
    expect(getCharacter('ARYA')).toEqual(characters.arya);    
    expect(getCharacter('bRieNNe')).toEqual(characters.brienne);
    expect(getCharacter('BRIENNE')).toEqual(characters.brienne);
    expect(getCharacter('meliSSANdre')).toEqual(characters.melissandre);
    expect(getCharacter('MELISSANDRE')).toEqual(characters.melissandre);    
    expect(getCharacter('Daenerys')).toBeUndefined();
  });
});
