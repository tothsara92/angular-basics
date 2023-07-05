import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-choser',
  templateUrl: './color-choser.component.html',
  styleUrls: ['./color-choser.component.css']
})
export class ColorChoserComponent {

  @Output()
  newColorChosed = new EventEmitter();

  formSubmit(event: any) {
    event.preventDefault();
    const newColor = event.target.elements.color.value;

    this.newColorChosed.emit(newColor);
  }

}
