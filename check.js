var arr = [
    [2, 2, 2, 1],
    [2, 2, 2, 1],
    [2, 3, 1, 2],
    [1, 2, 3, 4]
]

let horizontal = 0;
let vertical = 0;
for (var i = 0; i < arr.length; i++) {

    horizontal = 0;

    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] % 2 === 0) {
            horizontal++;
            if (horizontal === arr[i].length) {
                console.log('Horizontal win');
            }

        }
        if (arr[i][0] % 2 === 0) {
            vertical++;
            console.log(vertical);
            if (vertical === arr.length) {
                console.log('Vertical win');
                vertical = 0;

            }
        }



    }

}