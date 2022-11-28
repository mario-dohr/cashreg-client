import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BelegService } from 'src/app/services/beleg.service';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit  {
    constructor(private belegService : BelegService) { }

    chart: any;

    ngOnInit(): void {
      this.retrieveChartData();
    }

    retrieveChartData(): void {
      console.log('retrieveChartData');
      this.belegService.getChartData()
        .subscribe(
          data => {
            this.chart = new Chart("MyChart",data);
            //this.createChart();
          }
        )
    }
    
    createChart(){
  
      this.chart = new Chart("MyChart", {
        type: 'line', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                   '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
           datasets: [
            {
              label: "Sales",
              data: ['467','576', '572', '79', '92',
                   '574', '573', '576'],
              backgroundColor: 'blue',
              borderColor: 'blue',
            },
            {
              label: "Profit",
              data: ['542', '542', '536', '327', '17',
                     '0.00', '538', '541'],
              backgroundColor: 'limegreen',
              borderColor:'limegreen',
            }  
          ]
        },
       
      });
    }
  
}
