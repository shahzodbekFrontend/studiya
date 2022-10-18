const buttomCard = document.querySelector(".buttomCard");
const yelow_btn = document.querySelector(".yelow_btn");
const title = document.getElementById("title");
const dBlok = document.querySelector('.dBlok')
const sebar_btn = document.querySelector(".sebar_btn");
const buttomCard_btn = document.querySelector(".buttomCard_btn");
const btnClick = document.querySelector(".btnClick");
const smsBtn = document.querySelector(".smsBtn");
const buttomCard_input2 = document.getElementById('buttomCard_input2')
const buttomCard_input1 = document.getElementById('buttomCard_input1')
const buttomCard_input3 = document.getElementById('buttomCard_input3')
const bar_img = document.querySelector(".bar_img");
const bar_click = document.querySelector(".bar_click");
const bar = document.querySelector(".bar");
const focus = document.querySelector(".focus");


yelow_btn.addEventListener("click", () => {
    buttomCard.classList.remove('dBlok');
});
sebar_btn.addEventListener("click", () => {
  btnClick.classList.remove("dBlok");
});
title.addEventListener("click", () => {
  buttomCard.classList.add("dBlok");
});
buttomCard_btn.addEventListener("click", (e) => {
    e.preventDefault()
    buttomCard_input1.value = ''
    buttomCard_input2.value = ''
    buttomCard_input3.value = ''
  buttomCard.classList.add("dBlok");
  btnClick.classList.remove("dBlok");

});
smsBtn.addEventListener("click", () => {
  btnClick.classList.add("dBlok");
});

bar_img.addEventListener("click", () => {
  bar.classList.toggle("dBlok");
});
bar_click.addEventListener("click", () => {
  focus.classList.toggle("dBlok");
});
