import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// // PARALLAX-------------------------------------------

gsap.to(
    ".screen-b img",
    {
        y: "-40px",
        scrollTrigger: {
            trigger: ".screen-b",
            start: "top 80%",
            end:"bottom 40%",
            scrub: 0.3,
            // pin: true,
            // markers: true,
        },
    }
);
gsap.to(
    ".screen-c img",
    {
        y: "-65px",
        scrollTrigger: {
            trigger: ".screen-c",
            start: "top 80%",
            end:"bottom 80%",
            scrub: 0.3,
            // pin: true,
            // markers: true,
        },
    }
);
gsap.to(
    ".screen-d img",
    {
        y: "-100px",
        scrollTrigger: {
            trigger: ".screen-d",
            start: "top 110%",
            end:"bottom 60%",
            scrub: 0.3,
            // pin: true,
            // markers: true,
        },
    }
);
gsap.to(
    ".screen-e img",
    {
        y: "-170px",
        scrollTrigger: {
            trigger: ".screen-e",
            start: "top 115%",
            end:"bottom 80%",
            scrub: 0.3,
            // pin: true,
            // markers: true,
        },
    }
);
gsap.to(
    ".screen-f img",
    {
        y: "-200px",
        scrollTrigger: {
            trigger: ".screen-f",
            start: "top 180%",
            end:"bottom 80%",
            scrub: 0.3,
            // pin: true,
            // markers: true,
        },
    }
);
gsap.to(
    ".screen-g img",
    {
        y: "-240px",
        scrollTrigger: {
            trigger: ".screen-g",
            start: "top 100%",
            end:"bottom 80%",
            scrub: 0.3,
            // pin: true,
            // markers: true,
        },
    }
);
gsap.to(
    ".screen-h img",
    {
        y: "-280px",
        scrollTrigger: {
            trigger: ".screen-h",
            start: "top 270%",
            end:"bottom 80%",
            scrub: 0.3,
            // pin: true,
            // markers: true,
        },
    }
);

// THUNDER------------------------------------------

gsap.from(".parallax-thunder-right",{
scrollTrigger: {
    trigger:".thunders",
    start:"40px top",
    end:"110px top",
    scrub: 1,
    // markers: true,
    id:"lightning right",
},
opacity: 0,
left: "80vw",
top:"-300px",
});

gsap.from(".parallax-thunder-left",{
    scrollTrigger: {
        trigger:".thunders",
        start:"40px top",
        end:"110px top",
        scrub: 1,
        // markers: true,
        id:"left",
},
opacity: 0,
left: "-80vw",
top:"-400px",
});

// HORIZONTAL SCROLL-----------------------------------

gsap.to(".slider-track", {
    x: "-87%",
    scrollTrigger: {
        trigger: ".slider-mask",
        start:"top top",
        end:"+=1000%",
        pin: true,
        scrub: true,
        // markers:true,
        // ease:"sine.inOut",
    }
});



// Falling sabre

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".falling-sabre-section",
      start: "-20% top",
      
      end: "110% bottom",
      scrub: 0.3, 
    //   pin: true,
    //   markers: true,
      ease: "linear", 
    },
    onStart: () => {
        document.querySelector(".to-shop-section").classList.add("hidden");
    }
  })
  
  .to(
    ".falling-sabre",
    {
      top: "25%",
    },
    0
  )
    .to(
    ".falling-sabre",
    {
      top: "100%",
    },
    1
  );
  