const configuration = {
  redirects: [
    // x / twitter
    { from: "/x", to: "https://x.com/yayjaybae" },
    { from: "/twitter", to: "https://x.com/yayjaybae" },

    // twitch
    { from: "/twitch", to: "https://www.twitch.tv/yayjaybae" },
    { from: "/live", to: "https://www.twitch.tv/yayjaybae" },
    { from: "/ttv", to: "https://www.twitch.tv/yayjaybae" },

    // youtube
    { from: "/youtube", to: "https://www.youtube.com/@yayjaybae" },

    // ko-fi
    { from: "/kofi", to: "https://ko-fi.com/yayjaybae" },

    // throne
    { from: "/throne", to: "https://throne.com/yayjaybae/wishlist" },

    // discord
    { from: "/discord", to: "https://discord.gg/UMcgX2C6Pd" },

    // instagram
    { from: "/instagram", to: "https://www.instagram.com/yayjaybae" },
    { from: "/insta", to: "https://www.instagram.com/yayjaybae" },

    // tiktok
    { from: "/tiktok", to: "https://www.tiktok.com/@yayjaybae" },

    // bluesky
    { from: "/bluesky", to: "https://bsky.app/profile/yayjaybae.com" },
    { from: "/bsky", to: "https://bsky.app/profile/yayjaybae.com" },

    // dubby
    {
      from: "/dubby",
      to: "https://dubby.gg/discount/yayjaybae?redirect=/products/dubby-air-freshener-2-pack",
    },

    // somatic
    { from: "/somatic", to: "https://5938bf-3.myshopify.com/yayjaybae" },

    // hytale
    { from: "/hytale", to: "https://www.hytale.com/" },

    // steam
    {
      from: "/steam",
      to: "https://store.steampowered.com/wishlist/id/YayJayBae/",
    },

    // vrchat
    { from: "/vrchat", to: "https://vrc.group/YAYJAY.9440" },
    { from: "/vrc", to: "https://vrc.group/YAYJAY.9440" },

    // fourthwall
    { from: "/fourthwall", to: "https://fourthwall.yayjaybae.com" },
    { from: "/store", to: "https://fourthwall.yayjaybae.com" },
    { from: "/shop", to: "https://fourthwall.yayjaybae.com" },
    { from: "/merch", to: "https://fourthwall.yayjaybae.com" }
  ],
};

export default {
  /*
    Fetch event handler, this function will be called whenever a request is made to the worker.
    The function will parse the request and return a response based on the request path.

    @param {Request} request - the incoming request object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {Response} a new Response object
  */
  async fetch(request, environment, context) {
    const url = new URL(request.url);

    if (configuration.redirects) {
      for (const redirect of configuration.redirects) {
        if (
          url.pathname === redirect.from ||
          url.pathname === redirect.from + "/"
        ) {
          return Response.redirect(redirect.to, 301);
        }
      }
    }

    if (url.pathname.startsWith("/api")) {
      return new Response("Hello from the API!", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    return environment.ASSETS.fetch(new Request(url, request));
  },

  /*
    Email event handler, this function will be called whenever an email is sent to the worker.
    The function will parse the email message and forward it to a specified email address.

    @param {Message} message - the incoming email message object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {void}
  */
  async email(message, environment, context) {
    message.forward("catchall@yayjaybae.com");
  },

  /*
    Scheduled event handler, this function will be called whenever a scheduled event is triggered.
    The function will perform a task and return a response based on the task outcome.

    @param {Event} event - the incoming event object
    @param {Environment} environment - the environment object
    @param {Context} context - the context object

    @returns {void}
  */
  async scheduled(event, environment, context) {
    console.log("Scheduled event triggered!");
  },
};
