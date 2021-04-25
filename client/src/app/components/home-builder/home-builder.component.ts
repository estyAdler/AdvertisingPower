import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-builder',
  templateUrl: './home-builder.component.html',
  styleUrls: ['./home-builder.component.css']
})
export class HomeBuilderComponent implements OnInit {
  @Input() cs: { status: number };
  constructor() { }

  ngOnInit(): void {
  }

}
