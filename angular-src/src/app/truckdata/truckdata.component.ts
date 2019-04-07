import { Component, OnInit, AfterViewInit, Input, AfterContentInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-truckdata',
  templateUrl: './truckdata.component.html',
  styleUrls: ['./truckdata.component.scss']
})
export class TruckdataComponent implements OnInit, AfterContentInit {

  @Input() initialTruck;

  truck = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    for(let key in this.initialTruck){
      if(typeof this.initialTruck[key] === 'object' || key === 'StationId') {
        continue;
      } else {
        let propObj = {
          propname: key,
          value: +this.initialTruck[key]
        };
        this.truck.push(propObj);
      }
    }
  }

  ngAfterContentInit() {
    let margin = { top: 30, right: 30, bottom: 70, left: 130 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    let svg = d3.select(this.elRef.nativeElement)
      .select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scaleLinear()
      .domain([0, 1000])
      .range([0, width]);
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    let y = d3.scaleBand()
      .range([0, height])
      .domain(this.truck.map(function (d) { return d.propname; }))
      .padding(.1);
    svg.append("g")
      .call(d3.axisLeft(y));

    svg.selectAll('rect')
      .data(this.truck)
      .enter()
      .append('rect')
      .attr('x', x(0))
      .attr('y', function (d) { return y(d.propname) })
      .attr("width", function (d) {
        if(d.value < 10) {
          d.value *= 100;
        } else if (d.value >= 10 && d.value < 100) {
          d.value *= 10;
        } else if(d.value >= 1000 && d.value < 10000) {
          d.value /= 10;
        } else if(d.value >= 10000) {
          d.value /= 100;
        }
        return x(d.value);
      })
      .attr("height", y.bandwidth())
      .attr("fill", "#3950ad")
  }

}
