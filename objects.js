// creating an Object
var playlist = {artist: song, 'Whitney Houtson': 'The Bodyguard'};
function updatePlaylist(playlist, artist, song){
  return playlist.artist, playlist.song;
  
}
function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist;
}