import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// // PARALLAX-------------------------------------------

// var tl = gsap.timeline ({
//     // scrollTrigger: {
//     //     trigger: ".section-parallax",
//     //     start: "top top",
//     //     end:"4000px bottom",
//     //     scrub: 0.3,
//     //     // pin: true,
//     //     markers: true,
//     // }
// });


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
            markers: true,
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
            markers: true,
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
            markers: true,
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
            markers: true,
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
            markers: true,
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
            markers: true,
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
            markers: true,
        },
    }
);
