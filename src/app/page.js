// import Image from "next/image";
// import Navbar from "../app/components/Navbar.js";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div >
//       {/* <Navbar/> */}
      
//     </div>
//   );
// }


// app/page.js (update)
"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Works from "./components/Works";
import Goals from "./components/Goals";
import Revenue from "./components/Revenue";
import Review from "./components/Review";
import Bar from "./components/Bar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Works />
      <Goals />
      <Revenue />
      <Bar />
      <Review />
      <Footer />
    </div>
  );
}