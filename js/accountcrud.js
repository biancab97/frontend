// JavaScript for editing and saving fields in "Persoonsgegevens" and "Profiel" sections
function toggleEditSave(fieldId) {
  $(`#${fieldId}Text`).toggleClass("d-none");
  $(`#${fieldId}Input`).toggleClass("d-none");
  $(`#edit${fieldId}`).toggleClass("d-none");
  $(`#save${fieldId}`).toggleClass("d-none");
}

function saveField(fieldId) {
  console.log("test")
  const newValue = $(`#${fieldId}Input`).val();
  $(`#${fieldId}Text`).text(newValue);
  toggleEditSave(fieldId); // Hide the input and show the text
}

// Edit and Save Name
$("#editName, #saveName").click(function () {
  toggleEditSave("Name");
});

// Edit and Save Email
$("#editEmail, #saveEmail").click(function () {
  toggleEditSave("Email");
});

// Edit and Save Password
$("#editPassword, #savePassword").click(function () {
  toggleEditSave("Password");
});

// Edit and Save Adres
$("#editAdres, #saveAdres").click(function () {
  toggleEditSave("Adres");
});

// Edit and Save Telefoonnummer
$("#editTelefoonnummer, #saveTelefoonnummer").click(function () {
  toggleEditSave("Telefoonnummer");
});

// Edit and Save Uitstroomrichting
$("#editUitstroomrichting, #saveUitstroomrichting").click(function () {
  toggleEditSave("Uitstroomrichting");
});

// Edit and Save Bio
$("#editBio, #saveBio").click(function () {
  toggleEditSave("Bio");
});

// Edit and Save Woonplaats
$("#editWoonplaats, #saveWoonplaats").click(function () {
  toggleEditSave("Woonplaats");
});