import { Poetsen_One } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Socials from "@/components/Socials";
import { Suspense } from "react";
import JesterCardModal from "@/components/JesterCardModal";

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
      <Head>
        <link rel="preload" href="/images/duo-portrait/base.png" as="image" />
      </Head>
      <body className={`${FontMain.className} antialiased`}>
        <div
          style={{
            padding: "10px",
            textAlign: "center",
            background: "var(--yjb-yellow)",
            color: "var(--yjb-black)",
          }}
        >
          <span>This is the old site!</span>{" "}
          <a
            style={{
              color: "var(--yjb-blue-light)",
              textDecoration: "wavy underline",
            }}
            href="https://new.yayjaybae.com"
          >
            Check out the new one
          </a>{" "}
          <span>(It's still under construction)</span>
        </div>
        <Navigation />
        {children}
        <Socials />
        <Suspense>
          <JesterCardModal />
        </Suspense>
      </body>
    </html>
  );
};
