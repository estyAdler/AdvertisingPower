import { Component, OnInit } from '@angular/core';
import { BoardsService } from 'src/app/services/boards.service';
import { Builder } from 'src/app/models/Builder.model';

@Component({
  selector: 'app-build-board',
  templateUrl: './build-board.component.html',
  styleUrls: ['./build-board.component.css']
})
export class BuildBoardComponent implements OnInit {
  Iindex = 1;
  count = 0;
  board = []
  poster;
  posters = [];
  numArray = 0;
  currentArray = [];
  constructor(private boardService: BoardsService) { }

  ngOnInit(): void {
    const b = new Builder()
    b.ID = parseInt(localStorage.getItem("b_ID"))
    this.boardService.getBoardByBID(b).subscribe(res => {
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.board = res;
      this.board.reverse()
      while (this.board.length != 0) {
        this.count = 0;
        this.numArray++;
        this.currentArray = [];
        while (this.count < 8) {
          debugger;
          this.poster = this.board.pop();
          this.count += this.poster.size;
          this.currentArray.push(this.poster);
        }
        this.posters.push(this.currentArray);
      }
      var myVar = setInterval(() => {
        if (this.Iindex < this.numArray) {
          this.Iindex++;
        }
        else {
          this.Iindex = 1;
        }
      }, 30000);
    });
  }
}