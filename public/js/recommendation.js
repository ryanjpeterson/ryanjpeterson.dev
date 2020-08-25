const artist = document.getElementById("recommendation-artist");
const album = document.getElementById("recommendation-album");
const coverURL = document.getElementById("recommendation-cover");
const spotifyLink = document.getElementById("recommendation-spotify");
const appleLink = document.getElementById("recommendation-apple");
const recommendationBtn = document.getElementById("recommendation-btn");

const albums = [];

let initPosition = 0;
let currentPosition = 0;

async function callFirebase() {
  await db
    .collection("album-recommendations")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        albums.push(doc.data());
      });
    });

  initPosition = Math.floor(Math.random() * albums.length);
  currentPosition = initPosition;
  loadAlbum();
}

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

callFirebase();

recommendationBtn.addEventListener("click", loadAlbum);
