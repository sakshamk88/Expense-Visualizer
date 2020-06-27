import React, { Component } from "react";
import Chart from "react-apexcharts";

class radarchart extends Component {
  state = {
    options: {
      chart: {
        id: "radar-chart",
      },

      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49],
      },
    ],
  };

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="radar"
      />
    );
  }
}

export default radarchart;
