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
             },


    printPlaylists: function () {
        let trackPlaylist = this.playlists             // access to p01 and p02
        let playListDetails;
        let trackName;
        let trackLength;

        for (let p0 in trackPlaylist) {

         playListDetails = this.playlists[p0];           // access to p01 and p02 objects (or VALUES of p01 and p02)
         trackName = playListDetails['name']                // using access to p01 and p02 objects, we naviate to name
         trackLength = playListDetails['tracks'].length;    // using access to p01 and p02 objects, we naviate to tracks and use the length

         console.log( `${p0}: ${trackName} - ${trackLength} tracks`) //
        }
    },


     printTracks: function () {
        let libTracks = this.tracks;
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
      },


    printPlaylist: function (playlistId) {
      let libPlaylist = this.playlists
      let libTracks = this.tracks
      let listDetails;
      let playID;
      let playName;
      let numOfTracks;
      let triggerTracks;
      let theTracks;
      let trackName;

        listDetails = libPlaylist[playlistId];
        playID = listDetails.id // p01
        playName = listDetails.name // Coding Music
        numOfTracks = listDetails.tracks.length; // t01 t02

    console.log(`${playID}: ${playName} - ${numOfTracks}`);

      for (let i = 0; i < numOfTracks; i++) {
       theTracks = listDetails.tracks[i];
       trackName = libTracks[theTracks].name;
       trackArtist = libTracks[theTracks].artist;
       trackAlbum = libTracks[theTracks].album;

       console.log(`${theTracks}: ${trackName} by ${trackArtist} (${trackAlbum})`)
       }
    },


    addTrackToPlaylist: function (trackId, playlistId) {
      trackId = this.tracks[trackId];
      this.playlists[playlistId].tracks.push(trackId);
    },


    uid: function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },


    addTrack: function (name, artist, album) {
      let trackID = uid();
      let newTrack = this.tracks[trackID] = {
                                              id: trackID,
                                              name: name,
                                              artist: artist,
                                              album: album
                                            };
    },


    addPlaylist: function (name) {
      let playlistID = uid();
      let newPlaylist = this.playlists[name] = {
          id: playlistID,
          name: "",
          tracks: [],
      }
    }
}

library.printPlaylist('p01');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }