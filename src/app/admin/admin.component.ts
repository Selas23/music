import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  songs: any[] = [];
  selectedSong: any = {};

  ngOnInit() {
    // Simulated API call to fetch songs from the database
    this.fetchSongs()
      .then(songs => this.songs = songs)
      .catch(error => console.error(error));
  }

  fetchSongs(): Promise<any[]> {
    // Simulated API call
    return new Promise<any[]>((resolve, reject) => {
      // Mock data
      const songs = [
        {
          title: 'Song 1',
          artist: 'Artist 1',
          album: 'Album 1',
          genre: 'Genre 1',
          language: 'Language 1'
        },
        {
          title: 'Song 2',
          artist: 'Artist 2',
          album: 'Album 2',
          genre: 'Genre 2',
          language: 'Language 2'
        },
        {
          title: 'Song 3',
          artist: 'Artist 3',
          album: 'Album 3',
          genre: 'Genre 3',
          language: 'Language 3'
        }
        // Add more songs as needed
      ];
      setTimeout(() => resolve(songs), 1000);
    });
  }

  createSong() {
    // Add the selectedSong object to the songs list
    this.songs.push(this.selectedSong);
    // Clear the selectedSong object for creating a new song
    this.selectedSong = {};
  }

  updateSong() {
    // Find the index of the selected song in the songs list
    const index = this.songs.findIndex(song => song.title === this.selectedSong.title);
    // Update the song at the found index with the updated selectedSong object
    this.songs[index] = this.selectedSong;
    // Clear the selectedSong object after updating the song
    this.selectedSong = {};
  }

  deleteSong(song: any) {
    // Find the index of the song in the songs list
    const index = this.songs.indexOf(song);
    // Remove the song from the songs list
    this.songs.splice(index, 1);
  }

  selectSong(song: any) {
    // Assign the selected song to the selectedSong object
    this.selectedSong = Object.assign({}, song);
  }
}
