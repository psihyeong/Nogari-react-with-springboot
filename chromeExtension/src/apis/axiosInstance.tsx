import axios, { AxiosInstance } from 'axios'

// export const interceptors = (instance: AxiosInstance) => {
//   instance.interceptors.request.use(
//     (config) => {
//       // access token 헤더 삽입 코드
//       const token = sessionStorage.getItem('accessToken')
//       config.headers.Authorization = `Bearer ${token}`
//       return config
//     },
//     (error) => Promise.reject(error.response)
//   )
//   return instance
// }

const BASE_URL = `https://k8c206.p.ssafy.io/api/v1/` // 로컬 서버

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url: string, options?: object) => {
  const instance = axios.create({ baseURL: url, ...options })
  return instance
}

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url: string, options?: object) => {
  const instance = axios.create({ baseURL: url, ...options })
  // interceptors(instance)
  return instance
}

export const axBase = axiosApi(BASE_URL)
export const axAuth = axiosAuthApi(BASE_URL)

// refresh token 으로 갱신 필요한 경우