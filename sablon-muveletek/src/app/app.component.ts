import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  elements: string[] = [];

  inProgress = false;

  ngOnInit(): void {
    this.fetchElements();
  }

  fetchElements() {
    this.inProgress = true;
    fetch("https://kodbazis.hu/api/cimek")
      .then(res => res.json())
      .then(titles => {
        this.elements = titles;
      })
      .catch(() => {
        alert("Hiba");
      })
      .finally(() => {
        this.inProgress = false;
      })
  }

  deleteTitle(i: number) {
    this.inProgress = true;
    fetch("https://kodbazis.hu/api/cimek/" + i, {method: "DELETE"})
      .then(() => {
        this.fetchElements();
      });
  }

  formSubmit(event: any) {
    event.preventDefault();

    const inputTitle = event.target.elements.title.value;
    
    this.inProgress = true;

    fetch("https://kodbazis.hu/api/cimek", {method: "POST", body: JSON.stringify({
      cim: inputTitle
    })})
      .then(() => {
        this.fetchElements();
      });

    event.target.reset();
  }
}
