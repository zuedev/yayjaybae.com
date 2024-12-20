import { Poetsen_One } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Socials from "@/components/Socials";

const FontMain = Poetsen_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "YayJayBae 🦇💛",
  description:
    "Vampire Bat Dragon with a Human Disguise | Streaming Monday, Wednesday, Thursday at 7PM CST | Contact: business@yayjaybae.com",
  icons: {
    icon: "/images/flower-heart.png",
  },
};

export default ({ children }) => {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-black dark:text-white"
    >
      <body className={`${FontMain.className} antialiased`}>
        <Navigation />
        {children}
        <Socials />
      </body>
    </html>
  );
};
