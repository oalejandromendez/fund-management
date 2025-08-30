import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="w-full bg-[#03a9f4] text-white shadow-md">
    <div class="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Gestión de Fondos</h1>
    </div>
  </header>
  `
})
export class Header {

}
