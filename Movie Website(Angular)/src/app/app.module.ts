import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeComponent } from '../home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RatingComponent } from './rating/rating.component';
import { UserComponent} from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import{FormsModule} from'@angular/forms';
import{HttpClientModule} from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,homeComponent, AboutusComponent, PageNotFoundComponent, MoviesComponent, MovieDetailsComponent, RatingComponent,UserComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
