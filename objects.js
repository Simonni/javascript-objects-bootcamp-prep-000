// creating an Object
var playlist = {'Micheal Jackson': 'Thriller',
                'Whitney Houston': 'The Bodyguard'};

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName]:songTitle;
  
}
function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist;
}