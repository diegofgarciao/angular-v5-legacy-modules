import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  comics: any[] = [];

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.comicService.getComics().subscribe(data => {
      this.comics = data;
    });
  }
}