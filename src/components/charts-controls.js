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

  returnSelectedData() {
    const result = this.props.dataSourceOptions.find(
      ({ value }) => value === this.props.activeDataSource
    );

    if (result) {
      return result;
    } else {
      return null;
    }
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

        <ChartCanvas
          chartType={this.props.chartType}
          dataSource={this.returnSelectedData()}
        />
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
