import axios from 'axios'
const baseURL: string = 'http://localhost:3001/'

const instance = axios.create({
  baseURL,
  timeout: 8000,
  responseType: 'json',
  validateStatus(status) {
    return status === 200
  }
})

instance.interceptors.request.use(
  (request: any) => {
  console.log('请求前')
  let token: string | null = localStorage.getItem('token')
  if (token == null) return 
  return request
  },
  (error) => {
    console.log('请求前的错误',error)
    
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res)
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default instance