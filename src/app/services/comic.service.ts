import { Injectable } from "@angular/core";
import { Http } from "@angular/http"; // El abuelo de HttpClient
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"; // Importación obligatoria en RxJS 5
import "rxjs/add/operator/delay";

@Injectable()
export class ComicService {
  constructor(private http: Http) {}

  getDashboardStats(): Observable<any> {
    // Simulamos una llamada API. En 2017 no usábamos 'of' de la misma forma que hoy.
    // Usamos un mock que represente los datos de tu imagen.
    const mockData = {
      totalComics: 452,
      estimatedValue: 6845.5,
      readCount: 312,
      wishlistCount: 67,
      chartData: [
        { month: "Ago", value: 60 },
        { month: "Sep", value: 75 },
        { month: "Oct", value: 80 },
        { month: "Nov", value: 85 },
        { month: "Dic", value: 90 },
        { month: "Ene", value: 95 },
        { month: "Feb", value: 100 },
      ],
      activities: [
        {
          type: "add",
          title: "X-Men: Hellfire Gala 2026",
          date: "9 feb, 09:30",
        },
        { type: "read", title: "Batman: Year One", date: "8 feb, 15:15" },
        { type: "buy", title: "Daredevil: Born Again", date: "5 feb, 06:00" },
      ],
    };

    // En Angular 5, para simular un Observable:
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(mockData);
        observer.complete();
      }, 1000);
    });
  }

  getComics(): Observable<any[]> {
    const comics = [
      {
        id: 1,
        title: "The Department of Truth",
        chapter: 27,
        rating: 4.9,
        date: "3 días ago",
        cover: "assets/tdotc1.jpeg",
        genres: ["Image Comics"],
        editorial: "Image",
      },
      {
        id: 2,
        title: "American Jesus: The New Messiah",
        chapter: 1,
        rating: 5,
        date: "6 de febrero 2026",
        cover: "assets/ajtnmc2.jpg",
        genres: ["Indies"],
        editorial: "Dark Horse",
      },
      {
        id: 3,
        title: "The Infernal Hulk",
        chapter: 1,
        rating: 5,
        date: "5 de febrero 2026",
        cover: "assets/tihc1.jpg",
        genres: ["Marvel Comics"],
        editorial: "Marvel",
      },
      {
        id: 4,
        title: "Carnage: Mind Bomb",
        chapter: 1,
        rating: 5,
        date: "5 de febrero 2026",
        cover: "assets/cmbc1.webp",
        genres: ["Marvel Comics"],
        editorial: "Marvel",
      },
      {
        id: 5,
        title: "DC K.O.",
        chapter: 28,
        rating: 4.6,
        date: "4 de febrero 2026",
        cover: "assets/dcko1.jpg",
        genres: ["DC Comics"],
        editorial: "DC",
      },
      {
        id: 6,
        title: "Justice League Unlimited",
        chapter: 17,
        rating: 4.8,
        date: "4 de febrero 2026",
        cover: "assets/jl1.jpg",
        genres: ["DC Comics"],
        editorial: "DC",
      },
      {
        id: 7,
        title: "Saga",
        chapter: 60,
        rating: 5.0,
        date: "10 de febrero 2026",
        cover: "assets/saga1.webp",
        genres: ["Image Comics"],
        editorial: "Image",
      },
      {
        id: 8,
        title: "Batman: Gargoyle of Gotham",
        chapter: 2,
        rating: 4.7,
        date: "1 de febrero 2026",
        cover: "assets/bgogc1.jpg",
        genres: ["DC Comics", "DC Horror"],
        editorial: "DC",
      },
      {
        id: 9,
        title: "Something is Killing the Children",
        chapter: 35,
        rating: 4.9,
        date: "2 de febrero 2026",
        cover: "assets/siktc1.webp",
        genres: ["Boom Studios"],
        editorial: "Boom",
      },
      {
        id: 10,
        title: "Ultimate Spider-Man (2024)",
        chapter: 1,
        rating: 5.0,
        date: "7 de febrero 2026",
        cover: "assets/usmc1.jpeg",
        genres: ["Marvel Comics"],
        editorial: "Marvel",
      },
    ];

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(comics);
        observer.complete();
      }, 500);
    });
  }
}
