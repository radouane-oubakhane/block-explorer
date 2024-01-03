import axios from "axios"


const apiKey = import.meta.env.REACT_APP_ETHERSCAN_API_KEY;

const url = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + apiKey;

export default axios.create({
    baseURL: url,
})



