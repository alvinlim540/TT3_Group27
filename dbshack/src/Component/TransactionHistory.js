import React, { Component } from "react";
import axios from "axios";
import { TransactionTable } from "./TransactionTable";

class TransactionHistory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			transactionId: "",
			orderType: "",
			timestamp: "",
			AssetName: "",
			assetSymbol: "",
			assetAmount: "",
			assetPrice: "",
			cashAmount: "",
		};
	}

	changeHandler = (e) => {
		//for example. this is event
		// key     :       value
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
		// Need to do a post request.
		axios({
			method: "post",
			url:
				"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
			headers: {
				"x-api-key": "vSxwt0bA4J2JMaIfDOrAZ7YUykHi7v64lBhi1Eug",
			},
			data: {
				firstName: "Fred",
				lastName: "Flintstone",
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				TransactionHistory
				<TransactionTable></TransactionTable>
			</div>
		);
	}
}

export default TransactionHistory;
