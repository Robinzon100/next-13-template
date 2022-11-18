import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase"

gsap.registerPlugin(CustomEase)

export const counter = () =>  {
  const tl = gsap.timeline()
  let time = { start: 0 }

  tl.to(time, {
    duration: 1,
    start: 100,
    roundProps: "start",
    ease:CustomEase.create("custom", "M0,0 C0.132,0.13 0.07,0.107 0.198,0.21 0.286,0.28 0.311,0.287 0.336,0.342 0.345,0.362 0.358,0.496 0.37,0.6 0.568,0.756 0.468,0.85 0.524,0.894 0.556,0.919 0.794,1 1,1 "),

    onUpdate: () => {
      document.getElementById("counter")!.innerHTML = `${time.start}`;
    },
  })


    .to('.loading-screen',{
      delay: .5,
      ease: "Expo.easeOut",
      duration: 1.2,
      clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)',
    //   onComplete: () => {
    //     functionOnComplete()
    //   }
    })
};
