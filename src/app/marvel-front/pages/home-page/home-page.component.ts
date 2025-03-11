import { Component } from '@angular/core';
import { HeroCardComponent } from "../../../heroes/components/hero-card/hero-card.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
