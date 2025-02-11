//Loader 

// Simulate a loading delay
window.onload = function() {
    // setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    // }, 500); // 
};

// setTimeout(() => {
//     document.getElementById("msg").style.display = "none"
// }, 2000);


//Animation with Gsap 



var tl = gsap.timeline();
tl.from("#myNav", {y: -100, duration: 0.5,delay:0.5 });
tl.from(".nav-item", {y: -100, duration: 0.5, opacity:0, stagger:0.2 , scale:1.5});
