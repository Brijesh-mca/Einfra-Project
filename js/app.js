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

//

// for the mian text moving

gsap.from("#text",{
    scale:0,
    duration:0.6,
    delay:1,
  
    
})
gsap.from("#imgCol",{
    scale:.3,
    duration:0.6,
    delay:0.7,
    rotate:"90 deg"
 
})
gsap.from("#latestText",{
    scale:0.4,
    duration:0.6,
    scrollTrigger:{
        trigger:"#latestText",
        scroller:"body",
        start:"top 70%",
        scrub:2,
    }
})

gsap.from("#trendText",{
    scale:0.4,
    duration:0.6,
    scrollTrigger:{
        trigger:"#trendText",
        scroller:"body",
        start:"top 70%",
        scrub:2,
    }
})

gsap.from("#trendText",{
    x:-200, 
    duration:0.6,
    scrollTrigger:{
        trigger:"#trendText",
        scroller:"body",
        start:"top 70%",
        scrub:2,
    }
})

gsap.from("#boxes",{
    delay:0.5,
    duration:1,
    stagger:0.3,
    scale:0,
    scrollTrigger:{
        trigger:"#boxes",
        scroller:"body",
        scrub:2,
    }
})

gsap.from("#myCard",{
    delay:0.5,
    duration:1,
    stagger:0.4,
    scale:0,
    scrollTrigger:{
        trigger:"#myCard",
        scroller:"body",
        scrub:3,
    }
})