const container = document.querySelector(".container");

const tl = new TimelineMax();

tl.fromTo(container, 1,{height: "0%"}, {height:"100%", ease:Power2.easeInOut})
