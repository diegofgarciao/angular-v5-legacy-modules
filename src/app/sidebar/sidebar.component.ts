import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;
  userAdmin = {
    name: 'Coleccionista Pro',
    edition: '2026 Edition'
  };

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}