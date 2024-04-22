// Programmer: Elliot Fahl
// Team Member: Ezinna Nwokenta
// Bolt ID:
// Date: 4.16.2024
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700422/edit


//async function startProgram() {
//	await speak("Hello World", true);
//	setMainLed({ r: 0, g: 0, b: 255});
//	setSpeed(60);
//	await delay (2);
//	setSpeed(0);
// }

/*
*async function startProgram() {

	setMainLed({ r: 21, g: 52, b: 80 });

	await speak("Lebron over Jordan any day", true);

	await delay(1);

	for (var helloSquare = 0; helloSquare < 4; helloSquare++) {

		setMainLed(getRandomColor());

		await Sound.Sports.play(true);

		await roll((getHeading() + 90), 60, 1);

		await delay(1);

	}
*/

	async function startProgram() {
		await roll((getHeading() + 120), 70, 1);
 
