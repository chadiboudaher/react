import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";

export default function LandingPage() {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".brand-name", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
      });
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: headerRef },
  );

  return (
    <>
      <header ref={headerRef} className="header">
        <p className="brand-name">Chadi</p>
        <nav className="nav-links">
          <ul>
            <li className="nav-item">
              <a href="#">Work</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#">Links</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="hero">
        <div className="hero-left">
          <span className="hero-tag">— available for work</span>
          <h1 className="hero-title">
            <span className="line">CHADI</span>
            <span className="line">BOUDAHER</span>
          </h1>
        </div>
        <div className="hero-right">
          <p className="hero-sub">
            Frontend Developer — I build things for the web
          </p>
          <a href="#" className="hero-cta">
            View my work ↗
          </a>
        </div>
      </main>
    </>
  );
}
