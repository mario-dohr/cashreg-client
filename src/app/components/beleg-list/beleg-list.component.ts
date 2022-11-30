import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
  von? : NgbDateStruct;
  bis? : NgbDateStruct;

  constructor(private router: Router, private belegService: BelegService) { }

  ngOnInit(): void {
    this.retrieveBelege();
  }

  retrieveBelege(): void {
    this.belegService.getAll(this.page - 1,this.von,this.bis)
      .subscribe(
        data => {
          this.belege = data.data;
          this.collectionSize = data.count;
        }
      )
  }

  onDateChanged(event:any): void {
    console.log(event);
    console.log(this.von);
    this.retrieveBelege();
  }
  showDetail(row: any): void {
    this.router.navigate([`/belege/${row.id}`]);
  }
}
