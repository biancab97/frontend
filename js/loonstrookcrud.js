async function getLoonstrookById() {
    var opdrachtId = document.getElementById("loonstrookId").value;
    try {
        let response = await fetch(`http://localhost:8080/api/loonstrook/${opdrachtId}`)
        let loonstrook = await response.json();
        displayLoonstrookInfo();
        return loonstrook
    } catch (error) {
        displayLoonstrookNotFound();
        console.error("Error fetching data:", error);
    }
}

async function postLoonstrook(loonstrook) {

    try {
        await fetch(`http://localhost:8080/api/loonstrook`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loonstrook)
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayLoonstrookInfo(loonstrook) {
    var loonstrookInfoDiv = document.getElementById("loonstrookInfo");
    loonstrookInfoDiv.innerHTML = `
        <p><strong>salarisBedrag:</strong> ${loonstrook.salarisBedrag}</p>
        <p><strong>periode:</strong> ${loonstrook.periode}</p>
        <p><strong>uitbetaald:</strong> ${loonstrook.uitbetaald}</p>
    `;
}

function displayLoonstrookNotFound() {
    var loonstrook = document.getElementById("loonstrookInfo");
    loonstrook.innerHTML = "<p>Loonstrook not found.</p>";
}

function dummyLoonstrook() {
    let loonstrook = { // placeholder data
        salarisBedrag: 2500,
        periode: "2023-12-31",
        uitbetaald: true
    }
    return loonstrook;
}
