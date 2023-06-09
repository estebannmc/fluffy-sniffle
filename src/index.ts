import { Application, Assets, Sprite } from 'pixi.js';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

window.addEventListener("resize", ()=>{
	console.log("Escalado!");
	const escalaX = window.innerWidth / app.screen.width;
	const escalaY = window.innerHeight / app.screen.height;
	const escala = Math.min(escalaX , escalaY);
	
	const gameHeight = app.screen.height * escala;
	const gameWidht = app.screen.width * escala;

	const marginHoriz = (window.innerWidth - gameWidht) / 2;
	const marginVert = (window.innerHeight - gameHeight) / 2; 
	
	app.view.style.width = gameWidht + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHoriz + "px";
	app.view.style.marginLeft = marginVert + "px";

	app.view.style.marginTop = marginVert + "px";
	app.view.style.marginBottom = marginVert + "px";

})

Assets.add("sticker", "./animoji.png");
Assets.add("clampy", "./clampy.png");

Assets.load(["sticker","clampy"]).then(() : void=>{
	
	const clampy: Sprite = Sprite.from("sticker");
	console.log ("Hi",clampy.width, clampy.height);

	app.stage.addChild(clampy);
})