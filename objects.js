// creating an Object
var playlist = {artistName: "name", songTitle:"title"};
function updatePlaylist(playlist, name, title){
  return playlist.artistName, playlist.songTitle;
  
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}