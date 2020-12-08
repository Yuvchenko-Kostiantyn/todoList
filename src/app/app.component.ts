import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clicker';
  age = 21;
  word = "oleeee!"

  getRandom() {
    return Math.floor(Math.random() * 1000);
  }

  showMessage() {
    this.age = this.getRandom();
    this.word += "!"
  }

  randomLink() {
    return `/${Math.floor(Math.random() * 10000)}`
  }

}
