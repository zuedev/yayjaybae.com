import Link from "next/link";

export default () => {
  const socials = [
    {
      href: "/twitch",
      icon: "https://cdn.simpleicons.org/twitch",
      title: "Twitch",
    },
    {
      href: "/tiktok",
      icon: "https://cdn.simpleicons.org/tiktok/white",
      title: "TikTok",
    },
    {
      href: "/youtube",
      icon: "https://cdn.simpleicons.org/youtube",
      title: "YouTube",
    },
    {
      href: "/bluesky",
      icon: "https://cdn.simpleicons.org/bluesky",
      title: "BlueSky",
    },
    {
      href: "/twitter",
      icon: "https://cdn.simpleicons.org/x/white",
      title: "X/Twitter",
    },
    {
      href: "/instagram",
      icon: "https://cdn.simpleicons.org/instagram",
      title: "Instagram",
    },
    {
      href: "/discord",
      icon: "https://cdn.simpleicons.org/discord",
      title: "Discord",
    },
    {
      href: "/throne",
      icon: "/throne.png",
      title: "Throne",
    },
    {
      href: "/kofi",
      icon: "https://cdn.simpleicons.org/kofi",
      title: "Ko-fi",
    },
  ];

  return (
    <div className="fixed bottom-0 z-50 w-full bg-black/95 backdrop-blur text-white border-t-2 border-white p-3">
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2 max-w-3xl mx-auto">
        {socials.map((social) => (
          <Link
            href={social.href}
            key={social.title}
            title={social.title}
            className="transition-transform duration-200 hover:scale-125 hover:-translate-y-0.5"
          >
            <img
              src={`${social.icon}`}
              alt={social.title}
              className="h-6 sm:h-7"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
