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
        y: "-60px",
        scrollTrigger: {
            trigger: ".screen-c",
            start: "top 90%",
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
        y: "-300px",
        scrollTrigger: {
            trigger: ".screen-d",
            start: "top 80%",
            end:"bottom 80%",
            scrub: 0.3,
            // pin: true,
            markers: true,
        },
    }
);
gsap.to(
    ".screen-e img",
    {
        y: "-1900px",
        scrollTrigger: {
            trigger: ".screen-e",
            start: "top 80%",
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
        y: "-3000px",
        scrollTrigger: {
            trigger: ".screen-f",
            start: "top 80%",
            end:"bottom 80%",
            scrub: 0.3,
            // pin: true,
            markers: true,
        },
    }
);

