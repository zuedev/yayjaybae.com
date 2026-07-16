import { Poetsen_One } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Socials from "@/components/Socials";
import MerchPopup from "@/components/MerchPopup";
import { Suspense } from "react";
import JesterCardModal from "@/components/JesterCardModal";

const FontMain = Poetsen_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "YayJayBae 💛🃏",
  description:
    "Vampire Bat Dragon with a Human Disguise | Streaming Monday, Wednesday, Thursday at 7PM CST | Contact: business@yayjaybae.com",
  icons: {
    icon: "/favicon.png",
  },
};

export default ({ children }) => {
  return (
    <html lang="en">
      <body className={`${FontMain.className}`}>
        <Navigation />
        <main>{children}</main>
        <Socials />
        <MerchPopup />
        <Suspense>
          <JesterCardModal />
        </Suspense>
      </body>
    </html>
  );
};
