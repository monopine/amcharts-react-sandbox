// Actions
import { ACTIVE_CHART_TYPE, ACTIVE_DATA_SOURCE } from "./actions";

// Data Sources & Configuration
import { chartTypes } from "./chart-types";
import { dataSources } from "./data-sources";

const DEFAULT_STATE = {
  chartType: chartTypes[0].value,
  activeDataSource: dataSources[0].value,
  chartTypeOptions: chartTypes,
  dataSourceOptions: dataSources
};

const activeChartType = (state, action) => {
  return Object.assign({}, state, { chartType: action.payload });
};

const activeDataSource = (state, action) => {
  return Object.assign({}, state, { activeDataSource: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTIVE_CHART_TYPE:
      return activeChartType(state, action);
    case ACTIVE_DATA_SOURCE:
      return activeDataSource(state, action);
    default:
      return state;
  }
};

export default rootReducer;
