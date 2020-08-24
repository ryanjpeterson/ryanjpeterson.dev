const artist = document.getElementById("recommendation-artist");
const album = document.getElementById("recommendation-album");
const coverURL = document.getElementById("recommendation-cover");
const spotifyLink = document.getElementById("recommendation-spotify");
const appleLink = document.getElementById("recommendation-apple");
const recommendationBtn = document.getElementById("recommendation-btn");

const albums = [
  {
    artist: "Slowdive",
    album: "Souvlaki",
    coverURL:
      "https://e.snmc.io/i/600/w/69ed2e86492a943ffdd9d87c58d96cf3/8055860",
    spotify:
      "https://open.spotify.com/album/53eHm1f3sFiSzWMaKOl98Z?si=k1DCE74wTPWdPejWIW2y5w",
    appleMusic: "https://music.apple.com/gb/album/souvlaki/399211729",
  },
  {
    artist: "The Damned",
    album: "Phantasmagoria",
    coverURL:
      "https://www.idieyoudie.com/home/wp-content/uploads/2020/07/R-1319537-1469809421-8685.jpeg.jpg",
    spotify:
      "https://open.spotify.com/album/1uLToBhDc3RDVXJhhZ0yK2?si=bLcWQJ88SsWZS9U8wIhClw",
    appleMusic: "https://music.apple.com/gb/album/phantasmagoria/1483226967",
  },
  {
    artist: "Joe Armon-Jones",
    album: "Turn to Clear View",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/81tERCv10hL._AC_SL1200_.jpg",
    spotify:
      "https://open.spotify.com/album/4yws2FxiYwtH0rhSCe651X?si=WF4sv6n5R5m5E8OP3736RA",
    appleMusic:
      "https://music.apple.com/gb/album/turn-to-clear-view/1470366291",
  },
  {
    artist: "Sweet Trip",
    album: "Velocity:Design:Comfort",
    coverURL:
      "https://images.roughtrade.com/product/images/files/000/188/182/hero/open-uri20200201-9568-1hudxm1?1580585743",
    spotify:
      "https://open.spotify.com/album/0eUUQ4rly8Q8PyJPWLgde2?si=tKDoBpUZSH2Rwr_nTqN4Xw",
    appleMusic:
      "https://music.apple.com/gb/album/velocity-design-comfort/299710177",
  },
  {
    artist: "Iggy Pop",
    album: "Lust for Life",
    coverURL:
      "https://upload.wikimedia.org/wikipedia/en/7/72/IggyPopLustForLife.jpg",
    spotify:
      "https://open.spotify.com/album/5F79SWd4x7teHv5An2pqHQ?si=vNNKceHETVeY2ZrwYFjZnQ",
    appleMusic: "https://music.apple.com/gb/album/lust-for-life/1440882892",
  },
];

const initPosition = Math.floor(Math.random() * albums.length);
let currentPosition = initPosition;

function loadAlbum() {
  if (currentPosition + 1 >= albums.length) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }

  updateDOM();
}

function updateDOM() {
  artist.textContent = albums[currentPosition].artist;
  album.textContent = albums[currentPosition].album;
  coverURL.setAttribute("src", albums[currentPosition].coverURL);
  spotifyLink.setAttribute("href", albums[currentPosition].spotify);
  appleLink.setAttribute("href", albums[currentPosition].appleMusic);
}

loadAlbum();

recommendationBtn.addEventListener("click", loadAlbum);
