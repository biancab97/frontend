async function getTraineeById() {
    var traineeId = document.getElementById("traineeId").value;
    try {
        let response = await fetch(`http://localhost:8080/api/trainee/${traineeId}`)
        let trainee = await response.json();
        displayTraineeInfo(trainee)

    } catch (error) {
        displayTraineeNotFound();
        console.error("Error fetching data:", error);
    }
}

async function postTrainee(trainee) {

    try {
        await fetch(`http://localhost:8080/api/trainee`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(trainee)
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayTraineeInfo(trainee) {
    var traineeInfoDiv = document.getElementById("traineeInfo");
    traineeInfoDiv.innerHTML = `
        <h3>${trainee.naam}</h3>
        <p><strong>Wachtwoord:</strong> ${trainee.wachtwoord}</p>
        <p><strong>E-mail:</strong> ${trainee.email}</p>
        <p><strong>Foto:</strong> ${trainee.foto}</p>
        <p><strong>Telefoon:</strong> ${trainee.telefoon}</p>
        <p><strong>Richting:</strong> ${trainee.richting}</p>
        <p><strong>CV:</strong> ${trainee.cv}</p>
        <p><strong>Motivatie:</strong> ${trainee.motivatie}</p>
        <p><strong>Bio:</strong> ${trainee.bio}</p>
    `;
}

function displayTraineeNotFound() {
    var traineeInfoDiv = document.getElementById("traineeInfo");
    traineeInfoDiv.innerHTML = "<p>Trainee not found.</p>";
}

function dummyTrainee() {
    let trainee = { // placeholder data
        naam: "Amar",
		wachtwoord: "abc123",
		email: "Amar@youngcapital.nl",
		foto: "foto",
		telefoon: "+31612345678",
		richting: "Dev Ops",
		cv: "cv",
		motivatie: "Lorem Ipsum",
		bio: "Lorem ipsum..."
    }
    return trainee;
}