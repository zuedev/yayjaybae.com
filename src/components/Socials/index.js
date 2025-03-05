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
      icon: "/images/throne.png",
      title: "Throne",
    },
    {
      href: "/kofi",
      icon: "https://cdn.simpleicons.org/kofi",
      title: "Ko-fi",
    },
  ];

  return (
    <div className="p-4 bg-black text-white border-t-2 border-white fixed bottom-0 w-full">
      <div className="flex flex-row justify-between">
        {socials.map((social) => (
          <Link
            href={social.href}
            key={social.title}
            className="transform hover:scale-125 transition-transform"
          >
            <img
              src={`${social.icon}`}
              className="h-6 sm:h-8"
              title={social.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
