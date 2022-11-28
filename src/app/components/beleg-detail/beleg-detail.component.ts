import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BelegService } from 'src/app/services/beleg.service';
import { Beleg } from 'src/app/models/beleg.model';

@Component({
  selector: 'app-beleg-detail',
  templateUrl: './beleg-detail.component.html',
  styleUrls: ['./beleg-detail.component.css']
})
export class BelegDetailComponent implements OnInit {

  currentBeleg : Beleg = new Beleg();

  constructor(
    private belegService: BelegService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getBeleg(this.route.snapshot.params['id']);
  }

  getBeleg(id: number): void {
    this.belegService.getBeleg(id)
      .subscribe(
        data => {
          this.currentBeleg = data;
          console.log(data);
        });
  }

  getBack() {
    this.location.back();
  }
}
