import { Component } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JoyrideService]
})
export class AppComponent {
  title = 'first-joyride';
}
