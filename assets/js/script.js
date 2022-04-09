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


// change the static project images to gifs when clicked on

const codeQuizImage = document.getElementById("code-quiz-image");

const weatherDashboardImage = document.getElementById("weather-dashboard-image");

const mainProjectImage = document.getElementById("main-project");

function changeImageToGif(event) {

    event.stopPropagation();

    if (codeQuizImage.classList.contains("static")) {
        codeQuizImage.setAttribute("src", "./assets/images/code-quiz-demo.gif");
        codeQuizImage.classList.add("gif");
        codeQuizImage.classList.remove("static");
    } else {
        codeQuizImage.setAttribute("src", "./assets/images/code-quiz-splash-page.png");
        codeQuizImage.classList.add("static");
        codeQuizImage.classList.remove("gif");
    }
}

codeQuizImage.addEventListener("click", changeImageToGif);

weatherDashboardImage.addEventListener("click", changeImageToGif);