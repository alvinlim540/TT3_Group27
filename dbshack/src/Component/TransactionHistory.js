import React, { Component } from "react";
import axios from "axios";
import { TransactionTable } from "./TransactionTable";
import SubmitButton from "./submitButton";

class TransactionHistory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			isLoaded: false,

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

	componentDidMount() {
		
	}

	async getTransactionHistory() {
		var data = JSON.stringify({
			accountKey: "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
		});
		var config = {
			method: "post",
			mode: "no-cors", // cross origin resource sharing
			url:
				"https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"x-api-key": "vSxwt0bA4J2JMaIfDOrAZ7YUykHi7v64lBhi1Eug",
			},
			data: data,
		};

		axios(config)
			.then((response) => {
				console.log(response.data);
				return response.data;
				
			})
			.catch((error) => {
				console.log(error);
			});
		
	}

	submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
		// Need to do a post request.
	};

	render() {
		return (
			var { isLoaded, items } = this.state;

			<div>
				TransactionHistory
				<SubmitButton
					text="Click me for transaction history"
					disabled={this.state.buttonDisabled}
					onClick={() => this.getTransactionHistory()}
				/>
				<TransactionTable></TransactionTable>
			</div>
		);
	}
}

export default TransactionHistory;
