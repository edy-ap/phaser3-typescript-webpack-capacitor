export default class Player {

	private player: Phaser.Physics.Arcade.Sprite;
	private scene: Phaser.Scene;
	private x;
	private y;
	private controls: Phaser.Input.InputPlugin;
	private cursors;
	constructor(x, y, scene) {
		this.scene = scene;
		this.x = x;
		this.y = y;
		this.controls = this.scene.input;
		//this.controls.on("pointerdown", this.handlePointerDown, this.scene);
		this.cursors = this.scene.input.keyboard.createCursorKeys();
		this.addToScene();
		this.addAnimations();

	}

	get entity() {
		return this.player;
	}

	update(): void {
		//console.log("update");
		if (this.cursors.left.isDown)
		{
			this.player.setVelocityX(-160);
	
			this.player.anims.play('left', true);
		}
		else if (this.cursors.right.isDown)
		{
			this.player.setVelocityX(160);
	
			this.player.anims.play('right', true);
		}
		else
		{
			this.player.setVelocityX(0);
	
			this.player.anims.play('turn');
		}
	
		if (this.cursors.up.isDown && this.player.body.touching.down)
		{
			this.player.setVelocityY(-330);
		}
/* 		console.log(this.controls.x);
		if (this.controls.isDown && this.player.body.touching.down) {
			this.player.setVelocityY(-330);
			this.player.anims.play('right', true);
		} else {
			this.player.anims.play('turn');
		} */

	}

	addToScene(): void {

		this.player = this.scene.physics.add.sprite(this.x, this.y, 'dude');
		this.player.setBounce(0.2);
		this.player.setCollideWorldBounds(true);

	}

	addAnimations(): void {

		//  Our player animations, turning, walking left and walking right.
		this.scene.anims.create({
			key: 'left',
			frames: this.scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		});

		this.scene.anims.create({
			key: 'turn',
			frames: [{ key: 'dude', frame: 4 }],
			frameRate: 20
		});

		this.scene.anims.create({
			key: 'right',
			frames: this.scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		});

	}

	handlePointerDown(pointer: Phaser.Input.Pointer){
		console.log(pointer.x);
	}


}