const h_part1 = document.querySelectorAll(".h-test__part1");
const h_part2 = document.querySelectorAll(".h-test__part2");
const h_part3 = document.querySelectorAll(".h-test__part3");
const h_part4 = document.querySelectorAll(".h-test__part4");

document.addEventListener("mousemove", (e) => {
     let x = e.clientX * 100 / window.innerWidth - 50;
     let x_3 = e.clientX * 200 / window.innerWidth - 50;
     let y = e.clientY * 300 / window.innerHeight - 250;


     h_part1.forEach((elem) => {
         
        elem.style.transform = `rotate(${x}deg)`;
     })
     h_part2.forEach((elem) => {
      
        elem.style.transform = `rotate(${x}deg)`;
     })
     h_part3.forEach((elem) => {
      
        elem.style.transform = `translate(${x_3}px,${y}px)`;
      //   elem.style.transform = `translateY(${y}px)`;
     })
     h_part4.forEach((elem) => {
        elem.style.transform = `translateX(${x + 15}px)`;
     })
     
})