import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isInMove = false;
  xPosition = 0;
  yPosition = 0;

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
