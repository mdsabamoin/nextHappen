import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          background:
            "linear-gradient(135deg, #120014, #2d0a0f, #3b0f24, #1a0b2b)",
        }}
      >
        <Hero />
        <TrustedBy />

        <HowItWorks />
      </div>
      <div style={{ background: "linear-gradient(135deg, #2d0a14, #0e0a1c)" }}>
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
