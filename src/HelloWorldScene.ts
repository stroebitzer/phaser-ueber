import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {

	bg1x = 0
	bg2x = 2000
	trees1!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
	trees2!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody

	constructor() {
		super('hello-world')
	}

	preload() {
		this.load.image('trees', 'assets/background.png')
		// this.cameras.main.setBackgroundColor()
	}

	create() {
		this.trees1 = this.physics.add.image(this.bg1x, 300, 'trees')
		this.trees2 = this.physics.add.image(this.bg2x, 300, 'trees')
	}

	update()  {
		this.bg1x = this.bg1x - 1
		this.trees1.setX(this.bg1x)
		if (this.bg1x<=-2000){
			this.bg1x = 2000
		}	
		this.bg2x = this.bg2x - 1
		this.trees2.setX(this.bg2x)		
		if (this.bg2x<=-2000){
			this.bg2x = 2000
		}	
	}
}
