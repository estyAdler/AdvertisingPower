import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-business',
  templateUrl: './home-business.component.html',
  styleUrls: ['./home-business.component.css']
})
export class HomeBusinessComponent implements OnInit {
  @Input() cs: { status: number };
  constructor() { }

  ngOnInit(): void {
  }

}
