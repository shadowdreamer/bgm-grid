export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { code } = body;
  if (!code) {
    return { error: "Missing code, Wut's wrong man?" };
  };
  const config = useRuntimeConfig();
  const CLIENT_ID = config.CLIENT_ID;
  const CLIENT_SECRET = config.CLIENT_SECRET;
  const bgmAuth = "https://bgm.tv/oauth/access_token";
  const form = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: 'https://bgm.dovahkiin.top/auth_rediect',
  }
  try {
    const response = await fetch(bgmAuth, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(form)
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching token:", error);
    return { error: "Failed to fetch access token" };
  }
})