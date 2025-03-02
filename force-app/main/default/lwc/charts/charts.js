import { LightningElement, api } from 'lwc';
import CHARTJS from '@salesforce/resourceUrl/chartJS'
import {loadScript} from 'lightning/platformResourceLoader'

export default class Charts extends LightningElement {
    isChartJsInitialized
    chart
    @api type
    @api chartData
    @api chartHeading
    @api chartLabels


    renderedCallback(){
        if(this.isChartJsInitialized){
            return;
        }
        loadScript(this, CHARTJS+'/chartJs/Chart.js').then(()=>{
            console.log("chartJs loaded succesfully")
            this.isChartJsInitialized = true
            console.log(this.isChartJsInitialized)
            this.loadCharts()
        }).catch(error=>{
            console.error(error)
            
            console.log("LoadScript failure " + error)
        })
    }

    loadCharts(){
        window.Chart.platform.disableCSSInjection = true

        const canvas = document.createElement('canvas')
        this.template.querySelector('div.chart').appendChild(canvas)
        const ctx = canvas.getContext('2d')
        this.chart = new window.Chart(ctx, this.config())
        console.log(this.chart)
        
        console.log("LoadCharts Completed")
    }
    config(){
        console.log("Entered Config Method")
        return {
            type: this.type,
            data: {
                labels: this.chartLabels ? this.chartLabels:[],
                datasets: [{
                    label: this.chartHeading,
                    data: this.chartData ? this.chartData:[],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(30, 204, 148, 0.8)',
                        'rgba(130, 204, 148, 0.8)'
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        }
    }
}