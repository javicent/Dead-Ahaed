// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
    }

    update() {
        // move spaceship left
        this.y += this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.y >= 500) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.y = 0;
    }
}