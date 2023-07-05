import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  isInMove = false;

  @Input()
  xPosition = 0;

  @Input()
  yPosition = 0;

  @Input()
  chosenColor = '';

  boxDragStart() {
    this.isInMove = true;
  }

  boxDragEnd() {
    this.isInMove = false;
  }

  boxDrag(event: any) {
    if(this.isInMove) {
      this.xPosition = event.clientX - 400 / 2;
      this.yPosition = event.clientY - 150 / 2;
    }
  }
}
