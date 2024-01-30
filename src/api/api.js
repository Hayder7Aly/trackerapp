import axios from "axios";


const todoTrackerAPI = axios.create({
    baseURL: "https://65b66918da3a3c16ab00aaf2.mockapi.io",
})


export default todoTrackerAPI;