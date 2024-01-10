// Inserting the Images
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            } else {
                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    });
}
insertImage();

// Coloring
function coloring() {
    const color = document.querySelectorAll('.box');
    color.forEach(color => {
        getId = color.id;
        arr = Array.from(getId);
        arr.shift();
        aside = eval(arr.pop());
        aup = eval(arr.shift());
        a = aside + aup;

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(23,32,42)';
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(100,75,43)';
        }
    });
}
coloring();

// Function to not remove the same team element
function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {
            document.querySelectorAll('.box').forEach(i2 => {
                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {
                    greenText = i2.innerText;
                    pinkText = i1.innerText;
                    pinkColor = Array.from(pinkText)[0].toString();
                    greenColor = Array.from(greenText)[0].toString();

                    getId = i2.id;
                    arr = Array.from(getId);
                    arr.shift();
                    aside = eval(arr.pop());
                    aup = eval(arr.shift());
                    a = aside + aup;

                    if (a % 2 == 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(240, 201, 150)';
                    }
                    if (a % 2 !== 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(100, 75, 43)';
                    }
                }
            });
        }
    });
}

let tog = 1;
let whiteCastleChance = true;
let blackCastleChance = true;

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        // Player move logic
        if (item.style.backgroundColor == 'pink') {
            // Your existing player move logic
            // ...

            // Check if the game is not over, then make the CPU move
            if (!isGameOver()) {
                makeCPUMove();
            }
        }
    });
});

function makeCPUMove() {
    // Basic CPU move logic
    // ...

    // Update the turn
    tog = tog + 1;

    // Display the updated turn
    if (tog % 2 !== 0) {
        document.getElementById('tog').innerText = "White's Turn";
    } else {
        document.getElementById('tog').innerText = "Black's Turn";
    }

    // Handle any additional logic after CPU move
    // ...

    // Update the UI
    coloring();
    insertImage();

    // Check for game over
    if (isGameOver()) {
        // Handle game over logic
        // ...
    }

    // Prevent multiple selections
    z = 0;
    document.querySelectorAll('.box').forEach(ee => {
        ee.addEventListener('click', function () {
            z = z + 1;
            if (z % 2 == 0 && ee.style.backgroundColor !== 'green' && ee.style.backgroundColor !== 'aqua') {
                coloring();
            }
        });
    });
}

function isGameOver() {
    // Your existing game-over check logic
    // ...

    // Return true or false based on game state
    // ...
}
