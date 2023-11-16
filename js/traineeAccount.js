document.addEventListener("DOMContentLoaded", async function () {
	// Set the traineeId to any specific ID you want to retrieve.
	const traineeId = 25;

	try {
		const trainee = await getTraineeById(traineeId);
		populateFields(trainee);
	} catch (error) {
		console.error("Error fetching trainee data:", error);
	}
});

function populateFields(trainee) {
	// Display trainee info
	document.getElementById("nameInput").value = trainee.naam;
	document.getElementById("wachtwoordInput").value = trainee.wachtwoord;
	document.getElementById("emailInput").value = trainee.email;
	document.getElementById("telefoonnummerInput").value = trainee.telefoon;
	document.getElementById("uitstroomrichtingInput").value = trainee.richting;
	document.getElementById("motivatieInput").value = trainee.motivatie;
	document.getElementById("bioInput").value = trainee.bio;
	document.getElementById("woonplaatsInput").value = trainee.woonplaats;
	// document.getElementById("fotoInput").value = trainee.foto;
	// document.getElementById("cvInput").value = trainee.cv;

	// Event listener for the submit button
	setupEditSaveListeners("submitBtn", trainee);
}

function updateTrainee() {
	// Update the trainee
	try {
		// await updateTrainee(trainee.id, updatedData);

		populateFields(updatedTrainee);
	} catch (error) {
		console.error(`Error updating ${fieldId}:`, error);
	}
}
