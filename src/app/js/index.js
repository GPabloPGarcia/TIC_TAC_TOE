//Variables 
const matriz = [ // MATRIX 3X3
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
const tiles = document.querySelectorAll('.tile');


/**
 * Para cada clique que ocorrer dentro da table, 
 * o código abaixo vai registrar a posição exata, onde ocorreu o click do mouse
 * forEach - Responsável por percorrer todas as posições dentro de um array
 * addEventListener - Responsável por ouvir o evento 
 * 
 * 
 * Regra
 * Com o clique do mouse devemos mapear qual é o elemento que foi clicado e preenche a posição correspondente
 * na matriz
 * 
 */


/** 
 * Quando o player clicar em qualquer uma das casas, o sistema deve preencher a casa clicada com o valor X
 * Quando o player clicar em qualquer uma das casas, o sistema deve preenche a matriz com a posição que foi clicada
 * 
 * */


tiles.forEach(tile => {
    console.log(tile);
    tile.addEventListener('click', (event) => {

        const position = event.target.dataset.position.split('_');

        tile.textContent = 'X';
        const x = position[0];
        const y = position[1];

        console.log(`Raw: ${event.target.dataset.position}`);
        console.log(`Postion: ${position}`);
        console.log(`X: ${x}`);
        console.log(`Y: ${y}`);

        matriz[x][y] = 'X';

        console.log(matriz);
    });
});

