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

  useGSAP(() => {
    gsap.to(
      ".box-1",
      {
        x: -20,
        rotation: 360,
        borderRadius: "100%",
        repeat: -1,
        yoyo: true,
      },
      "<",
    );

    gsap.to(
      ".box-2",
      {
        x: -20,
        rotation: 360,
        borderRadius: "100%",
        repeat: -1,
        yoyo: true,
      },
      "<",
    );

    gsap.to(
      ".box-3",
      {
        x: -20,
        rotation: 360,
        borderRadius: "100%",
        repeat: -1,
        yoyo: true,
      },
      "<",
    );

    gsap.to(
      ".box-4",
      {
        x: -20,
        rotation: 360,
        borderRadius: "100%",
        repeat: -1,
        yoyo: true,
      },
      "<",
    );

    gsap.to(
      ".box-5",
      {
        x: -20,
        rotation: 360,
        borderRadius: "100%",
        repeat: -1,
        yoyo: true,
      },
      "<",
    );
  });

  return (
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
        </ul>
      </nav>

      <div className="gsap-header">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
        <div className="box-4"></div>
        <div className="box-5"></div>
      </div>
    </header>
  );
}
