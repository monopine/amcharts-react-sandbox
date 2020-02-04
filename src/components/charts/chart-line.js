import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export class ChartLine extends Component {
  componentDidMount() {
    // Create chart
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    // chart.data = generateChartData();
    chart.data = this.props.dataSource.data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: "day",
      count: 1
    };
    dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "Unique visitors";

    let series = chart.series.push(new am4charts.LineSeries());
    // series.dataFields.dateX = "date";
    // series.dataFields.valueY = "visits";
    // series.tooltipText = "Visits: [bold]{valueY}[/]";
    // series.fillOpacity = 0.3;

    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);

    dateAxis.start = 0.8;
    dateAxis.keepSelection = true;
  }

  componentDidUpdate() {
    this.chart.data = this.props.dataSource.data;
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
