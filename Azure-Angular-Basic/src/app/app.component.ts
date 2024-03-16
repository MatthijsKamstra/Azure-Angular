import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azure-angular-basic';

  message = '';

  constructor(private http: HttpClient) {
    this.http
      .get('/api/message')
      .subscribe((resp: any) => this.message = resp.text);
  }
}
