import React, { Component } from "react";
import { GetUserAsset } from "../Services/Api";
import Chart from "react-apexcharts";

export default class DenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Cash Balance", "Asset Balance"],
        },
      },
      series: [
        {
          data: [],
        },
      ],
    };
  }

  getBarData = () => {
    GetUserAsset().then((res) => {
      console.log(res.assetBalance);
      console.log(res.cashBalance);
      const newSeries = [];
      newSeries.push({ data: [res.cashBalance, res.assetBalance] });
      this.setState({
        series: newSeries,
      });
    });
  };

  componentDidMount() {
    this.getBarData();
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
