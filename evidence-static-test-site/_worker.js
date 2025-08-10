export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // console.log("Incoming request:", url.pathname);

    if (url.pathname === "/health") return new Response("ok");

    const unauthorized = () =>
      new Response("Unauthorized", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Restricted"' },
      });

    const authHeader = request.headers.get("Authorization") || "";
    // console.log("Authorization header:", authHeader);

    const [scheme, encoded] = authHeader.split(" ");
    if (scheme !== "Basic" || !encoded) {
      console.log("Invalid or missing auth scheme");
      return unauthorized();
    }

    try {
      const [user, pass] = atob(encoded).split(":");
      console.log("Decoded credentials:", user, pass);
      if (user !== "user" || pass !== "pass") {
        console.log("Incorrect credentials");
        return unauthorized();
      }
    } catch (err) {
      console.log("Failed to decode auth header", err);
      return unauthorized();
    }

    // console.log("Auth passed ✅");
    return env.ASSETS.fetch(request); // serve the file
  },
};
