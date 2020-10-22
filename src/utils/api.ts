import Vue from 'vue'
import instance from './instance'
const baseURL: string = 'http://localhost:3001/'
const  header: object = {
  'Content-Type': 'application/json;charset=UTF-8'
}
// type Methods = 'GET|POST|PUT|DELETE'
// let api = {
//   request(url: string, method:any, headers:object = header,params,data) {
//     return new Promise((resolve, reject) => {
//       instance({ headers, method, url, params, data }).then(res => {
//         // if () {
//           resolve(res)
//         // }
//       })
//     })
//   },
//   get(url: string, params: any) {
//     let p: string = ''
//     if (!Object.is(params, undefined)) {
//       p += '?'
//       for (let key in (params as object)) {
//         if (params.hasOwnProperty(key) && params[key] !== null) {
//           p += `${key}=${params[key]}&`
//         }
//       }
//       p = p.substring(0,-1)
//     }
//     return instance.get(`${url}${p}`)
//   }
// }