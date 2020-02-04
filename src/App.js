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
            Toggle the <span className="tooltip">data source</span> and the{" "}
            <span className="tooltip">chart type</span> to see the data through
            a new lens
          </p>
        </div>

        <div className="section-wrap">
          <ChartControls />
        </div>
      </Provider>
    </div>
  );
}
