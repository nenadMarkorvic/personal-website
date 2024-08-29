import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Electronic Engineer",
          "Freelancer",
          "PCB Designer",
          "Firmware Developer",
          "Electronic Hardware and Firmware Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
