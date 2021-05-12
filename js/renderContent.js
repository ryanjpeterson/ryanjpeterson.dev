// DOM Elements
const projectsContainer = document.querySelector('#projects-grid');
const recommendationsContainer = document.querySelector(
  '#recommendations-grid'
);

// Projects
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
  {
    name: 'Twitter Fav Bot',
    description: 'CLI Python Twitter fav bot',
    githubURL: 'https://github.com/ryanjpeterson/miscellaneous-billy-corgan',
    img: 'img/twitter-fav-bot-preview.png',
    projectURL: 'https://github.com/ryanjpeterson/miscellaneous-billy-corgan',
  },
];

const generateProjectItem = (project) => `
<div class="grid-item">
    <a href="${project.projectURL}" target="_blank">
        <div class="grid-item__img-container">
            <img class="grid-item__img" src="./${project.img}" alt="${project.name}">  
        </div>
    </a>
    <div class="grid-item__info">
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

// Recommendations
const recommendations = [
  {
    artist: 'Burial',
    album: 'Untrue',
    spotifyURL:
      'https://open.spotify.com/album/1CI5OW60s9W41YLI80Jjdr?si=KeG5FvJEQZC07tY_3tSmjQ',
    appleMusicURL: 'https://music.apple.com/us/album/untrue/893175779',
    coverURL:
      'https://is4-ssl.mzstatic.com/image/thumb/Music4/v4/1f/52/07/1f520784-db49-c435-b681-0e4e28e5000b/5024545486520.jpg/1200x1200bf-60.jpg',
    description: 'Dark and moody electronic',
  },
  {
    artist: 'Slowdive',
    album: 'Souvlaki',
    spotifyURL:
      'https://open.spotify.com/album/53eHm1f3sFiSzWMaKOl98Z?si=vBC5gOptSM64ks9n4j9fTA',
    appleMusicURL: 'https://music.apple.com/us/album/souvlaki/292885238',
    coverURL:
      'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/71/59/16/715916e9-f2f0-c431-644c-04ba5887364b/dj.pzrqoswp.jpg/600x600bf-60.jpg',
    description: 'Dreamy and lush shoegaze',
  },

  {
    artist: 'The Damned',
    album: 'Machine Gun Etiquette',
    spotifyURL:
      'https://open.spotify.com/album/2sLM0RQdMf8bBGOetQIb4F?si=pWE0HV5WR9ipqawyrEbQmw',
    appleMusicURL:
      'https://music.apple.com/us/album/machine-gun-etiquette/590166364',
    coverURL:
      'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/0a/3e/7d/0a3e7de5-a6d7-7aef-e66b-7b4a96063c0f/0029667028585_cover.jpg/600x600bf-60.jpg',
    description: 'Full speed ahead punk rock',
  },
  {
    artist: 'Joe Armon-Jones',
    album: 'Turn to Clear View',
    spotifyURL:
      'https://open.spotify.com/album/4yws2FxiYwtH0rhSCe651X?si=GxVqOGoBQrWPCMm8-X_bUg',
    appleMusicURL:
      'https://music.apple.com/us/album/turn-to-clear-view/1470123202',
    coverURL:
      'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/26/6f/0a/266f0a05-ab16-2a07-f3df-21bd6cad19ff/dj.hbriokga.jpg/1200x1200bf-60.jpg',
    description: 'Soulful and vibrant jazz fusion',
  },
  {
    artist: 'Blood Incantation',
    album: 'Hidden History of the Universe',
    spotifyURL:
      'https://open.spotify.com/album/34U0n1oAE5mwgdaIBrcIck?si=66rwGF7NSnKOX7s1Z_BZlQ',
    appleMusicURL:
      'https://music.apple.com/us/album/hidden-history-of-the-human-race/1480891003',
    coverURL: 'https://f4.bcbits.com/img/a0485761639_10.jpg',
    description: 'Celestial and crushing death metal',
  },
];

const generateRecommendationItem = (recommendation) =>
  `
  <div class="grid-item">
    <div class="grid-item__img-container">
        <img class="grid-item__img" src="${recommendation.coverURL}" alt="${recommendation.artist} - ${recommendation.album}">  
    </div>

    <div class="grid-item__info">
      <div>
        <h3>${recommendation.artist}</h3>
        <span class="italic">${recommendation.album}</span>
      </div>

      <div class="grid-item__streaming-links">
        <a href="${recommendation.spotifyURL}" target="_blank">
          <i class="fab fa-spotify" aria-hidden="true"></i>  
        </a>

        <a href="${recommendation.appleMusicURL}" target="_blank">
          <i class="fab fa-apple" aria-hidden="true"></i>  
        </a>
      </div>
    </div>

    <p class="grid-item__recommendation">${recommendation.description}</p>
</div>
`;

// Assign content
let projectsHTML = '';
let recommendationsHTML = '';

projects.forEach((project) => {
  projectsHTML += generateProjectItem(project);
});

recommendations.forEach((recommendation) => {
  recommendationsHTML += generateRecommendationItem(recommendation);
});

projectsContainer.innerHTML = projectsHTML;
recommendationsContainer.innerHTML = recommendationsHTML;
