import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export class ChartPie extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer"
      }
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      },
      {
        country: "Belgium",
        litres: 60
      }
    ];
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return <div id="chartdiv" style={{ width: "100%", height: "500px" }} />;
  }
}
