const img = document.querySelector(".app-picture");
const quicklinks = document.querySelector(".quick-links");
const body = document.querySelector(".App-text");
const socials = document.querySelector(".social-icons");
const navbar = document.querySelector(".navbar");
const container = document.querySelector(".container");

const tl = new TimelineMax();

tl.fromTo(container, 1,{height: "0%"}, {height:"100%", ease:Power2.easeInOut})
  .fromTo(
      container,
      1.2,
      {width: "100%"},
      {width: "100%", ease:Power2.easeInOut}
  )
  .fromTo(
      navbar,
      1.2,
      {x: "-100%"},
      {x: "0%", ease:Power2.easeInOut},
      "-=1.2"
  )
  .fromTo(body, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0}, "-=0.5")
  .fromTo(quicklinks, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0}, "-=0.5")
  .fromTo(img, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0}, "-=0.5")
  .fromTo(socials, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0}, "-=1")
