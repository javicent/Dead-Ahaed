class Zombie extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame, pointValue);

        // add object to existing scene
        scene.add.existing(this);

        // store pointValue
        this.points = pointValue;
    }

    update(speed, playerSpeed)
    {
        // move spaceship left
        this.y += (speed * playerSpeed);

        // wraparound from left to right edge
        if(this.y >= game.config.height){
            // min/max value on zombie spawns
            var min = -50;
            var max = -1000;
            this.y = Phaser.Math.Between(min, max);
        }  
    }

    reset()
    {
        this.y = -50;
    }
}