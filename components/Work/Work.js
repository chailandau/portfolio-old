import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Title from "../Title";
import WorkIndiv from "./WorkIndiv";

const Work = () => {
    const workDiv = useRef(null);

    useEffect(() => {
        const workDivElem = workDiv.current;

        return () => {
            window.addEventListener("load", function () {
                const workTitle = workDivElem.querySelector("h2");
                const html = document.querySelector("html");
                console.log(workTitle);

                gsap.from(workDivElem, {
                    scrollTrigger: {
                        start: "top top",
                        end: "bottom bottom",
                        trigger: workDivElem,
                        toggleClass: "pinned",
                        onEnter: () => {
                            html.classList.add("work-pinned");
                            console.log("enter");
                        },

                        onEnterBack: () => {
                            workDivElem.classList.remove("pinned-last");
                            html.classList.add("work-pinned");
                            console.log("enter-back");
                        },
                        onLeave: () => {
                            html.classList.remove("work-pinned");
                            workDivElem.classList.add("pinned-last");
                            console.log("leave");
                        },
                        onLeaveBack: () => {
                            workDivElem.classList.remove("pinned-last");
                            html.classList.remove("work-pinned");
                            console.log("leave-back");
                        },
                    },
                });
            });
        };
    }, []);
    return (
        <div className="work" ref={workDiv}>
            <div className="wrapper">
                <Title text="Recent Work" />
            </div>

            <WorkIndiv
                title="Half Moon Tavern"
                button="Learn More"
                img="/img/halfmoon-2.png"
                alt="Half Moon Tavern Website with drink recipes"
                color="#af9bcf"
            />

            <WorkIndiv
                title="Alana Norell"
                button="Learn More"
                img="/img/alananorell.jpg"
                alt="Alana Norell Website with photos of jewelry"
                color="#eddfbf"
            />

            <WorkIndiv
                title="Concierge Home Cooking"
                button="Learn More"
                img="/img/conciergehomecooking.jpg"
                alt="Concierge Home Cooking Website with services and food photos"
                color="#fadbb4"
            />
        </div>
    );
};

export default Work;
