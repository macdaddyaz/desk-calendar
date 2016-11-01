import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {currentMonth} from '../calendar.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    // Initialize the Calendar Service to 'default'
    let now = this.currentMonth();
    this.router.navigate(['/', now.year, now.month]);
  }

  currentMonth() {
    return currentMonth();
  }
}
