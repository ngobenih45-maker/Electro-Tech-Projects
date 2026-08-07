/*=========================================
    Electro Tech Projects
    script.js
=========================================*/

// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

/*=========================================
    Sticky Header
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "12px 8%";
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    } else {

        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

/*=========================================
    Scroll Reveal Animation
=========================================*/

const reveals = document.querySelectorAll(
".service-card,.gallery-item,.feature,.mission-card,.contact-form,.contact-info,.about-image,.about-text,.stat-box");

function revealElements(){

    const windowHeight = window.innerHeight;

    reveals.forEach(item =>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(50px)";
    item.style.transition="all .8s ease";

});

window.addEventListener("scroll", revealElements);

revealElements();

/*=========================================
    Back To Top Button
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:95px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0077ff;
color:white;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 8px 20px rgba(0,0,0,.25);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
    Active Navigation Highlight
=========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

/*=========================================
    Contact Form
=========================================*/

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for contacting Electro Tech Projects. We will get back to you shortly.");

form.reset();

});

}

/*=========================================
    Gallery Image Hover Effect
=========================================*/

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.filter="brightness(85%)";

});

img.addEventListener("mouseleave",()=>{

img.style.filter="brightness(100%)";

});

});

/*=========================================
    Footer Year
=========================================*/

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright p");

if(copyright){

copyright.innerHTML = © ${year} Electro Tech Projects. All Rights Reserved.;

}

/*=========================================
    Smooth Fade-In on Page Load
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .7s ease";

/*=========================================
    End of File
=========================================*/