//hide the different sections until their heading is clicked on, then show them

const aboutMe = document.getElementById("about-me");

const aboutMeLink = document.getElementById("about-me-link");


const projects = document.getElementById("projects");

const projectsLink = document.getElementById("my-projects-link");

const contactDetails = document.getElementById("contact-details");

const contactLink = document.getElementById("contact-me-link");

function displayAbout(event) {
    event.stopPropagation();

    aboutMe.classList.remove("hidden");
    projects.classList.add("hidden");
    contactDetails.classList.add("hidden");
}

function displayProjects(event) {
    event.stopPropagation();

    projects.classList.remove("hidden");
    aboutMe.classList.add("hidden");
    contactDetails.classList.add("hidden")
}

function displayContact(event) {

    event.stopPropagation();

    contactDetails.classList.remove("hidden");
    projects.classList.add("hidden");
    aboutMe.classList.add("hidden");
}

aboutMeLink.addEventListener("click", displayAbout);

projectsLink.addEventListener("click", displayProjects);

contactLink.addEventListener("click", displayContact);
