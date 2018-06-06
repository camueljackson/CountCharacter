var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

var printPlaylists = function () {

  let trackPlaylist = library.playlists             // access to p01 and p02
  let playListDetails;
  let trackName;
  let trackLength;

  for (let p0 in trackPlaylist) {

   playListDetails = library.playlists[p0];           // access to p01 and p02 objects (or VALUES of p01 and p02)
   trackName = playListDetails['name']                // using access to p01 and p02 objects, we naviate to name
   trackLength = playListDetails['tracks'].length;    // using access to p01 and p02 objects, we naviate to tracks and use the length

   console.log( `${p0}: ${trackName} - ${trackLength} tracks` ) //
 }
}

printPlaylists();


// ******************************************************************************


var printTracks = function () {

  let libTracks = library.tracks;
  let trackDetails;
  let trackID;
  let trackName;
  let trackArtist;
  let trackAlbum;

  for (let trackNo in libTracks) {

    trackDetails = libTracks[trackNo];
    trackID = trackDetails['id'];
    trackName = trackDetails['name'];
    trackArtist = trackDetails['artist'];
    trackAlbum = trackDetails['album'];

    console.log( `${trackID}: ${trackName} by ${trackArtist} (${trackAlbum})`)
  }
}

printTracks();


// ******************************************************************************


var printPlaylist = function (playlistId) {

  let libPlaylist = library.playlists
  let libTracks = library.tracks
  let listDetails;
  let playID;
  let playName;
  let numOfTracks;
  let triggerTracks;
  let theTracks;
  let trackName;


  for (let p0 in libPlaylist) {

    listDetails = libPlaylist[playlistId];
    playID = listDetails.id // p01
    playName = listDetails.name // Coding Music
    numOfTracks = listDetails.tracks.length; // t01 t02
  }

console.log(`${playID}: ${playName} - ${numOfTracks}`);

  for (let i = 0; i < numOfTracks; i++) {
   theTracks = listDetails.tracks[i];
   trackName = libTracks[theTracks].name;
   trackArtist = libTracks[theTracks].artist;
   trackAlbum = libTracks[theTracks].album;

   console.log(`${theTracks}: ${trackName} by ${trackArtist} (${trackAlbum})`)

   }
}

printPlaylist('p01')


// ******************************************************************************


var addTrackToPlaylist = function (trackId, playlistId) {

  trackId = library.tracks[trackId];
  library.playlists[playlistId].tracks.push(trackId);
}

addTrackToPlaylist('t03', 'p01')


// ******************************************************************************


var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}



var addTrack = function (name, artist, album) {

  let trackID = uid();

  let newTrack = library.tracks[trackID] = {
    id: trackID,
    name: name,
    artist: artist,
    album: album
  };

  console.log(library.tracks);

}

addTrack("I'm Only Joking", "Kongos", "Lunatic")


// ******************************************************************************


var addPlaylist = function (name) {

let playlistID = uid();

let newPlaylist = library.playlists[name] = {
    id: playlistID,
    name: "",
    tracks: [],
  }

}
 addPlaylist('Under my umbrella')

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }