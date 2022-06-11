//hide the different sections until their heading is clicked on, then show them

const aboutMe = document.getElementById('about-me');

const aboutMeLink = document.getElementById('about-me-link');

const projects = document.getElementById('projects');

const projectsLink = document.getElementById('my-projects-link');

const contactDetails = document.getElementById('contact-details');

const contactLink = document.getElementById('contact-me-link');

function displayAbout(event) {
  event.stopPropagation();

  aboutMe.classList.remove('hidden');
  projects.classList.add('hidden');
  contactDetails.classList.add('hidden');
}

function displayProjects(event) {
  event.stopPropagation();

  projects.classList.remove('hidden');
  aboutMe.classList.add('hidden');
  contactDetails.classList.add('hidden');
}

function displayContact(event) {
  event.stopPropagation();

  contactDetails.classList.remove('hidden');
  projects.classList.add('hidden');
  aboutMe.classList.add('hidden');
}

aboutMeLink.addEventListener('click', displayAbout);

projectsLink.addEventListener('click', displayProjects);

contactLink.addEventListener('click', displayContact);

// change the static project images to gifs when clicked on

const teamProfileImage = document.getElementById(
  'team-profile-generator-image'
);

const techBlogImage = document.getElementById('tech-blog-image');

const mainProjectImage = document.getElementById('main-project');

function changeImageToGif(event) {
  //swap what kind of pokemon are you static image to gif
  if (
    event.target.classList.contains('proj1') &&
    event.target.classList.contains('static')
  ) {
    mainProjectImage.setAttribute(
      'src',
      './assets/images/what-kind-of-pokemon-are-you.gif'
    );
    mainProjectImage.classList.add('gif');
    mainProjectImage.classList.remove('static');
  } else {
    //swap what kind of pokemon are you gif to static image
    mainProjectImage.setAttribute(
      'src',
      './assets/images/pokeball-splash-page.png'
    );
    mainProjectImage.classList.remove('gif');
    mainProjectImage.classList.add('static');
  }

  //swap tech blog static image to gif
  if (
    event.target.classList.contains('tech-blog') &&
    event.target.classList.contains('static')
  ) {
    techBlogImage.setAttribute(
      'src',
      './assets/images/tech-blog-signup-and-comment-demo.gif'
    );
    techBlogImage.classList.add('gif');
    techBlogImage.classList.remove('static');
  } else {
    //swap tech blog gif to static image
    techBlogImage.setAttribute('src', './assets/images/tech-blog-static.png');
    techBlogImage.classList.remove('gif');
    techBlogImage.classList.add('static');
  }

  //swap the team profile generator static image to gif
  if (
    event.target.classList.contains('team-profile') &&
    event.target.classList.contains('static')
  ) {
    teamProfileImage.setAttribute(
      'src',
      './assets/images/team-profile-generator-prompts.gif'
    );
    teamProfileImage.classList.add('gif');
    teamProfileImage.classList.remove('static');
  } else {
    //swap the team profile generator gif to static image
    teamProfileImage.setAttribute(
      'src',
      './assets/images/team-profile-generator-static.png'
    );
    teamProfileImage.classList.add('static');
    teamProfileImage.classList.remove('gif');
  }
}

mainProjectImage.addEventListener('click', changeImageToGif);

techBlogImage.addEventListener('click', changeImageToGif);

teamProfileImage.addEventListener('click', changeImageToGif);
