class Player extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);

        // track the rockets firing status
        this.isFiring = false;
        this.moveSpeed = 10; 
    }


    update()
    {
        // left/right movement
        if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }
    }

    // reset player 
    reset()
    {
        this.isFiring = false;
        this.y = 400;
    }
}

