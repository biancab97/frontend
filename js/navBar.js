function loadNavBar() {
	// Create a container element for the navigation bar
	const navbarContainer = document.createElement('nav')
	navbarContainer.classList.add(
		'navbar',
		'navbar-expand-lg',
		'navbar-light',
		'bg-primary',
		'fixed-top',
	)

	// Define the HTML code for the navigation bar
	navbarContainer.innerHTML = `
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <a class="navbar-brand" href="homeTrainees.html">
        <img
          src="../icons/logo.png"
          width="100"
          height="30"
          class="d-inline-block align-top"
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
            <a class="nav-link text-white" href="homeOpdracht.html">Opdrachtgever</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="homeTalent.html">Talent Manager</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="homeTrainees.html"
              >Vacatures</a
            >
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

	// Append the navigation bar to the document
	document.body.insertBefore(navbarContainer, document.body.firstChild)
	document.body.insertBefore(navbarContainer, document.body.firstChild)
}
