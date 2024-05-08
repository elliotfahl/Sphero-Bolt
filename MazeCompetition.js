// Programmer: Elliot Fahl
// Team Member: Ezinna Nwokenta
// Bolt ID: 33-DF
// Date: 4.30.2024
// Program: Maze Competition
// Program URL:

async function startProgram() {
	// Programmer: Elliot Fahl - Start Text & Audio Checkpoint Commit - Date:
	
	await speak("Start", true);
	await scrollMatrixText('start', {r: 66, g: 25, b: 90}, 30, true)
	await roll((getHeading() + 0), 60, 3);
	await delay (2);

	// Programmer: Elliot Fahl - Blue LED Checkpoint Commit - Date:
	
	await roll((getHeading() + 0), 75, 2);
	await delay(1);
	setMainLed({ r: 0, g: 0, b: 100 });
	
	// Programmer: 			   - Sound One Checkpoint Commit - Date:



	// Programmer:             - Red LED Checkpoint Commit - Date:



	// Programmer: 			   - Sound Two Checkpoint Commit - Date:



	// Programmer:             - Green LED Checkpoint Commit - Date:



	// Programmer 			   - Purple LED & Sound Three Checkpoint Commit - Date:




	// Programmer 			   - Finish Text & Audio Checkpoint Commit - Date:


}