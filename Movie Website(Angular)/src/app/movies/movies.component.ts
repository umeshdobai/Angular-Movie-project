import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.services';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

        constructor(private movservice:MovieService) { }
        showImg:boolean = false;
        imgWidth:number=100;
        imgHeight:number=100;
        movies:IMovie[]=[];
        searchedMovies:IMovie[]=[];
        _movieSearch:string;
        ngOnInit(): void {
            this.movservice.getMovies().subscribe(
            movies =>{
                this.movies = movies;
                this.searchedMovies = this.movies;

            },

            );
        }
  get movieSearch():string{
  return this._movieSearch;
  }
  set movieSearch(value:string)
  {
    this._movieSearch = value;
    this.searchedMovies = this.movieSearch ? this.searchMovies(this.movieSearch):this.movies;
  }
  searchMovies(search:string):IMovie[]{

    search = search.toLocaleLowerCase();
    return this.movies.filter((movie:IMovie)=>
     movie.movieName.toLocaleLowerCase()== search);
  
  }
  switchImg():void{
  this.showImg = !this.showImg;
  }

}
