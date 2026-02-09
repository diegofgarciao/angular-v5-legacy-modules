import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic.service';

@Component({
  selector: 'legacy-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Variables para la vista
  stats: any = {};
  loading: boolean = true;

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.comicService.getDashboardStats().subscribe(
      data => {
        this.stats = data;
        this.loading = false;
      },
      error => console.error('Error cargando stats', error)
    );
  }
}