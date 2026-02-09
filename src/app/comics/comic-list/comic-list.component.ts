import { Component } from '@angular/core';

@Component({
  selector: 'legacy-comic-list',
  template: `
    <div style="font-family: 'Courier New', Courier, monospace;">
      <h2 style="color: #e74c3c;">{{ title }}</h2>
      <ul *ngFor="let comic of comics">
        <li style="margin-bottom: 10px; border-left: 5px solid #2980b9; padding-left: 10px;">
          <strong>{{ comic.title }}</strong> - Edición: {{ comic.issue }}
        </li>
      </ul>
    </div>
  `
})
export class ComicListComponent {
  title = 'Inventario Legacy - Comics de Oro';
  comics = [
    { title: 'The Amazing Spider-Man', issue: 1 },
    { title: 'Action Comics', issue: 1 },
    { title: 'Fantastic Four', issue: 1 }
  ];
}