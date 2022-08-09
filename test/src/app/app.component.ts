import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  toggleDarkMode(evt:any) {
    
    if (evt.target.checked) {
      document.body.classList.remove('is-light-mode');
      document.body.classList.add('is-dark-mode');
    } else {
      document.body.classList.remove('is-dark-mode');
      document.body.classList.add('is-light-mode');
    }
  }
}
