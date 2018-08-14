// creating an Object
var playlist = {'Micheal Jackson': 'Thriller', 'Whitney Houtson': 'The Bodyguard'};
function updatePlaylist(playlist, artist, song){
  return playlist.artist, playlist.song;
  
}
function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist;
}