
// Selectors
const resetButton = document.getElementById("btn");
const winnerScreen = document.querySelector(".winner");
const form = document.querySelector('form');
const tileCount = document.querySelector('input');
const game = document.querySelector('#game');
var turn = 0;
const root = document.documentElement;
///////////////////////////////////////////////////
// Event Listeners
form.addEventListener('click', start);
document.addEventListener('DOMContentLoaded', openMenu);
////////////////////////////////////////////////////////

// Functions
function openMenu() {
    form.classList.add('active');
}

function closeMenu() {
    form.classList.remove('active');
}


let result = [];
function defaultLoad() {
    for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {

            result[i].push('');
            console.log(result);
        }
    }
}
// Create Game, Arrays, Place X/0
function start(event) {
    event.preventDefault();
    if (event.target.classList == 'apply') {
        game.innerHTML = '';
        let tiles = tileCount.value;
        // let result = [];
        for (let i = 0; i < tiles; i++) {
            result[i] = [];
            for (let j = 0; j < tiles; j++) {
                let div = document.createElement('div');
                div.classList.add('tile');
                div.setAttribute('data-src', i + '-' + j);
                game.appendChild(div);
                div.addEventListener('click', actionFunc);
                result[i].push('');

            }
        }
        root.style.setProperty('--opacity', 0)
        switch (tileCount.value) {
            case tileCount.value:

                setTimeout(() => {
                    root.style.setProperty('--opacity', 1)

                }, 100)

                root.style.setProperty('--tileCount', tileCount.value);


                break;
        }
        // const eachTile = document.querySelectorAll('.tile');
        // eachTile.forEach(tile => {

        //     tile.addEventListener('click', actionFunc);
        // })


        function actionFunc(event) {


            if (event.target.className == "tile" && event.target.innerHTML == "") {

                if (turn % 2 == 0) {

                    event.target.innerHTML = "X";
                    event.target.style.color = 'black';

                } else {
                    event.target.innerHTML = "O";
                    event.target.style.color = 'white';

                }
                turn++;

            }

            let dataSrc = this.getAttribute('data-src');
            let dataSplit = dataSrc.split('-');
            let index1 = dataSplit[0] * 1;
            let index2 = dataSplit[1] * 1;
            result[index1][index2] = this.innerHTML;

            checkWinner();
        }
        form.classList.remove('active');
    }


}
// Game Reset After Win
function restart() {
    const tiles = document.getElementsByClassName("tile");
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].innerHTML = null;

    };
    turn = 0;
    winnerScreen.classList.toggle("winner_active");
    openMenu();
};

const allBlocks = document.getElementsByClassName("tile");
// Empty Blocks
function clearFunc() {
    defaultLoad();
    turn = 0;
    for (var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].innerHTML = null;
    };
}

function checkWinner() {
    // Vertical Check
    for (let j = 0; j < tileCount.value; j++) {
        let countX = 0;
        let countO = 0;
        for (let i = 0; i < tileCount.value; i++) {
            if (result[i][j] === 'X') countX++;
            else if (result[i][j] === 'O') countO++;
        }
        if (countX == tileCount.value) winnerScreen.classList.toggle("winner_active");

        if (countO == tileCount.value) winnerScreen.classList.toggle("winner_active");
    }


    // // Horizontal Check
    for (let i = 0; i < tileCount.value; i++) {
        let countX = 0;
        let countO = 0;
        for (let j = 0; j < tileCount.value; j++) {
            if (result[i][j] === 'X') countX++;
            else if (result[i][j] === 'O') countO++;
        }
        if (countX == tileCount.value) winnerScreen.classList.toggle("winner_active");

        if (countO == tileCount.value) winnerScreen.classList.toggle("winner_active");
    }
    // Diagonal Check (Left To Right)
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < tileCount.value; i++) {
        if (result[i][i] == 'X') countX++;

        else if (result[i][i] == 'O') countO++;


    }
    if (countX == tileCount.value) winnerScreen.classList.toggle("winner_active")
    if (countO == tileCount.value) winnerScreen.classList.toggle("winner_active")


    // Diagonal Check (Right To Left)
    let x1 = 0;
    let o2 = 0;
    for (let i = 0; i < tileCount.value; i++) {
        if (result[i][tileCount.value - 1 - i] == "X") {
            x1++;
        }
        else if (result[i][tileCount.value - 1 - i] == 'O') {
            o2++;
        }

        if (x1 == tileCount.value) winnerScreen.classList.toggle("winner_active")
        if (o2 == tileCount.value) winnerScreen.classList.toggle("winner_active")
    }
}

/////////////////////////////////////////////////////////////
