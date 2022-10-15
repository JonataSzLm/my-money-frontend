import Axios from "axios"
const BABSE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = Axios.get(`${BABSE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}