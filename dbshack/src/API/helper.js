import axios from "axios";

export default axios.create({
	// create an instances on the Base URL
  baseURL: "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek",
});