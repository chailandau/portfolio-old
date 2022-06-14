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
                const workTitle = workDivElem.querySelector(".title");
                console.log(workTitle);

                gsap.from(workDivElem, {
                    scrollTrigger: {
                        start: "top top",
                        end: "bottom bottom",
                        trigger: workDivElem,
                        toggleClass: "pinned",
                        onLeave: () => {
                            workDivElem.classList.add("pinned-last");
                        },
                        onEnterBack: () => {
                            workDivElem.classList.remove("pinned-last");
                        },
                    },
                });
            });
        };
    }, []);
    return (
        <div className="work" ref={workDiv}>
            <Title text="Recent Work" />

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
