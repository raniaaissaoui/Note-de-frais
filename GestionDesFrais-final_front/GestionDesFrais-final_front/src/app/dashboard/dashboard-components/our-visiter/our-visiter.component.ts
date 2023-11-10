import { Component, ViewChild } from "@angular/core";
import { CollaborateurService } from "src/app/services/collab.service";
import Chart from 'chart.js/auto';


@Component({
  selector: "app-our-visiter",
  templateUrl: "./our-visiter.component.html"
})
export class OurVisiterComponent {

  numbers:number[]=[];

  constructor(private cs:CollaborateurService) {
    
  }


  ngOnInit(): void {this.onLoadDog();}

  onLoadDog()
{

	this.cs.collabByProfil().subscribe(data => 
		{
      console.log(data);
      this.numbers=data;
		  if(this.numbers.length==1)
       this.numbers[1]=0;
		
	var myChart3 = new Chart("myChartDog", {
		type: 'doughnut',
		data: {
		labels: ["ResponsableRH","Collaborateur"],
		datasets: [{
		label: '# of Votes',
		data: this.numbers,
		backgroundColor: [
	
      'rgb(138,43,226) ',
			'rgb(30,144,255)',
			
		],
	}]	
	}, 
	options: {
	responsive: true,
	}
	});
});
}
}
