import {Input,Output, Component, OnInit, EventEmitter } from '@angular/core';
@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent{

@Input() rating:number;
starwidth:number;
@Output() ratingClick:EventEmitter<string>=new EventEmitter<string>();
ngOnChanges(): void {
  this.starwidth=+this.rating * 75/5;
}
onclick():void{
  this.ratingClick.emit(`The movie rating ${this.rating} is clicked`);
}
  ngOnInit() {
  }

}
