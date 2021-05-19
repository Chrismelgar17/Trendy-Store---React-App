import axios from "axios"
import {endpoint} from "./Config"

const instance = axios.create ({
    baseURL: endpoint
})

export default instance;