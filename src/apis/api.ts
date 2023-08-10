import axios from "axios";
import { NEST_JS_API } from "../../env-vars";


const api = axios.create({
    baseURL: NEST_JS_API,
    headers: {
      'Content-Type': 'application/json',
    },
})

export const apiCall = async (url: string, method: any, data?: any, params?: any) => {
  const res = await api({ url, method, data, params })
  return res.data
}
