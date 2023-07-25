document.getElementById('uploadForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const songTitle = document.getElementById('songTitle').value;
  const artistName = document.getElementById('artistName').value;
  const lyrics = document.getElementById('lyrics').value;
  const musicFile = document.getElementById('musicFile').files[0];

  // Perform AJAX or API call to save data and upload file
  // For simplicity, let's assume data is saved and uploaded successfully.

  addSongToList(songTitle, artistName, lyrics);
  document.getElementById('uploadForm').reset();
}

function addSongToList(title, artist, lyrics) {
  const songList = document.getElementById('songList');

  const songItem = document.createElement('div');
  songItem.classList.add('song-item');

  songItem.innerHTML = `
    <h3>${title} - ${artist}</h3>
    <p>${lyrics}</p>
  `;

  songList.appendChild(songItem);
}
