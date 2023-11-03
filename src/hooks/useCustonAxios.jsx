import axios from "axios"

const getAxios = axios.create({
    baseURL: "http://localhost:4000/"
})

const useCustonAxios = () => {
  return getAxios
}

export default useCustonAxios