import React, { Component } from "react";

import { ChartBar } from "./charts/chart-bar";
import { ChartLine } from "./charts/chart-line";
import { ChartPie } from "./charts/chart-pie";

export class ChartCanvas extends Component {
  returnSelectedChart() {
    switch (this.props.chartType) {
      case "bar-graph":
        return <ChartBar />;
      case "line-graph":
        return <ChartLine />;
      case "pie-chart":
        return <ChartPie />;
      default:
        return null;
    }
  }

  render() {
    return <>{this.returnSelectedChart()}</>;
  }
}
