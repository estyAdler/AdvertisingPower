import { Component, OnInit } from '@angular/core';
import { BuilderService } from 'src/app/services/builder.service';
import { BoardsService } from 'src/app/services/boards.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as htmlToImage from 'html-to-image';
import { Business_Poster } from 'src/app/models/business_poster.model';
import { Board_poster } from 'src/app/models/board_poster.model';
import { empty } from 'rxjs';
import { isEmptyExpression } from '@angular/compiler';
import { PostersService } from 'src/app/services/posters.service';
import { Home_Poster } from 'src/app/models/home_poster.model';
import { DesignService } from 'src/app/services/design.service';
@Component({
  selector: 'app-setting-boards',
  templateUrl: './setting-boards.component.html',
  styleUrls: ['./setting-boards.component.css']
})
export class SettingBoardsComponent implements OnInit {
  week;
  dispBoard = false;
  dispOk = false;
  building;
  index;
  buildings = [];
  businessPosters = [];
  buildPosters = [];
  sizeBoard = 0;
  count = 0;
  temp = [];
  board = [];
  allPosters = [];
  constructor(private homeposter: DesignService, private posters: PostersService, private builderService: BuilderService, private boardsService: BoardsService) { }

  ngOnInit(): void {
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    this.week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7) + (now.getFullYear()) * 100;
    this.builderService.getAllUsers().subscribe(res => {
      console.log("sucses1", res);
      err => {
        console.log("error :( !!!!!!!!");
      }
      res.forEach(element => {
        if (element.num_week_order != this.week) {
          this.buildings.push(element)
        }
      });
    })


  }
  getPosters(b, i) {
    this.dispBoard = true;
    this.index = i;
    this.building = b;
    this.sizeBoard = 0;
    this.count = 0;
    this.temp = [];
    this.allPosters = [];
    this.board = [];
    this.boardsService.getPosters(b).subscribe(res => {
      if (res) {
        res.forEach(element => {
          if (element.size == '3') {
            element.size = '4';
          }
          else
            if (element.size == '4') {
              element.size = '8';
            }
          this.sizeBoard += parseInt(element.size);
        });
        this.businessPosters = res;
      }
      this.count = 8 - this.sizeBoard % 8;
      if (this.count) {
        this.boardsService.getBuilderPosters(b).subscribe(res => {
          this.buildPosters = res;
          if (this.buildPosters) {
            this.buildPosters.forEach(element => {
              if (element.impor == 3 && this.count > 0) {
                this.temp.push(element)
                this.count--;
              }
            });
            if (this.count > 0) {
              this.buildPosters.forEach(element => {
                if (element.impor == 2 && this.count > 0) {
                  this.temp.push(element)
                  this.count--;
                }
              });
            }
            if (this.count > 0) {
              this.buildPosters.forEach(element => {
                if (element.impor == 1 && this.count > 0) {
                  this.temp.push(element)
                  this.count--;
                }
              });
            }
            this.buildPosters = this.temp;
            this.allPosters = this.buildPosters;
          }
          this.allPosters = this.allPosters.concat(this.businessPosters);
          if (this.count > 0) {
            this.homeposter.getPosters().subscribe(res => {
              while (this.count > 0) {
                res.forEach(element => {
                  if (this.count > 0) {
                    this.allPosters.push(element)
                    this.count--;
                  }
                });
              }
              err => {
                console.log("error :( !!!!!!!!");
              }
            })
          }
          err => {
            console.log("error :( !!!!!!!!");
          }
        })
      }
      err => {
        console.log("error :( !!!!!!!!");
      }
    })

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  sendToBuild() {
    this.dispBoard = false;
    const bp = new Board_poster();
    this.board.forEach(element => {
      bp.buildingId = this.building.ID;
      bp.col = element.col;
      bp.link = element.link;
      bp.rrow = element.rrow;
      bp.size = element.size;
      bp.num_week = this.week;
      console.log("bp11", bp);
      this.boardsService.insertPosterToBoard(bp).subscribe(res => {
        console.log("bp", res);
        err => {
          console.log("error :( !!!!!!!!");
        }
      })
    });
    this.buildings[this.index].ID = 0;
    var myvar = this.buildings.filter(e => e.ID == 0).length;
    console.log("myvar", myvar)
    if (myvar == this.buildings.length) {
      this.dispOk = true;
    }
    this.building.num_week_order = this.week;
    this.builderService.updateNumWeekOrder(this.building).subscribe(res => {
      err => {
        console.log("error :( !!!!!!!!");
      }
    })
  }
  ok() {
    this.posters.decreaseWeek().subscribe(res => {
      err => {
        console.log("error :( !!!!!!!!");
      }
    })
  }
}