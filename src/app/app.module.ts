import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { BuildDataComponent } from './components/build-data/build-data.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBusinessComponent } from './components/home-business/home-business.component';
import { HomeBuilderComponent } from './components/home-builder/home-builder.component';
import { BuildMonthComponent } from './components/build-month/build-month.component';
import { BuildingPostersComponent } from './components/building-posters/building-posters.component';
import { PostersComponent } from './components/posters/posters.component';
import { OkPostersComponent } from './components/ok-posters/ok-posters.component';
import { SizePostersComponent } from './components/size-posters/size-posters.component';
import { OldPostersComponent } from './components/old-posters/old-posters.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HomeDesignerComponent } from './components/home-designer/home-designer.component';
import { ImpressionComponent } from './components/impression/impression.component';
import { NewBulidingsComponent } from './components/new-bulidings/new-bulidings.component';
import { SettingBoardsComponent } from './components/setting-boards/setting-boards.component';
import { AddHomePosterComponent } from './components/add-home-poster/add-home-poster.component';
import { BuildBoardComponent } from './components/build-board/build-board.component';
/* import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule}  from '@angular/material/icon'; */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BuildDataComponent,
    HomeComponent,
    HomeBusinessComponent,
    HomeBuilderComponent,
    BuildMonthComponent,
    BuildingPostersComponent,
    PostersComponent,
    OkPostersComponent,
    SizePostersComponent,
    OldPostersComponent,
    AllUsersComponent,
    HomeDesignerComponent,
    ImpressionComponent,
    NewBulidingsComponent,
    SettingBoardsComponent,
    AddHomePosterComponent,
    BuildBoardComponent
  ],
  imports: [/* MatInputModule,
    MatIconModule, */
    BrowserModule,
    /* MatFormFieldModule, */
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

    ReactiveFormsModule,
    MatSliderModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
