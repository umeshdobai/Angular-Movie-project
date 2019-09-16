import { Injectable } from '@angular/core';
import { IMovie } from './movie';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class MovieService{
     movieurl = './app/data/movie.json';
     constructor(private httpSer:HttpClient) {
    }
     getMovies():Observable<IMovie[]>{
    
        return this.httpSer.get<IMovie[]>(this.movieurl).pipe(
        tap(data => console.log('Movies:'+JSON.stringify(data))),
        catchError(this.handleError)
    );
     }
     private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
    
        return throwError(errorMessage);
       
    }
}