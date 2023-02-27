import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  urlProject1 = 'http://localhost:8070/project-one/project-one.js';
  urlProject2 = 'http://localhost:8080/project-two/project-two.js';
}
