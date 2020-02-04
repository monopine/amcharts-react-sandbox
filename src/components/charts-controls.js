import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { activeChartType, activeDataSource } from "../actionCreators";

// Components
import { ChartCanvas } from "./chart-canvas";

export class ChartControls extends Component {
  renderSelectOptions() {
    const { chartTypeOptions } = this.props;

    return chartTypeOptions.map((option, key) => {
      return (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      );
    });
  }

  renderDataOptions() {
    const { dataSourceOptions } = this.props;

    return dataSourceOptions.map((option, key) => {
      return (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      );
    });
  }

  render() {
    return (
      <>
        <div className="toolbar-wrap">
          {this.renderSelectOptions() && (
            <select
              id="chart-type"
              onChange={this.props.handleActiveChartType}
              value={this.props.chartType}
            >
              {this.renderSelectOptions()}
            </select>
          )}
          {this.renderDataOptions() && (
            <select
              id="data-source"
              onChange={this.props.handleActiveDataSource}
              value={this.props.activeDataSource}
            >
              {this.renderDataOptions()}
            </select>
          )}
        </div>

        <div className="chart-area">
          <p>
            Currently showing a{" "}
            <span className="highlight">{this.props.chartType}</span> using the{" "}
            <span className="highlight">{this.props.activeDataSource}</span>
          </p>
          <ChartCanvas
            chartType={this.props.chartType}
            dataSource={this.props.activeDataSource}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  chartType: state.chartType,
  activeDataSource: state.activeDataSource,
  chartTypeOptions: state.chartTypeOptions,
  dataSourceOptions: state.dataSourceOptions
});

const mapDispatchToProps = dispatch => ({
  handleActiveChartType(event) {
    dispatch(activeChartType(event.target.value));
  },
  handleActiveDataSource(event) {
    dispatch(activeDataSource(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartControls);
