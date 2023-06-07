import { Application, Assets, Sprite } from 'pixi.js';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("sticker", "./animoji.png");
Assets.add("clampy", "./clampy.png");

Assets.load(["sticker","clampy"]).then(() : void=>{
	
	const clampy: Sprite = Sprite.from("sticker");
	console.log ("Hi",clampy.width, clampy.height);

	app.stage.addChild(clampy);
})