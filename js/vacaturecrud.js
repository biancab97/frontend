async function getVacatureById() {
    var vacatureId = document.getElementById("vacatureId").value;
    try {
        let response = await fetch(`http://localhost:8080/api/vacature/${vacatureId}`)
        let vacature = await response.json();
        displayVacatureInfo(vacature)

    } catch (error) {
        displayVacatureNotFound();
        console.error("Error fetching data:", error);
    }
}

async function postVacature(vacature) {

    try {
        await fetch(`http://localhost:8080/api/vacature`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(vacature)
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayVacatureInfo(vacature) {
    var vacatureInfoDiv = document.getElementById("vacatureInfo");
    vacatureInfoDiv.innerHTML = `
        <h3>${vacature.titel}</h3>
        <p><strong>Standplaats:</strong> ${vacature.standplaats}</p>
        <p><strong>Omschrijving:</strong> ${vacature.omschrijving}</p>
        <p><strong>Vereisten:</strong> ${vacature.vereisten}</p>
        <p><strong>Uren:</strong> ${vacature.uren}</p>
        <p><strong>Duur:</strong> ${vacature.duur}</p>
        <p><strong>Publicatie Datum:</strong> ${vacature.publicatieDatum}</p>
        <p><strong>Start Datum:</strong> ${vacature.startDatum}</p>
        <p><strong>Eind Datum:</strong> ${vacature.eindDatum}</p>
    `;
}

function displayVacatureNotFound() {
    var vacatureInfoDiv = document.getElementById("vacatureInfo");
    vacatureInfoDiv.innerHTML = "<p>Vacature not found.</p>";
}

function dummyVacature() {
    let vacature = { // placeholder data
        standplaats: "Amsterdam",
        omschrijving: "Lorem Ipsum...",
        vereisten: "Java certificaat",
        uren: 40,
        duur: "5",
        titel: "Java",
        publicatieDatum: "2023-12-31",
        startDatum: "2023-12-31",
        eindDatum: "2023-12-31"
    }
    return vacature;
}