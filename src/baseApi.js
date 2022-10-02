import axios from "axios"

const baseApi = "https://jsonplaceholder.typicode.com"

const User = {
  getUsers: () => request.get(`/users`),
}

const request = {
  get: async (url) =>
    await axios.get(`${baseApi}${url}`).then((res) => {
      console.log(res.data)
      return res.data
    }),
  post: async (url, body) => {
    await axios.post(`${baseApi}${url}`, body).then((res) => {
      return res.data
    })
  },
  delete: async (url) =>
    await axios.delete(`${baseApi}${url}`).then((res) => {
      return res.data
    }),
}

export default { User }
