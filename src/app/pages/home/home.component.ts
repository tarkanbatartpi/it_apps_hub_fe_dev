import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details: any;

  constructor(public _data: JobsService){}

  ngOnInit(): void {
      
    this._data.getJobs().subscribe(e => {
      console.log(e);
      this.details = e;
    })

  }

}
