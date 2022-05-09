import Image from "next/image";
import { useState, useEffect } from "react";

const WorkIndiv = (props) => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const mobileBreakpoint = window.matchMedia("(max-width: 1199px)");

        const rearrangeMobile = () => {
            if (mobileBreakpoint.matches) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };

        window.addEventListener("load", () => {
            rearrangeMobile();
        });

        window.addEventListener("resize", () => {
            setTimeout(() => {
                rearrangeMobile();
            }, 200);
        });
    }, [mobile]);

    const browserWindowStyle = {
        borderTopColor: `${props.color}`,
    };

    return (
        <div className="work-indiv">
            <div className="info">
                <h3 className="title-sm">{props.title}</h3>
                {!mobile ? <button className="tag">{props.button}</button> : null}
            </div>
            <div className="image" style={browserWindowStyle}>
                <Image src={props.img} alt={props.alt} layout="fill" />
            </div>
            {mobile ? <button className="tag">{props.button}</button> : null}
        </div>
    );
};

export default WorkIndiv;
