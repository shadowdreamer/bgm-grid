export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  const newPath = url.pathname.replace('/api/next', ''); // 移除前缀
  const targetUrl = `https://next.bgm.tv${newPath}`;
  console.log(targetUrl);
  
  let body;
  if ( event.method !== 'GET') {
    body = await readRawBody(event); 
  }
  const response = await fetch(targetUrl, {
    method: event.method,
    headers: event.headers,
    body:event.method !== 'GET' ? body : undefined, 
  });
  return await response.json();
});