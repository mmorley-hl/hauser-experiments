import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const a_part1 = document.querySelectorAll(".a-test-paralax__part1");
const a_part2 = document.querySelectorAll(".a-test-paralax__part2");
const a_part3 = document.querySelectorAll(".a-test-paralax__part3");
const a_part4 = document.querySelectorAll(".a-test-paralax__part4");

// gsap.to(".paralax_001", {
//     yPercent: 100,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".paralax_001",
//       // start: "top bottom", // the default values
//       // end: "bottom top",
//       scrub: false
//     }, 
//   });

// gsap.to(".paralax_002", {
//     yPercent: -50,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".paralax_002",
//       // start: "top bottom", // the default values
//       // end: "bottom top",
//       scrub: true
//     }, 
//   });
// gsap.to(".paralax_003", {
//     yPercent: 10,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".paralax_003",
//       // start: "top bottom", // the default values
//       // end: "bottom top",
//       scrub: true
//     }, 
//   });
// gsap.to(".paralax_004", {
//     yPercent: 30,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".paralax_004",
//       // start: "top bottom", // the default values
//       // end: "bottom top",
//       scrub: true
//     }, 
//   });
// gsap.to(".paralax_005", {
//     yPercent: 10,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".paralax_005",
//       // start: "top bottom", // the default values
//       // end: "bottom top",
//       scrub: true
//     }, 
//   });

document.addEventListener("mousemove", (e) => {
     let x = e.clientX * 100 / window.innerWidth - 50;
     let y = e.clientY * 100 / window.innerHeight - 50;


     a_part1.forEach((elem) => {
        elem.style.transform = `rotate(${x + 18}deg)`;
     })
     a_part2.forEach((elem) => {
        elem.style.transform = `rotate(${x - 18}deg)`;
     })
     a_part3.forEach((elem) => {
        elem.style.transform = `translate(${x - 15}px, ${y}px)`;
     })
     a_part4.forEach((elem) => {
        elem.style.transform = `translate(${x + 15}px, ${-y * 0.5}px)`;
     })
     
})