import { Component } from "@angular/core";
import * as Highcharts from 'highcharts';
import { Options } from "highcharts";
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public columnChart;
	public filterData;
	public filterLabel;
	public chartRef;
	public firstLevelFilter;
  updateFlag = false;
  public chartData = [
			{
				name: "Central",
				data: [
					{ name: "BL", y: 26, drilldown: true, type: 'column' }
				],
				type: 'column'
			},
			{
				name: "East",
				data: [
					{ name: "BL", y: 23, drilldown: true, type: 'column' }
				],
				type: 'column'
			},
			{
				name: "West",
				data: [
					{ name: "BL", y: 23, drilldown: true, type: 'column' },
					{ name: "PL", y: 23, drilldown: true, type: 'column' }
				],
				type: 'column'
			},
			{
				name: "North",
				data: [
					{ name: "BL", y: 23, drilldown: true, type: 'column' }
				],
				type: 'column'
			},
			{
				name: "Central",
				data: [
					{ name: "BL", y: 26, drilldown: true, type: 'column' }
				],
				type: 'column'
			},
			{
				name: "East",
				data: [
					{ name: "BL", y: 23, drilldown: true, type: 'column' }
				],
				type: 'column'
			},
			{
				name: "West",
				data: [
					{ name: "BL", y: 23, drilldown: true, type: 'column' },
					{ name: "PL", y: 23, drilldown: true, type: 'column' }
				],
				type: 'column'
			},
			{
				name: "North",
				data: [
					{ name: "BL", y: 23, drilldown: true, type: 'column' }
				],
				type: 'column'
			}
		]
   Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Options;


constructor() {
  let val = this;
    this.chartOptions = {
   chart: {
        height: 300,
        type: 'column',
        events: {
					drilldown: function (e) {
							let chart: any = this;
						val.firstLevelFilter = e.point.name
						val.filterLabel = "Label Key 2"
						val.filterData = [
							{ value: "key2_1", label: "key2_1" },
							{ value: "key2_1", label: "key2_2" },
							{ value: "key2_1", label: "key2_3" },
							{ value: "key2_1", label: "key2_4" },
						];
						if (!e.seriesOptions) {
            let series = [];
              console.log(e.point.series.name)
              if(e.point.series.name === 'West' || e.point.series.name === 'East' || e.point.series.name === 'North'  || e.point.series.name === 'South' || e.point.series.name === 'Central' ) {

                  series = [
									{
										name: "AP",
										data: [
											{ name: "BL", y: 23, drilldown: true, type: 'column' }
										],
									},
									{
										name: "TS",
										data: [
											{ name: "BL", y: 23, drilldown: true, type: 'column' }
										],
									},
									{
										name: "Kerala",
										data: [
											{ name: "BL", y: 23, drilldown: true, type: 'column' }
										],
									},
									{
										name: "AP",
										data: [
											{ name: "BL", y: 22, drilldown: true, type: 'column' }
										],
									},
									{
										name: "TS",
										data: [
											{ name: "BL", y: 27, drilldown: true, type: 'column' }
										],
									},
									{
										name: "Kerala",
										data: [
											{ name: "BL", y: 30, drilldown: true, type: 'column' }
										],
									},
								]
              }
							else {
                series = [
									{
										name: "Accpted",
										data: [
											{ name: "BL", y: 23, drilldown: true, type: 'column' }
										],
									},
									{
										name: "Rejected",
										data: [
											{ name: "BL", y: 23, drilldown: true, type: 'column' }
										],
									},
									{
										name: "Approval",
										data: [
											{ name: "BL", y: 23, drilldown: true, type: 'column' }
										],
									},
									{
										name: "Accpted",
										data: [
											{ name: "BL", y: 22, drilldown: true, type: 'column' }
										],
									},
									{
										name: "Rejected",
										data: [
											{ name: "BL", y: 27, drilldown: true, type: 'column' }
										],
									},
									{
										name: "Approval",
										data: [
											{ name: "BL", y: 30, drilldown: true, type: 'column' }
										],
									},
								]
              }

							series.map((obj, index) => {
								chart.addSingleSeriesAsDrilldown(e.point, series[index])
							})
							chart.applyDrilldown();
							val.chartRef = chart;
						}

					},
					drillup: function (e) {
						val.filterLabel = undefined
						val.filterData = [];
					},
				},
    },
    
    title: {
        text: 'Highcharts Drilldown Plugin'
    },

    xAxis: <any> {
        categories: true
    },
  
    
    legend: {
        enabled: false
    },
    
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true
            },
            shadow: false
        },
        pie: {
            size: '80%'
        }
    },
    
    series: <any> this.chartData
  };
  }


  ngOnInit() { }
  

  	doSomething(e) { 
	if (e.target.value === 'key_1') {
			this.chartData = [{
				name: "North",
				data: [
					{ name: "BL", y: 23, drilldown: true, type: 'column' }
				],
				type: 'column'
			}]
		}
		else {

			let data = [
				{
					name: "GU",
					data: [
						{ name: "BL", y: 28, drilldown: true, type: 'column' }
					],
				},

				{
					name: "GU",
					data: [
						{ name: "BL", y: 22, drilldown: true, type: 'column' }
					],
				},

			]

      for(let i = this.chartRef.series.length-1 ; i >=0 ; i--){
                this.chartRef.series[i].update({
                    visible: false,
                    showInLegend: true,
                  })
            }

        this.chartRef.series[5].update({
                      visible: false,
                      showInLegend: true,
                    });
                    
      this.chartRef.xAxis[0].setCategories(["BL"] , true)



      this.chartRef.update({
        series : data
      })


    this.updateFlag = true;
		

			console.log(this.chartRef);


		}
    }

}
