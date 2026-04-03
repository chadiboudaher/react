import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function GSAPBasics() {
  useGSAP(() => {
    // gsap.to() — animate FROM current state TO these values
    gsap.to(
      ".box-1",
      {
        x: 250,
        duration: 1,
        rotation: 360,
        yoyo: true,
        repeat: -1,
        borderRadius: "100%",
        // ease: "power1.out",
      },
      [],
    );

    // gsap.from() — animate FROM these values TO current state
    gsap.from(".box-2", {
      x: 200,
      duration: 1,
      rotation: 360,
      yoyo: true,
      repeat: -1,
      borderRadius: "100%",
      //   ease: "expo.out",
    });

    // gsap.fromTo() — you control both start and end
    gsap.fromTo(
      ".box-3",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div
        className="box-1"
        style={{ width: 80, height: 80, background: "royalblue" }}
      />
      <div
        className="box-2"
        style={{ width: 80, height: 80, background: "tomato" }}
      />
      <div
        className="box-3"
        style={{ width: 80, height: 80, background: "mediumseagreen" }}
      />
    </div>
  );
}
