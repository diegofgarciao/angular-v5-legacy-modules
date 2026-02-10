import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <div class="page-container">
      <h2>Configuración</h2>
      <div class="settings-option">
        <label>Moneda:</label>
        <select><option>EUR</option><option>USD</option></select>
      </div>
    </div>
  `
})
export class SettingsComponent {}