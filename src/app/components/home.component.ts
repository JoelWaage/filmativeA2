import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <img class= "img-responsive"src="./assets/grey.jpg" />
    </div>
  `,
})
export class HomeComponent  {
  title = "Filmative";
}
