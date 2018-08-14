// creating an Object
var playlist = {artistName: "", songTitle:""};
function updatePlaylist(playlist, artistName, songTitle){
  return playlist.artistName, playlist.songTitle;
  
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}