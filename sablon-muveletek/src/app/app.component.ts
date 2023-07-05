import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = [
    "Lorem dshkhgkjshgkdshgkdsghkdshg",
    "sdjkdshgjkdshgkjsg skdhkshgjksgkhdskghjkshgjksdkgkg",
    "Helllookkaaa",
  ];

  formSubmit(event: any) {
    event.preventDefault();

    const inputTitle = event.target.elements.title.value;

    this.elements.push(inputTitle);

    event.target.reset();
  }

  deleteTitle(i: number) {
    this.elements.splice(i, 1);
  }
}
