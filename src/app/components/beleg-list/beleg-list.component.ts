import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Beleg } from 'src/app/models/beleg.model';
import { BelegService } from 'src/app/services/beleg.service';


@Component({
  selector: 'app-beleg-list',
  templateUrl: './beleg-list.component.html',
  styleUrls: ['./beleg-list.component.css']
})
export class BelegListComponent implements OnInit {



  belege: Beleg[] = [];
  
  page = 1;
	pageSize = 15;
	collectionSize = 70;

  constructor(private router: Router, private belegService: BelegService) { }

  ngOnInit(): void {
    this.retrieveBelege();
  }

  retrieveBelege(): void {
    console.log('retrieveBelege');
    this.belegService.getAll()
      .subscribe(
        data => {
          this.belege = data;
          this.collectionSize = data.length;
        }
      )
  }

  showDetail(row: any): void {
    this.router.navigate([`/belege/${row.id}`]);
  }
 

}
