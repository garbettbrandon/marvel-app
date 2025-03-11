import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'marvel-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './marvel-navbar.component.html',
})
export class MarvelNavbarComponent {}
