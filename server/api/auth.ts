export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { code } = body;
  if (!code) {
    return { error: "Missing code, Wut's wrong man?" };
  };
  const config = useRuntimeConfig();
  const CLIENT_ID = config.CLIENT_ID;
  const CLIENT_SECRET = config.CLIENT_SECRET;
  const form = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: 'https://bgm.dovahkiin.top',
  }
  console.log(form);
  
  try {
    const response = await $fetch("https://bgm.tv/oauth/access_token", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(form)
    });

    return response;
  } catch (error) {
    console.error("Error fetching token:", error);
    return { error: "Failed to fetch access token" };
  }
})