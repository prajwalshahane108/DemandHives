// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "../app/components/Navbar.js";
// import Hero from "../app/components/Hero.js";
// import Features from "../app/components/Features.js";
// import Works from "../app/components/Works.js";
// import Goals from "../app/components/Goals.js";
// import Footer from "../app/components/Footer.js";

// // Load Geist fonts
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: "swap",  // Ensures proper font rendering
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   display: "swap",
// });

// // Metadata for SEO
// export const metadata = {
//   title: "Tourism Cross-Border Payments Simplified",
//   description: "Tourism Cross-Border Payments Simplified",
// };

// // ✅ Fix hydration errors by specifying `lang` and font classes in <html>
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
//       <head>
//         {/* Any additional meta tags or styles can go here */}
//       </head>
//       <body>
//           <Navbar />
//         <main>
//           <Hero />
//           <Features />
//           <Works />
//           <Goals />
//           <Footer />
//           {children} {/* Uncomment this if needed */}
//         </main>
//       </body>
//     </html>
//   );
// }



// "use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({ 
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DemandHives",
  description: "lorem ipsum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
     <head>
     <link rel="icon" href="/faviconq.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
