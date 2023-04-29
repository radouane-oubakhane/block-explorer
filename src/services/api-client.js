import axios from "axios"

const url = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=1GZ3QR44QZ6JKI6AKQJNTC3JNB19T7C1M6'

export default axios.create({
    baseURL: url,
})