async function startProgram() {
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(50);
	await delay (2);
	setSpeed(0);
	await roll((getHeading() + 90), 60, 1);
 }