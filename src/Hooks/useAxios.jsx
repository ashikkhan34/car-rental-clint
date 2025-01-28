import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://car-rental-server-beta.vercel.app'
})


const useAxios = () => {
    return axiosPublic;
};

export default useAxios;