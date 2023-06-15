import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ratedSongs: any[] = [];
  recentlyPlayedSongs: any[] = [];

  constructor(private renderer: Renderer2) {}


  ngOnInit() {
    // Simulated API call to fetch songs with ratings from the database
    this.fetchRatedSongs()
      .then(songs => this.ratedSongs = songs)
      .catch(error => console.error(error));

    // Simulated API call to fetch recently played songs
    this.fetchRecentlyPlayedSongs()
      .then(songs => this.recentlyPlayedSongs = songs)
      .catch(error => console.error(error));
  }

  fetchRatedSongs(): Promise<any[]> {
    // Simulated API call
    return new Promise<any[]>((resolve, reject) => {
      // Mock data
      const songs = [
        {
          name: 'Song 1',
          artist: 'Artist 1',
          album: 'Album 1',
          genre: 'g1',
          language: 'lang1',
          rating: 4
        },
        {
          name: 'Song 2',
          artist: 'Artist 2',
          album: 'Album 2',
          genre: 'g2',
          language: 'lang2',
          rating: 3
        },
        {
          name: 'Song 3',
          artist: 'Artist 3',
          album: 'Album 3',
          genre: 'g3',
          language: 'lang3',
          rating: 5
        }
      ];
      setTimeout(() => resolve(songs), 1000);
    });
  }

  fetchRecentlyPlayedSongs(): Promise<any[]> {
    // Simulated API call
    return new Promise<any[]>((resolve, reject) => {
      // Mock data
      const songs = [
        {
          name: 'Song 1',
          artist: 'Artist 1',
          album: 'Album 1',
          isPlaying: false,
          rating: 0
        },
        {
          name: 'Song 2',
          artist: 'Artist 2',
          album: 'Album 2',
          isPlaying: false,
          rating: 0
        },
        {
          name: 'Song 3',
          artist: 'Artist 3',
          album: 'Album 3',
          isPlaying: false,
          rating: 0
        }
      ];
      setTimeout(() => resolve(songs), 1000);
    });
  }

  // togglePlayPause(song: any) {
  //   if (song.isPlaying) {
  //     song.isPlaying = false;
  //   } else {
  //     // Pause all other songs before playing the selected song
  //     this.recentlyPlayedSongs.forEach(s => {
  //       s.isPlaying = false;
  //     });

  //     song.isPlaying = true;
  //   }
  // }

  togglePlayPause(song: any) {
  if (song.isPlaying) {
    song.isPlaying = false;
    this.renderer.setProperty(song.audioElement, 'currentTime', 0); // Reset the audio to start
    this.renderer.setProperty(song.audioElement, 'paused', true); // Pause the audio
  } else {
    // Pause all other songs before playing the selected song
    this.recentlyPlayedSongs.forEach(s => {
      s.isPlaying = false;
      this.renderer.setProperty(s.audioElement, 'paused', true); // Pause other songs
      this.renderer.setProperty(s.audioElement, 'currentTime', 0); // Reset other songs to start
    });

    song.isPlaying = true;
    this.renderer.setProperty(song.audioElement, 'currentTime', 0); // Reset the audio to start
    this.renderer.setProperty(song.audioElement, 'paused', false); // Play the audio
  }
}


  rateSong(song: any, rating: number) {
    song.rating = rating;
  }
}




// import { Component, OnInit } from '@angular/core';
// // import './dashboard.component.css'; // Import the CSS file

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit{
//   recentlyPlayedSongs: any[] = [];
//   favoriteArtists: any[] = [];
//   router: any;

//   ngOnInit() {
//     // Simulated API call to fetch recently played songs
//     this.fetchRecentlyPlayedSongs()
//       .then(songs => this.recentlyPlayedSongs = songs)
//       .catch(error => console.error(error));

//     // Simulated API call to fetch favorite artists
//     this.fetchFavoriteArtists()
//       .then(artists => this.favoriteArtists = artists)
//       .catch(error => console.error(error));
//   }

//   fetchRecentlyPlayedSongs(): Promise<any[]> {
//     // Simulated API call
//     return new Promise<any[]>((resolve, reject) => {
//       // Mock data
//       const songs = [
//         {
//           name: 'Song 1',
//           artist: 'Artist 1',
//           album: 'Album 1',
//           albumCover: 'https://example.com/album1.jpg',
//           isPlaying: false,
//           progress: 0,
//           progressInterval: null
//         },
//         {
//           name: 'Song 2',
//           artist: 'Artist 2',
//           album: 'Album 2',
//           albumCover: 'https://example.com/album2.jpg',
//           isPlaying: false,
//           progress: 0,
//           progressInterval: null
//         },
//         {
//           name: 'Song 3',
//           artist: 'Artist 3',
//           album: 'Album 3',
//           albumCover: 'https://example.com/album3.jpg',
//           isPlaying: false,
//           progress: 0,
//           progressInterval: null
//         }
//       ];
//       setTimeout(() => resolve(songs), 1000);
//     });
//   }

//   fetchFavoriteArtists(): Promise<any[]> {
//     // Simulated API call
//     return new Promise<any[]>((resolve, reject) => {
//       // Mock data
//       const artists = [
//         {
//           name: 'Artist 1',
//           genre: 'Pop',
//           country: 'USA',
//           profileImage: 'https://example.com/artist1.jpg'
//         },
//         {
//           name: 'Artist 2',
//           genre: 'Rock',
//           country: 'UK',
//           profileImage: 'https://example.com/artist2.jpg'
//         },
//         {
//           name: 'Artist 3',
//           genre: 'Hip Hop',
//           country: 'Canada',
//           profileImage: 'https://example.com/artist3.jpg'
//         }
//       ];
//       setTimeout(() => resolve(artists), 1000);
//     });
//   }

//   togglePlayPause(song: any) {
//     if (song.isPlaying) {
//       song.isPlaying = false;
//       clearInterval(song.progressInterval);
//     } else {
//       // Pause all other songs before playing the selected song
//       this.recentlyPlayedSongs.forEach(s => {
//         s.isPlaying = false;
//         clearInterval(s.progressInterval);
//       });

//       song.isPlaying = true;

//       // Simulated progress update
//       song.progressInterval = setInterval(() => {
//         if (song.progress < 100) {
//           song.progress += 10;
//         } else {
//           clearInterval(song.progressInterval);
//           song.isPlaying = false;
//           song.progress = 0;
//         }
//       }, 1000);
//     }
//   }


//   logout() {
//     // Perform logout logic here (e.g., clear session, redirect to login page)
//     // For demonstration purposes, simply redirecting to the home page
//     this.router.navigate(['/']);
//   }

  
// }