import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Intro = () => {
    const ref = useRef(null);

    useEffect(() => {
        const introElement = ref.current;

        const titles = introElement.querySelectorAll(".title-lg");

        return () => {
            window.addEventListener("load", function () {
                titles.forEach((title) => {
                    let childSplit = new SplitText(title, {
                        type: "lines",
                        linesClass: "split-child",
                    });
                    let parentSplit = new SplitText(title, {
                        type: "lines",
                        linesClass: "split-parent",
                    });

                    const textAnimation = gsap.timeline({
                        onComplete: () => {
                            parentSplit.revert();
                            childSplit.revert();
                        },
                    });

                    textAnimation.from(childSplit.lines, {
                        duration: 1.5,
                        yPercent: 100,
                        ease: "power4",
                        stagger: 0.25,
                    });
                });
            });
        };
    }, []);

    return (
        <div className="intro" ref={ref}>
            <div className="wrapper">
                <span className="title-lg">Hi, I’m Chai.</span>
                <span className="title-lg">
                    I’m a front-end engineer with a background in design.
                </span>
            </div>
        </div>
    );
};

export default Intro;
