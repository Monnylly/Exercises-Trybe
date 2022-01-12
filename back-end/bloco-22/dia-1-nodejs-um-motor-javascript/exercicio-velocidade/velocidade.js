const readline = require('readline-sync');

function velocidade () {
  const distancia = readline.questionInt('qual é a distancia percorrida(m): ');
  const tempo = readline.questionInt('tempo gasto(s): ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média é ${velocidadeMedia} m/s`);
}

velocidade();