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
export const getAccessToken = post('https://bgm-auth.dovahkiin.top/auth');