const a_part1 = document.querySelector(".a-test__part1");
const a_part2 = document.querySelector(".a-test__part2");
const a_part3 = document.querySelector(".a-test__part3");

document.addEventListener("mousemove", (e) => {
     let x = e.clientX * 100 / window.innerWidth - 50;
     let y = e.clientY * 100 / window.innerHeight - 50;

     a_part1.style.transform = `rotate(${x + 12}deg)`;
     a_part2.style.transform = `rotate(${x - 12}deg)`;
     a_part3.style.transform = `translateX(${x - 15}px)`;
     
})