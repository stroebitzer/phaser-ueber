import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {

	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		parent: 'app',
	},
	parent: 'app',
	width: 800,
	height: 600,
	backgroundColor: '#dddddd',
	physics: {
		default: 'arcade',
		arcade: {
			// gravity: { y: 200 },
		},
	},
	scene: [HelloWorldScene],
}

export default new Phaser.Game(config)
