import Player from '../objects/player';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../constants';

export class MainScene extends Phaser.Scene {

	private player: Player;
	private platforms: Phaser.Physics.Arcade.StaticGroup;

	create(): void {
		this.player = new Player(WORLD_WIDTH/2, 100, this);
		this.addPlatforms();

	}

	update(): void {

		this.player.update();

	}

	addPlatforms(){
		//  A simple background for our game
		console.log(WORLD_WIDTH + ", "+WORLD_HEIGHT);
		this.add.image(WORLD_WIDTH, WORLD_HEIGHT, 'sky').setScale(2);
		this.platforms = this.physics.add.staticGroup();

		this.platforms.create(WORLD_WIDTH / 2, WORLD_HEIGHT, 'ground');
		//  Now let's create some ledges
		this.platforms.create(600, 400, 'ground');
		this.platforms.create(50, 250, 'ground');
		this.platforms.create(750, 220, 'ground');
		this.physics.add.collider(this.player.entity, this.platforms);

	}

}
