import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Timelines() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(
      ".box-1",
      {
        x: 644,
        repeat: -1,
        yoyo: true,
      },
      "",
    )
      .to(
        ".box-2",
        {
          x: 644,
          yoyo: true,
          repeat: -1,
        },
        "-=0.2",
      )
      .to(
        ".box-3",
        {
          x: 644,
          yoyo: true,
          repeat: -1,
        },
        "-=0.2",
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
