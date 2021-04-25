import { Component, OnInit } from '@angular/core';
import { Builder } from 'src/app/models/Builder.model';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.css']
})
export class ImpressionComponent implements OnInit {

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
    b.ID = 18
    this.boardService.getBoardByBID(b).subscribe(res => {
      console.log("res", res)
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.board = res;
      this.board.reverse()
      while (this.board.length != 0) {
        this.count = 0;
        this.numArray++;
        console.log("numArray", this.numArray);
        this.currentArray = [];
        while (this.count < 8) {
          this.poster = this.board.pop();
          this.count += this.poster.size;
          console.log("count", this.count);
          this.currentArray.push(this.poster);
        }
        this.posters.push(this.currentArray);
        console.log("posters", this.posters)
      }
      var myVar = setInterval(() => {
        if (this.Iindex < this.numArray) {
          this.Iindex++;
        }
        else {
          this.Iindex = 1;
        }
      }, 10000);
    });
  }

}
