import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ChartControls from "./components/charts-controls";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="section-wrap">
          <h1>AMCharts Sandbox</h1>
        </div>

        <div className="section-wrap">
          <p>
            Toggle the data source and the chart type. React will load a new
            AMChart instance/component, and use data from Redux.
          </p>
        </div>

        <div className="section-wrap">
          <ChartControls />
        </div>
      </Provider>
    </div>
  );
}
