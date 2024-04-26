// Programmer: Elliot Fahl
// Team Member: Ezinna Nwokenta
// Bolt ID: 33-DF
// Date: 4.24.2024
// Program: Obstacle Course
// Program URL: https://edu.sphero.com/program/16700422/edit

// Elliot Fahl
async function startProgram() {
	setMainLed({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 0), 60, 2	);
	await delay (2);
	
	//Elliot Fahl - Checkpoint 2
	await roll((getHeading() - 35), 60, 2);
	
	
 }