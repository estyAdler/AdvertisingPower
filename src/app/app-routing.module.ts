import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BuildDataComponent } from './components/build-data/build-data.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBuilderComponent } from './components/home-builder/home-builder.component';
import { HomeBusinessComponent } from './components/home-business/home-business.component';
import { BuildingPostersComponent } from './components/building-posters/building-posters.component';
import { PostersComponent } from './components/posters/posters.component';
import { OkPostersComponent } from './components/ok-posters/ok-posters.component';
import { BuildMonthComponent } from './components/build-month/build-month.component';
import { SizePostersComponent } from './components/size-posters/size-posters.component';
import { OldPostersComponent } from './components/old-posters/old-posters.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HomeDesignerComponent } from './components/home-designer/home-designer.component';
import { ImpressionComponent } from './components/impression/impression.component';
import { NewBulidingsComponent } from './components/new-bulidings/new-bulidings.component';
import { SettingBoardsComponent } from './components/setting-boards/setting-boards.component';
import { AddHomePosterComponent } from './components/add-home-poster/add-home-poster.component';
import { BuildBoardComponent } from './components/build-board/build-board.component';
/* import {MaterialModule}  from './material/material.module'; */

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'buildData', component: BuildDataComponent },
  { path: 'home', component: HomeComponent },
  { path: 'homeBuilder', component: HomeBuilderComponent },
  { path: 'homeBusiness', component: HomeBusinessComponent },
  { path: 'homeDesigner', component: HomeDesignerComponent },
  { path: 'buildingPosters', component: BuildingPostersComponent },
  { path: 'posters', component: PostersComponent },
  { path: 'okPosters', component: OkPostersComponent },
  { path: 'buildMonth', component: BuildMonthComponent },
  { path: 'sizePosters', component: SizePostersComponent },
  { path: 'oldPosters', component: OldPostersComponent },
  { path: 'allUsers', component: AllUsersComponent },
  { path: 'impression', component: ImpressionComponent },
  { path: 'newBuildings', component: NewBulidingsComponent },
  { path: 'settingBoards', component: SettingBoardsComponent },
  { path: 'addHomePoster', component: AddHomePosterComponent },
  { path: 'buildBoard', component: BuildBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    /* MaterialModule */],
  exports: [RouterModule]
})
export class AppRoutingModule { }
