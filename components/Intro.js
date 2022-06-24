import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Intro = () => {
    const intro = useRef(null);

    useEffect(() => {
        const introElem = intro.current;

        const titles = introElem.querySelectorAll(".title-lg");

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
        <div className="wrapper">
            <div className="intro" ref={intro}>
                <span className="title-lg">
                    Hi, I’m <strong>Chai.</strong>
                </span>
                <span className="title-lg">
                    I’m a front-end <strong>engineer</strong> with a background in design.
                </span>
            </div>
        </div>
    );
};

export default Intro;
