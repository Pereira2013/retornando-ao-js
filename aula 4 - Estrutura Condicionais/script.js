var jogador1 = 0;
var jogador2 = 0;
var placar;

// if ternário

jogador1 != -1 && jogador2 != -1 ? console.log('OS jogadores são válidos') 
: console.log('Os jogadores são invalidos');

// usando if

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}
// Usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador 2 marcou ponto!')
    placar = jogador2 > jogador1;
}
// Usando else
else {
    console.log('Ninguém marcou ponto!')
}

// usando switch case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');        
        break;

    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');        
        break;    

    default:
        {
            console.log('Ninguém ganhou')
        }
        break;
}