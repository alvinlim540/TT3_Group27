import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { GetUserAsset } from "../Services./Api";

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
          name: "data",
          data: [],
        },
      ],
    };
  }

  getBarData = () => {
    GetUserAsset().then((res) => {
      console.log(res);
      this.setState({ rows: res });
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
