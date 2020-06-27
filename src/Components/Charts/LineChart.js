import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  state = {
    options: {
      chart: {
        id: "area-chart",
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          1991,
          1992,
          1993,
          1994,
          1995,
          1996,
          1997,
          1998,
          1999,
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 54, 29, 77, 56, 82, 47, 38],
      },
      {
        name: "series-2",
        data: [40, 30, 55, 40, 60, 49, 90, 71, 24, 49, 57, 76, 42, 47, 38],
      },
    ],
  };

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
