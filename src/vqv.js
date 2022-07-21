const vqv = (name, age) => {
  let mensage = `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  if (typeof name === 'string' && typeof age === 'number') {
    return mensage;
  } 
    return undefined;
};

module.exports = vqv;
