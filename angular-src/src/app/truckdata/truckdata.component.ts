import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-truckdata',
  templateUrl: './truckdata.component.html',
  styleUrls: ['./truckdata.component.scss']
})
export class TruckdataComponent implements OnInit, AfterViewInit {

  @Input() truckData;

  truck: object = {
    id: 1,
    distance: 3,
    maxWeight: 2,
    sad: 5,
    asdf: 1
  }

  truckArr = [];
  truckKeys = [];

  constructor() { }

  ngOnInit() {
    this.truckArr = d3.values(this.truckData);
    this.truckKeys = d3.keys(this.truckData);
    console.log(this.truckArr);
  }

  ngAfterViewInit() {
    // let width = 300;
    // let scaleFactor = 1;
    // let barHeight = 30;
    // let graph = d3.select('.truck-info')
    //   .append('svg')
    //   .attr('width', width)
    //   .attr('height', barHeight * this.truckArr.length);
    // let bar = graph.selectAll('g')
    //     .data(this.truckArr)
    //     .enter()
    //     .append('g')
    //     .attr('transform', function(d, i){
    //       return `translate(0, ${i * barHeight})`;
    //     });
    // bar.append('rect')
    //     .attr('width', function(d){
    //       if(typeof d === 'object') {
    //         return 0;
    //       } else {
    //         return scaleFactor * d;
    //       }
    //     })
    //     .attr('height', function(){
    //       return barHeight - 1;
    //     })
    //     .attr('fill', 'red');
    // bar.append('text')
    //     .attr('x', (d) => {
    //       if(typeof d === 'object') {
    //         return 0;
    //       } else {
    //         return d * scaleFactor;
    //       }
    //     })
    //     .attr('y', () => barHeight / 2)
    //     .attr('fill', 'black')
    //     .text((d) => {
    //       if(typeof d === 'object') {
    //         return 'this is id'
    //       } else {
    //         return d;
    //       }
    //     });

    let margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(".truck-info")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // Parse the Data

      // X axis
      var x = d3.scaleBand()
        .range([0, width])
        .domain(this.truckKeys.map(function (d) { return d; }))
        .padding(0.2);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 13000])
        .range([height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // Bars
      svg.selectAll("mybar")
        .data(this.truckArr)
        .enter()
        .append("rect")
        .attr("x", function (d) { return x(d); })
        .attr("y", function (d) { return y(d); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d); })
        .attr("fill", "#69b3a2")
  }

}
