import axios from "axios";

const api = axios.create({
    baseURL: "http://rickandmortyapi.com/api/"
});

export default api;
