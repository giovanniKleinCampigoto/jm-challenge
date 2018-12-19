import axios from "axios"
import cookies from "universal-cookie/cjs"

const URL = "http://localhost:3004"

axios.interceptors.request.use(function(config) {

    const cookie = new cookies()

    const token = cookie.get("ACCESS-TOKEN");

    if ( token != null ) {
        config.headers["ACCESS-TOKEN"] = token;
    }

    return config;

    }, function(err) {

    return Promise.reject(err);
});

class Api {
    static get(uri) {
        return axios.get(`${URL}${uri}`)
    }
}

export default Api