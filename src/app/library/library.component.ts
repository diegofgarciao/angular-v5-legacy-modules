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
      const comicToSave = { 
        ...this.newComic, 
        id: Date.now() // Usamos timestamp para ID único
      };
      
      this.comicService.addComic(comicToSave);
      
      this.isModalOpen = false;
      this.resetForm();
    }
  }

  private resetForm() {
    this.newComic = { title: '', chapter: 1, cover: '', rating: 5, date: 'Recién agregado' };
  }

}