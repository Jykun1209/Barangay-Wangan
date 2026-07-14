/* ==========================================
   BARANGAY WANGAN OFFICIAL WEBSITE
   script.js
========================================== */

// ======================================
// WEBSITE LOADED
// ======================================

window.addEventListener("load", () => {
    console.log("Barangay Wangan Official Website Loaded!");
});

// ======================================
// AUTOMATIC FOOTER YEAR
// ======================================

document.getElementById("year").textContent = new Date().getFullYear();

// ======================================
// NAVBAR SHADOW ON SCROLL
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ======================================
// FADE-IN ANIMATION
// ======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ======================================
// BACK TO TOP BUTTON
// ======================================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================================
// HERO BUTTON EFFECT
// ======================================

const heroButton = document.querySelector(".btn");

heroButton.addEventListener("mouseenter", ()=>{

    heroButton.style.transform = "scale(1.05)";

});

heroButton.addEventListener("mouseleave", ()=>{

    heroButton.style.transform = "scale(1)";

});

// ======================================
// OFFICIAL CARD EFFECT
// ======================================

const cards = document.querySelectorAll(".official-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateY(0)";

    });

});

// ======================================
// WELCOME MESSAGE
// ======================================

setTimeout(()=>{

    console.log("Welcome to Barangay Wangan!");

},1000);