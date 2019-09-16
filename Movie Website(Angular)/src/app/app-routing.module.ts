import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {homeComponent} from 'src/home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UserComponent} from '../user/user.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
{path:'home',component:homeComponent},
{path:'aboutus',component:AboutusComponent},
{path:'movies',component:MoviesComponent},
{path:'movie-details/:id',component:MovieDetailsComponent},
{path:'register',component:UserComponent},
{path:'login',component:LoginComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
