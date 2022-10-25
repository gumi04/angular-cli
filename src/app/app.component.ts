import { Component } from '@angular/core';
import { LoggerService } from 'my-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private logger: LoggerService){
    this.logger.log("hello world")
  }
}
