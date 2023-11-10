import { Component, OnInit, ViewChild } from "@angular/core";
import { DemandeService } from "src/app/services/demande.service";
import Chart from 'chart.js/auto';

@Component({
  selector: "app-sales-overview",
  templateUrl: "./sales-overview.component.html"
})
export class SalesOverviewComponent implements OnInit {


  accordeType : any[]=[] ; 
  accordeNum : number[]=[];

  constructor(private ds:DemandeService) {
    
  }


  ngOnInit(): void {this.onLoadDog();}

  onLoadDog()
{

	this.ds.ListerDemandeType().subscribe(data => 
		{
      console.log(data);
      for (var i=0; i<data.length; i++) 
			{  
			this.accordeType[i]= ( data[i][0]);
			this.accordeNum[i]= ( data[i][1]);
			}      
		
	var myChart3 = new Chart("myChartHisto", {
		type: 'bar',
		data: {
		labels: this.accordeType,
		datasets: [{
		label: 'Demandes',
		data: this.accordeNum,
		backgroundColor: [
      'rgb(176,216,230)',
			'rgb(30,144,255)',
      'rgb(138,43,226) ',
      
			
		],
    borderColor:[
      'rgb(135,206,250,1)',
			'rgb(176,224,230,1)',
      'rgb(255,192,203,1)'

    ]
	}]	
	}, 
	options: {
	responsive: true,
	}
	});
});
}
}
