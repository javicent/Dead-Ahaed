// Create game configuration object
let config =
{
    type: Phaser.CANVAS,
    //width: window.innerWidth, //default 640
    width: 640,
    
    height: 719, //default 480

    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },

    scene: [Menu, Tutorial, Play]
};

let game = new Phaser.Game(config); // create main game object

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// define the game settings, initially set for easy mode
game.settings =
{
    playerSpeed: 5,
    fastzombieSpeed: 4,
    gameTimer: 6000,
    gasTimer: 0,
    gas: 8,
    countdown: 0
};

// reserve some keyboard bindings
let keyE, keyH, keyM, keyR, keyLEFT, keyRIGHT, keyA, keyD, keySPACE;
// reserve an inputPlugin binding
let mouse;