import { ACTIVE_CHART_TYPE } from "./actions";
import { ACTIVE_DATA_SOURCE } from "./actions";

export function activeChartType(chartType) {
  return {
    type: ACTIVE_CHART_TYPE,
    payload: chartType
  };
}

export function activeDataSource(dataSource) {
  return {
    type: ACTIVE_DATA_SOURCE,
    payload: dataSource
  };
}
