class Zombie extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);

        // store pointValue
        this.points = pointValue;
    }

    update(speed)
    {
        // move spaceship left
        this.y += (speed * game.settings.spaceshipSpeed);

        // wraparound from left to right edge
        if(this.y >= game.config.height){
            this.y = 0;
        }  
    }

    reset()
    {
        this.y = 0;
    }
}
