
const logo = document.querySelector(".logo");




const tl = new TimelineMax();

tl.fromTo(logo, 1,{height: "20%", opacity: 0}, {height:"0%", opacity: 1,ease:Power2.easeInOut})
tl.fromTo(logo, 1,{height: "20%", opacity: 0}, {height:"0%", opacity: 1}, 1);
tl.fromTo(logo, 1,{height: "20%", opacity: 0}, {height:"0%", opacity: 1}, 2);
tl.fromTo(logo, 1,{height: "20%", opacity: 0}, {height:"0%", opacity: 1}, 3);
tl.fromTo(logo, 1,{height: "20%", opacity: 0}, {height:"0%", opacity: 1}, 4);
tl.fromTo(logo, 1,{height: "20%", opacity: 0}, {height:"0%", opacity: 1}, 5);
