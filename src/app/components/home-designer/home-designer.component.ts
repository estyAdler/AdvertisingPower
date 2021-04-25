import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-designer',
  templateUrl: './home-designer.component.html',
  styleUrls: ['./home-designer.component.css']
})
export class HomeDesignerComponent implements OnInit {
  @Input() cs: { status: number };
  constructor() { }

  ngOnInit(): void {
  }

}
