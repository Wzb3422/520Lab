import axios from 'axios'


async function post(path, data, token) {
  const baseUrl = 'http://47.101.204.202:5000'
  let url = baseUrl.concat(path)
  let ret = await new Promise(resolve => {
    axios({
      method: 'post',
      url,
      data,
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then(res => resolve(res.data))
  })
  .then(ret => ret)
  return ret
}

export default post
