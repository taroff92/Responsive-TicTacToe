document.addEventListener('DOMContentLoaded', openMenu);

const resetButton = document.getElementById("btn");
const winnerScreen = document.querySelector(".winner");
const form = document.querySelector('form');
const tileCount = document.querySelector('input');
const game = document.querySelector('#game');
var turn = 0;
const root = document.documentElement;

form.addEventListener('click', start);

function openMenu() {
    form.classList.add('active');
}

function closeMenu() {
    form.classList.remove('active');
}


let result = [];

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
                result[i].push('');
                console.log();
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
        const eachTile = document.querySelectorAll('.tile');
        eachTile.forEach(tile => {

            tile.addEventListener('click', actionFunc);
        })


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
            let index = []; //
            let dataSrc = this.getAttribute('data-src');
            let dataSplit = (dataSrc.split('-'));
            let index1 = dataSplit[0] * 1;
            let index2 = dataSplit[1] * 1;


            console.log(index1);
            console.log(index2);


            // console.log(result);

            result[index1][index2] = this.innerHTML;
            console.log(result);

        }

        // function logData() {
        //     // finish this plz
        //     let index = []; //
        //     index.push(this.getAttribute('data-src').split('-'));
        //     console.log(index);

        //     // result = result[1][0].splice(0, 1, this.innerHTML);
        //     console.log(result);
        //     // console.log(result[0][1]);



        // }


        form.classList.remove('active');
    }


}

function restart() {
    turn = 0;
    const tiles = document.getElementsByClassName("tile");
    winnerScreen.classList.toggle("winner_active");
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].innerHTML = null;

    };
};

const allBlocks = document.getElementsByClassName("tile");

function clearFunc() {

    for (var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].innerHTML = null;
    };
}

function checkWinner() {
    // for (let i = 0; i < tiles; i++) {
    //     result[i] = [];
    //     for (let j = 0; j < tiles; j++) {
    //         let div = document.createElement('div');
    //         div.classList.add('tile');
    //         div.setAttribute('data-src', i + '-' + j);
    //         game.appendChild(div);
    //         result[i].push(div.innerHTML);
    //         console.log(result);
    //     }
    // }
}