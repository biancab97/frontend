const backendPath = "https://match-backend.azurewebsites.net/";
// const backendPath = "http://localhost:8080/";

const profile = localStorage.getItem("role");

const loadNavBar = () => {
<<<<<<< HEAD
	const navbarContainer = document.createElement('nav')

	navbarContainer.classList.add(
		'navbar',
		'navbar-expand-lg',
		'navbar-light',
		'bg-primary',
		'fixed-top'
	)
=======
	const navbarContainer = document.createElement("nav");

	navbarContainer.classList.add(
		"navbar",
		"navbar-expand-lg",
		"navbar-light",
		"bg-primary",
		"fixed-top"
	);
>>>>>>> main

	// Define the HTML code for the navigation bar

<<<<<<< HEAD
	let url = window.location.href
	console.log('profiel: ', profile)
	if (profile === 'ROLE_OPDRACHTGEVER') {
		console.log('Opdrachtgever')
		navbarContainer.innerHTML = `
=======
  let url = window.location.href
  console.log("profiel: ", profile)
  if (profile === 'ROLE_OPDRACHTGEVER') {
    console.log('Opdrachtgever')
    navbarContainer.innerHTML = `

>>>>>>> main
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <a class="navbar-brand" href="homeOpdracht.html">
      <img
        src="../icons/logo.png"
        width="100"
        height="30"
        class="d-inline-block align-top mx-3"
        alt="Your Logo"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link text-white" href="accountOpdrachtgever.html">Mijn Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="homeOpdracht.html">Vacatures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="OpdrachtgeverMatches.html">Matches</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="https://dataproject.azurewebsites.net/leeftijd" target="_blank">Statistieken</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="berichten.html">Berichten</a>
        </li>
      </ul>
    </div>
  </nav>
  
    <style>
      .navbar-nav .nav-item:hover {
        background-color: #6d6d6d; /* Change the background color on hover */
      }
    </style>
    `
<<<<<<< HEAD
	} else if (profile === 'ROLE_TRAINEE') {
		console.log('Trainee')
		navbarContainer.innerHTML = `
=======
  } else if (profile === 'ROLE_TRAINEE') {
    console.log('Trainee')
    navbarContainer.innerHTML = `

>>>>>>> main
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <a class="navbar-brand" href="homeTrainees.html">
      <img
        src="../icons/logo.png"
        width="100"
        height="30"
        class="d-inline-block align-top mx-3"
        alt="Your Logo"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link text-white" href="account.html">Mijn Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="profiel.html">Profiel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="homeTrainees.html"
            >Vacatures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="TraineeMatches.html">Mijn Opdrachten</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="loonstrook.html">Loonstroken</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="berichten.html">Berichten</a>
        </li>
      </ul>
    </div>
  </nav>

  <style>
    .navbar-nav .nav-item:hover {
      background-color: #6d6d6d; /* Change the background color on hover */
    }
  </style>
  `
	} else if (profile === 'ROLE_TALENTMANAGER') {
		console.log('Talent')
		navbarContainer.innerHTML = `
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <a class="navbar-brand" href="homeTalent.html">
      <img
        src="../icons/logo.png"
        width="100"
        height="30"
        class="d-inline-block align-top mx-3"
        alt="Your Logo"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link text-white" href="accountTalent.html">Mijn Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="Vacatures.html">Vacatures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="homeTalent.html">Trainees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="talentmanagerMatches.html"
            >Matches</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="berichten.html">Berichten</a>
        </li>
      </ul>
    </div>
  </nav>

  <style>
    .navbar-nav .nav-item:hover {
      background-color: #6d6d6d; /* Change the background color on hover */
    }
  </style>
  `
	}

<<<<<<< HEAD
	// Append the navigation bar to the document
	document.body.insertBefore(navbarContainer, document.body.firstChild)
}
=======
  // Append the navigation bar to the document
  document.body.insertBefore(navbarContainer, document.body.firstChild)
}
>>>>>>> main
