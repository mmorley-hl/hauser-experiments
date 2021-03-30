const a_part1 = document.querySelectorAll(".a-test__part1");
console.log('a_part1', a_part1)
const a_part2 = document.querySelectorAll(".a-test__part2");
const a_part3 = document.querySelectorAll(".a-test__part3");
const a_part4 = document.querySelectorAll(".a-test__part4");

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