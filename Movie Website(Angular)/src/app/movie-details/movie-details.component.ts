import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from'@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor (private route:ActivatedRoute, private router: Router ){};

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
  }

  onBack(): void {

        this.router.navigate(['/movies']);
    }
}
