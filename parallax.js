gsap.registerPlugin(ScrollTrigger);

gsap.to(".sub-container", {
  scale: 0.5, // move down 200px along Y-axis
  ease: "none",
  scrollTrigger: {
    trigger: ".container", // hero section container
    start: "top top", // animation starts when hero section hits top
    end: "bottom top", // ends when hero section leaves top
    scrub: true, // makes animation tied to scroll
    // markers: true, // uncomment this to debug
  },
});

gsap.to('.sub-container h1' ,{
    opacity: 1,
    y:0,
    duration:1,
    delay: 0.8
})
gsap.to('.sub-container button' ,{
    opacity: 1,
    y:0,
    duration:1,
    delay: 1
})



gsap.registerPlugin(ScrollTrigger);

gsap.to(".section-container", {
    opacity: 1,
    y:0,
  scrollTrigger: {
    trigger: "section", 
    start: "top top", 
    markers: true,
    end: "bottom top", 
    scrub: true, 
  },
});

