class Player extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame, time)
    {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);

        // track the rockets firing status
        this.isFiring = false;
        this.moveSpeed = 10; 
    }


    update(speed)
    {
        if(keyA.isDown || keyLEFT.isDown && this.x >= 88) {  // left movement
            this.x -= speed*(4/5);
        } else if (keyD.isDown || keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width - 28) {  //right movement
            this.x += speed*(4/5);
        }
    }

    // reset player 
    reset()
    {
        this.isFiring = false;
        this.y = 400;
    }
}

