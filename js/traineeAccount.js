document.addEventListener('DOMContentLoaded', async function () {
	// Set the traineeId to any specific ID you want to retrieve.
	const traineeId = 2

	try {
		const trainee = await getTraineeById(traineeId)
		populateFields(trainee)
	} catch (error) {
		console.error('Error fetching trainee data:', error)
	}
})

function populateFields(trainee) {
	document.getElementById('nameInput').value = trainee.naam
	document.getElementById('wachtwoordInput').value = trainee.wachtwoord
	// document.getElementById("nameInput").value = trainee.naam;
	// document.getElementById("nameInput").value = trainee.naam;
	// document.getElementById("nameInput").value = trainee.naam;
	// document.getElementById("nameInput").value = trainee.naam;
	// document.getElementById("nameInput").value = trainee.naam;
	// document.getElementById("nameInput").value = trainee.naam;
	// document.getElementById("nameInput").value = trainee.naam;

	// populateField("Name", trainee.naam);
	// populateField("Email", trainee.email);
	// populateField("Password", "************");
	// populateField("Telefoonnummer", trainee.telefoon);
	// populateField("Uitstroomrichting", trainee.richting);
	// populateDownloadLink("CV", "../docs/cv.pdf", "Download");
	// populateField("Motivatie", trainee.motivatie);
	// populateField("Bio", trainee.bio);
	// populateImage("Profielfoto", trainee.foto);

	// Setup edit/save listeners for each field

	setupEditSaveListeners('submitBtn', trainee)
}

function populateField(fieldId, value) {
	const fieldText = $(`#${fieldId}Text`)
	fieldText.text(value)
}

async function updateTrainee() {
	// Update the trainee
	try {
		await updateTrainee(trainee.id, updatedData)

		populateFields(updatedTrainee)
		toggleEditSave(fieldId) // Toggle back to display mode
	} catch (error) {
		console.error(`Error updating ${fieldId}:`, error)
	}
}

function toggleEditSave(fieldId) {
	console.log('Toggle Edit Save')
	$(`#${fieldId}Text, #${fieldId}Input`).toggleClass('d-none')
	$(`#edit${fieldId}, #save${fieldId}`).toggleClass('d-none')
}

function populateImage(fieldId, imageUrl) {
	const imageElement = $(`#${fieldId}`)
	imageElement.html(
		`<img src="${imageUrl}" alt="${fieldId}" width="100" height="100" />`
	)
}

function populateDownloadLink(fieldId, downloadUrl, linkText) {
	const downloadLink = $(`#${fieldId}Text`)
	downloadLink.html(`<a href="${downloadUrl}" download>${linkText}</a>`)
}

function selectUitstroomrichting(event) {
	let dropdown = event.target.value
	alert(dropdown)
}
