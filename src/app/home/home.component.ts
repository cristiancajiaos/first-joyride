import { Component, OnInit } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly joyrideService: JoyrideService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.joyrideService.startTour({
        steps: ['pasoUno', 'pasoDos', 'pasoTres']
      });
    }, 1000);
  }

}
