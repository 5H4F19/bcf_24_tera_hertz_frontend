import { Inter, Syne } from "next/font/google";
import LocalFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--inter" });
export const syne = Syne({ subsets: ["latin"], variable: "--syne" });
export const fregeist = LocalFont({
  src: [
    {
      path: "../../public/font/Freigeist-Black.ttf",
      weight: "900", // Black weight
    },
    {
      path: "../../public/font/Freigeist-Bold.ttf",
      weight: "700", // Bold weight
    },
    {
      path: "../../public/font/Freigeist-Medium.ttf",
      weight: "500", // Medium weight
    },
    {
      path: "../../public/font/Freigeist-Regular.ttf",
      weight: "400", // Regular weight
    },
    {
      path: "../../public/font/Freigeist-Light.ttf",
      weight: "300", // Light weight
    },
  ],
  variable: "--fregeist",
});
export const geist = LocalFont({
  src: [
    {
      path: "../../public/font/Geist-Black.otf",
      weight: "900", // Black weight
    },
    {
      path: "../../public/font/Geist-Bold.otf",
      weight: "700", // Bold weight
    },
    {
      path: "../../public/font/Geist-Medium.otf",
      weight: "500", // Medium weight
    },
    {
      path: "../../public/font/Geist-Regular.otf",
      weight: "400", // Regular weight
    },
    {
      path: "../../public/font/Geist-Light.otf",
      weight: "300", // Light weight
    },
  ],
  variable: "--geist",
});

export const geistMono = LocalFont({
  src: [
    {
      path: "../../public/font/GeistMono-Black.ttf",
      weight: "900", // Black weight
    },
    {
      path: "../../public/font/GeistMono-Bold.ttf",
      weight: "700", // Bold weight
    },
    {
      path: "../../public/font/GeistMono-Medium.ttf",
      weight: "500", // Medium weight
    },
    {
      path: "../../public/font/GeistMono-Regular.ttf",
      weight: "400", // Regular weight
    },
    {
      path: "../../public/font/GeistMono-Light.ttf",
      weight: "300", // Light weight
    },
  ],
  variable: "--GeistMono",
});
