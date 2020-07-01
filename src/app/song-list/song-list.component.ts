import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';



import { Song } from '../song';
import { SongService } from '../song.service';


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
  providers: [SongService]
})
export class SongListComponent implements OnInit {
  songs: Song[];
  selectedSong: Song;
  showPC: boolean;
  thisSongService: SongService;
  value: number;
  maxValue: number;
  listScore: number;
  showScore: boolean;

  constructor(private songService: SongService) {
    this.songs = this.songService.getSongs();
    this.songs.forEach(function(value, index) {
      value.rank = index;
    });
    this.showPC = false;
    this.thisSongService = this.songService;
    this.showScore = false;
  }

  ngOnInit() {

  }

  onSelect(song: Song) { this.selectedSong = song; }

  sortBy(prop: string) {
    return this.songs.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }


  toggleSPC() {
    this.showPC = !this.showPC;
  }

  refresh() {
    this.songs = this.thisSongService.getSongs();
    this.songs.forEach(function(value, index) {
      value.rank = index;
    });
    this.score();
    this.showScore = false;



  }

  score() {
    this.value = 0;
    this.maxValue = 0;
    for (const song1 of this.songs) {
      for (const song2 of this.songs) {
        if (this.songs.findIndex(x => x.id === song1.id) < this.songs.findIndex(x => x.id === song2.id)) {
          this.maxValue += Math.abs(song1.plays - song2.plays);
          if (song1.plays > song2.plays) {
            this.value += song1.plays - song2.plays;
          }
        }
      }
    }
    this.listScore = Math.round(1000 * this.value / (10 * this.maxValue));
    this.showScore = true;
  }

  drop(event: CdkDragDrop<Song[]>) {
    moveItemInArray(this.songs, event.previousIndex, event.currentIndex);
  }
}
