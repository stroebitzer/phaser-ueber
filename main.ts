import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {

	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		parent: 'app',
		// width: 1920,
		// height: 1080
	},

	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [HelloWorldScene],


	// type: Phaser.AUTO,
	// parent: 'app',
	// width: 800,
	// height: 600,
	// physics: {
	// 	default: 'arcade',
	// 	arcade: {
	// 		gravity: { y: 200 },
	// 	},
	// },
	// scene: [HelloWorldScene],
}

export default new Phaser.Game(config)
