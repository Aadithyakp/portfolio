import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(15, 23, 42)"
      gradientBackgroundEnd="rgb(10, 15, 34)"
      firstColor="18, 113, 255"
      secondColor="221, 74, 255"
      thirdColor="100, 220, 255"
      fourthColor="40, 80, 200"
      fifthColor="80, 100, 220"
      pointerColor="140, 100, 255"
      size="70%"
      blendingValue="hard-light"
      className="absolute inset-0 z-0"
      interactive={true}
    >
    </BackgroundGradientAnimation>
  );
}
