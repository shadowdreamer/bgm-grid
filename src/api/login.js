const post = function (url) {
  return async function (data) {
    const resp = await fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await resp.json()
  }
}
const getAccessToken = post('http://127.0.0.1:8787/auth');


export {
  getAccessToken
}