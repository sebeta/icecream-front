import axios from "axios"
import { API_URL } from "../constants"

const endpoint = "/icecream"
export const getIcecreamAxios = () => {
  return axios
    .get(API_URL + endpoint)
    .then((result) => {
      console.log("DATA AXIOS: ", result)
      //   setIcecreams(result.data)
      return result.data
    })
    .catch((err) => {
      console.log("ERROR ", err)
    })
}

export const getIcecreamFetch = () => {
  return fetch(API_URL + endpoint)
    .then((res) => res.json())
    .then((data) => {
      // console.log("DATA: ", data)
      return data
    })
}
