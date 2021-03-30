import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false ,
  });
});

gsap.to(".circle_red_002", {
    scrollTrigger: {
      trigger: ".red",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    x: 600,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });

gsap.to(".circle_red_003", {
    scrollTrigger: {
      trigger: ".red",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    x: -600,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_red_004", {
    scrollTrigger: {
      trigger: ".red",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    x: 600,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });

gsap.to(".circle_red_005", {
    scrollTrigger: {
      trigger: ".red",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    x: -600,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });

gsap.to(".circle_orange_006", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      // markers: {startColor: "green", endColor: "red", fontSize: "12px"}
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: -170,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_007", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: 170,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_008", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: 170,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_009", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: -170,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_102", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: -170,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_202", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: 170,
    y: 200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_302", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: -170,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });
gsap.to(".circle_orange_402", {
    scrollTrigger: {
      trigger: ".orange",
      scrub: true,
      start: "top top",
      end: "bottom bottom"
    },
    // scaleX: 0.5,
    // scaleY: 0.5,
    x: 170,
    y: -200,
    transformOrigin: "left center", 
    ease: "none"
  });

  
// scroll down arrow animation
gsap.to(".arrow", {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});
gsap.to(".to_top_button", {y: 8, ease: "power1.inOut", repeat: -1, yoyo: true});


