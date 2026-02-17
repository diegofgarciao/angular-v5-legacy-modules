import { Component } from "@angular/core";
import { Store } from "../models/store.model";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-stores",
  templateUrl: "./stores.component.html",
  styleUrls: ["./stores.component.css"],
})
export class StoresComponent {
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      "TU_URL_DE_GOOGLE_MAPS_AQUÍ",
    );
  }

  stores: Store[] = [
    {
      id: 1,
      name: "Comic Castle Central",
      address: "Av. Principal #123",
      city: "Ciudad Gótica",
      phone: "555-0192",
      website: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=400",
      isOpen: true,
      tags: ["Marvel Specialists", "Back Issues"],
    },
    {
      id: 2,
      name: "The Graphic Vault",
      address: "Calle 45 #8-20",
      city: "Metrópolis",
      phone: "555-0456",
      website: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?q=80&w=400",
      isOpen: false,
      tags: ["Indies", "Rare Editions"],
    },
  ];
}
