import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  comics: any[] = [];
  isModalOpen = false;
  newComic: any = { title: '', chapter: 1, cover: '', rating: 5, date: 'Recién agregado' };

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.comicService.getComics().subscribe(data => {
      this.comics = data;
    });
  }

  openAddModal() {
    this.isModalOpen = true;
  }

  saveComic() {
    if (this.newComic.title && this.newComic.cover) {
      // Agregamos al inicio del array para que se vea primero
      this.comics.unshift({ ...this.newComic, id: this.comics.length + 1 });
      this.isModalOpen = false;
      // Reset del form
      this.newComic = { title: '', chapter: 1, cover: '', rating: 5, date: 'Recién agregado' };
    }
  }

}