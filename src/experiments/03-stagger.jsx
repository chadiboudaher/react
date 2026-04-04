import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Stagger() {
  useGSAP(() => {
    gsap.to(".box", {
      duration: 1,
      scale: 0.1,
      y: 40,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      stagger: {
        grid: [1, 7],
        from: "random",
        amount: 1.5,
      },
    });
  });

  return (
    <div style={{ display: "flex", gap: "16px", padding: "80px 40px" }}>
      <div
        className="box"
        style={{
          width: 80,
          height: 80,
          background: "#c7d2fe",
          borderRadius: 8,
        }}
      />
      <div
        className="box"
        style={{
          width: 80,
          height: 80,
          background: "#a5b4fc",
          borderRadius: 8,
        }}
      />
      <div
        className="box"
        style={{
          width: 80,
          height: 80,
          background: "#818cf8",
          borderRadius: 8,
        }}
      />
      <div
        className="box"
        style={{
          width: 80,
          height: 80,
          background: "#6366f1",
          borderRadius: 8,
        }}
      />
      <div
        className="box"
        style={{
          width: 80,
          height: 80,
          background: "#4f46e5",
          borderRadius: 8,
        }}
      />
      <div
        className="box"
        style={{
          width: 80,
          height: 80,
          background: "#4338ca",
          borderRadius: 8,
        }}
      />
      <div
        className="box"
        style={{
          width: 80,
          height: 80,
          background: "#3730a3",
          borderRadius: 8,
        }}
      />
    </div>
  );
}
