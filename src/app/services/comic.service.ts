import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // El abuelo de HttpClient
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // Importación obligatoria en RxJS 5
import 'rxjs/add/operator/delay';

@Injectable()
export class ComicService {

  constructor(private http: Http) { }

  getDashboardStats(): Observable<any> {
    // Simulamos una llamada API. En 2017 no usábamos 'of' de la misma forma que hoy.
    // Usamos un mock que represente los datos de tu imagen.
    const mockData = {
      totalComics: 452,
      estimatedValue: 6845.50,
      readCount: 312,
      wishlistCount: 67,
      chartData: [
        { month: 'Ago', value: 60 },
        { month: 'Sep', value: 75 },
        { month: 'Oct', value: 80 },
        { month: 'Nov', value: 85 },
        { month: 'Dic', value: 90 },
        { month: 'Ene', value: 95 },
        { month: 'Feb', value: 100 }
      ],
      activities : [
        { type: 'add', title: 'X-Men: Hellfire Gala 2026', date: '9 feb, 09:30' },
        { type: 'read', title: 'Batman: Year One', date: '8 feb, 15:15' },
        { type: 'buy', title: 'Daredevil: Born Again', date: '5 feb, 06:00' }
        ]
    };

    // En Angular 5, para simular un Observable:
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(mockData);
        observer.complete();
      }, 1000);
    });
  }
}