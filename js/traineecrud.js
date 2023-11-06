async function getTraineeById(traineeId) {
	try {
		let response = await fetch(
			`http://20.126.244.168:8080/api/trainee/${traineeId}`,
		)
		let trainee = await response.json()
		console.log(traineeId)
		displayTraineeInfo(trainee)
	} catch (error) {
		displayTraineeNotFound()
		console.error('Error fetching data:', error)
	}
}

async function postTrainee(trainee) {
	try {
		await fetch(`http://20.126.244.168:8080/api/trainee`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(trainee),
		})
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

function displayTraineeInfo(trainee) {
	var traineeInfoDiv = document.getElementById('traineeInfo')
	traineeInfoDiv.innerHTML = `
    <div class="row">
        <div class="col-md-6">
            <h3 class="text-primary">${trainee.naam}</h3>
            <p class="card-text"><strong>Wachtwoord:</strong> ${trainee.wachtwoord}</p>
            <p class="card-text"><strong>E-mail:</strong> ${trainee.email}</p>
            <p class="card-text"><strong>Telefoon:</strong> ${trainee.telefoon}</p>
            <p class="card-text"><strong>Richting:</strong> ${trainee.richting}</p>
            <p class="card-text"><strong>Motivatie:</strong> ${trainee.motivatie}</p>
            <p class="card-text"><strong>Bio:</strong> ${trainee.bio}</p>
        </div>
        <div class="col-md-6">
            <img src="../img/${trainee.foto}" class="img-fluid">
        </div>
    </div>
    
        `
}

function displayTraineeNotFound() {
	var traineeInfoDiv = document.getElementById('traineeInfo')
	traineeInfoDiv.innerHTML = '<p>Trainee not found.</p>'
}

function dummyTrainee() {
	let trainee = {
		// placeholder data
		naam: 'Amar',
		wachtwoord: 'abc123',
		email: 'Amar@youngcapital.nl',
		foto: 'foto',
		telefoon: '+31612345678',
		richting: 'Dev Ops',
		cv: 'cv',
		motivatie: 'Lorem Ipsum',
		bio: 'Lorem ipsum...',
	}
	return trainee
}
