const projects = [
  {
    name: 'Last30/Top30',
    description: 'Spotify playlist generator',
    githubURL: 'https://github.com/ryanjpeterson/last-30-top-30',
    img: 'img/last-30-top-30-preview.png',
    projectURL: 'https://last-30-top-30.herokuapp.com/',
  },
  {
    name: 'Tweetstream',
    description: 'Twitter streaming api',
    githubURL: 'https://github.com/ryanjpeterson/tweetstream',
    img: 'img/tweetstream-preview.png',
    projectURL: 'https://rjp-tweetstream.herokuapp.com/',
  },
  {
    name: 'You vs the World',
    description: 'Artist portfolio',
    githubURL: 'https://github.com/ryanjpeterson/you-vs-the-wrld-client',
    img: 'img/you-vs-the-wrld-preview.png',
    projectURL: 'https://you-vs-the-wrld.web.app/',
  },
];

const projectsContainer = document.querySelector('#projects__container');

const template = (project) => `
<div class="projects__item">
    <a href="${project.projectURL}" target="_blank">
        <div class="projects__item--img-container">
            <img class="projects__item--img" src="./${project.img}" alt="${project.name}">  
        </div>
    </a>
    <div class="projects__item--info">
    <div>
        <h3>${project.name}</h3>
        <span class="italic">${project.description}</span>
    </div>

    <a href="${project.githubURL}" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i>  
    </a>
    </div>
</div>
`;

let html = '';

projects.forEach((project) => {
  html += template(project);
});

projectsContainer.innerHTML = html;
