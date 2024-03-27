import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}

	preload() {
		this.load.setBaseURL('https://labs.phaser.io')

		this.load.image('sky', 'assets/skies/space3.png')
		this.load.image('logo', 'assets/sprites/phaser3-logo.png')
		this.load.image('red', 'assets/particles/red.png')
	}

	create() {


		// play around section
		this.add.text(0, 0, 'Gugug, der Papa hat was gebastelt', { font: '"Press Start 2P"' });
		this.input.keyboard.on('keydown', (event: KeyboardEvent) => {
			console.log("key was clicked")
			console.log(event.key)
			console.log(event)
		})
		// this.input.keyboard.on('keydown-SPACE', (event:KeyboardEvent) => {
		// 	console.log("space was clicked")
		// 	console.log(event.key)
		// 	console.log(event)
		// })

		this.input.mouse.disableContextMenu()
		this.input.on('pointerup', (event: PointerEvent) => {
			console.log(event)
			console.log("Button " + event.button + " was clicked")
			console.log("X Coordinates " + event.x)
			console.log("Y Coordinates " + event.y)

		})

		this.add.image(400, 300, 'sky')

		const particles = this.add.particles('red')

		const emitter = particles.createEmitter({
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD',
		})

		const logo = this.physics.add.image(400, 100, 'logo')

		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		emitter.startFollow(logo)
	}
}
