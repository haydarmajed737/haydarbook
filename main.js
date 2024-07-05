let menu=document.querySelector(".menu");
let productcontainer=document.querySelector(".productcontainer");
let servicescontainer=document.querySelector(".servicescontainer");
let allcontainer=document.querySelector(".allcontainer");
let aboutcontainer=document.querySelector(".aboutcontainer");
let line=document.querySelector(".span");
let line1=document.querySelector(".span1");
let line2=document.querySelector(".span2");
let line3=document.querySelector(".span3");

let menui=document.getElementById("menu")
let div=document.getElementById("div");
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");



menu.addEventListener('click',()=>{
    productcontainer.classList.toggle("product1");
    servicescontainer.classList.toggle("services1");
    allcontainer.classList.toggle("all1");
    aboutcontainer.classList.toggle("about1");
    line.classList.toggle("animation");
    line1.classList.toggle("animation");
    line2.classList.toggle("animation");
    line3.classList.toggle("animation");
    div.classList.toggle("animation1");
    div1.classList.toggle("animation1");
    div2.classList.toggle("animation1");
    div3.classList.toggle("animation1");
    menu.classList.toggle("menu1");
    menui.classList.toggle("animation3");

})
