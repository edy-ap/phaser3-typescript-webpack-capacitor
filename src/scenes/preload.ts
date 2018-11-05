export class PreloadScene extends Phaser.Scene {

	preload(): void {
		this.load.crossOrigin = 'anonymous';
		this.load.maxParallelDownloads = Infinity;

		this.load.image('sky', 'assets/sprites/sky.png');
		this.load.image('ground', 'assets/sprites/platform.png');
		this.load.image('star', 'assets/sprites/star.png');
		this.load.image('bomb', 'assets/sprites/bomb.png');
		this.load.spritesheet('dude', 'assets/sprites/dude.png', { frameWidth: 32, frameHeight: 48 });
	}	

	create(): void {
		this.scene.start('GameTitle');
	}

}
