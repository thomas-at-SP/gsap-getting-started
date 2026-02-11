import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.to(".square1", {
  x: 700,
  duration: 3,
  scrollTrigger: ".square2",
});