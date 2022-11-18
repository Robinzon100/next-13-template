import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const navigationScrollAnim = (triggerElement: string) => {

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: .2,
      start: "top bottom",
    },
  });


  tl.to(".navigation", {  duration: 0.3, ease: "power3.out" });

  tl.to(".navigation_logo", { width: 110, height: 90, duration: 0.5, ease: "power3.out" });
};

