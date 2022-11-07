import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>
      404 ERROR. REQUESTED PAGE NOT FOUND
    </h4>
  `,
  styles: [
    "h4{color:RED;font-size:50px}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
