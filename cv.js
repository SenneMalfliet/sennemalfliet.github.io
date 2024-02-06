gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/* timeline  */
let timeline = gsap.timeline();
let cardFlip = gsap.timeline();

ScrollTrigger.create({
  animation: timeline,
  trigger: ".scrollElement",
  start: "top top",
  end: "70% 100%",
  scrub: 1,
});

ScrollTrigger.create({
    animation: cardFlip,
    trigger: ".scrollElement",
    start: "top top",
    end: "10% top",
    scrub: 1,
    });

timeline.to("#timeline", { x: -2500 }, 0);

cardFlip.to(".card", { rotationY: 180, x: -600}, 0);
