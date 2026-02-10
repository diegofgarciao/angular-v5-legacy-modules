import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="page-container">
      <h2>Perfil de Usuario</h2>
      <div class="profile-card">
        <div class="avatar-large"></div>
        <h3>Coleccionista Pro</h3>
        <p>Miembro desde: 2026</p>
      </div>
    </div>
  `
})
export class ProfileComponent {}