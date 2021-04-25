import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { BuilderService } from 'src/app/services/builder.service';
import { CategoryService } from 'src/app/services/category.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Business_Poster } from 'src/app/models/business_poster.model';
import { Business } from 'src/app/models/business.model';
import { PostersService } from 'src/app/services/posters.service';
@Component({
  selector: 'app-all-users',
  styleUrls: ['./all-users.component.css'],
  templateUrl: './all-users.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AllUsersComponent implements OnInit {
  data = ELEMENT_DATA;
  displayedColumnsbuild: string[] = ['name', 'first_phone', 'second_phone', 'email', 'street', 'Building_number', 'city', 'Number_tenants'];
  displayedColumnsbus: string[] = ['businessName', 'businessOwnerName', 'first_phone', 'second_phone', 'email', 'category'];
  dataSource = [];
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: Business_Poster[] | null;
  bus = false;
  build = false;
  constructor(private categoryService: CategoryService, private posterservice: PostersService, private businessService: BusinessService, private builderService: BuilderService) { }

  ngOnInit(): void {
  }
  business() {
    this.bus = true;
    this.build = false;
    this.businessService.getAllUsers().subscribe(res => {
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.dataSource = res;

      this.dataSource.forEach(element => {
        this.categoryService.getCategoryName(element).subscribe(res => {
          element.category = res.categoryName
          err => {
            console.log("error :( !!!!!!!!");
          }
        });
      });

    })
  }
  posters(b) {
    this.posterservice.getPostersByBusinessID(b).subscribe(res => {
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.expandedElement = res;
      this.expandedElement.forEach(element => {
      });

    })

  }
  building() {
    this.bus = false;
    this.build = true;
    this.builderService.getAllUsers().subscribe(res => {
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.dataSource = res;


    })
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }
]