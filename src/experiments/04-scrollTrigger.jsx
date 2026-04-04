import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./04-scrollTrigger.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerDemo() {
  useGSAP(() => {
    gsap.to(".box", {
      x: 300,
      scrollTrigger: {
        start: 100,
        end: 300,
        scrub: true,
      },
    });

    gsap.to(".box", {
      x: -300,
      scrollTrigger: {
        start: 400,
        end: 800,
        scrub: true,
      },
    });
  });

  return (
    <>
      <h2>Scroll down</h2>
      <div className="box"></div>
      <div className="outline"></div>
    </>
  );
}
