const a_part1 = document.querySelectorAll(".a-test-solo__part1");
const a_part2 = document.querySelectorAll(".a-test-solo__part2");
const a_part3 = document.querySelectorAll(".a-test-solo__part3");

document.addEventListener("mousemove", (e) => {
     let x = e.clientX * 100 / window.innerWidth - 50;
     let y = e.clientY * 300 / window.innerHeight - 150;


     a_part1.forEach((elem) => {
        elem.style.transform = `rotate(${x + 12}deg)`;
     })
     a_part2.forEach((elem) => {
        elem.style.transform = `rotate(${x - 12}deg)`;
     })
     a_part3.forEach((elem) => {
        elem.style.transform = `translate(${x - 15}px,${y - 15}px)`;
     })
     
})