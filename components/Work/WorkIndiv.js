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

    const backgroundColor = {
        backgroundColor: `${props.color}`,
    };

    return (
        <div className="work-indiv" style={backgroundColor}>
            <div className="wrapper">
                <div className="info">
                    <h3 className="title-sm">{props.title}</h3>
                    {!mobile ? <button className="tag">{props.button}</button> : null}
                </div>
                <div className="image">
                    <Image src={props.img} alt={props.alt} width={1440} height={615} />
                </div>
                {mobile ? <button className="tag">{props.button}</button> : null}
            </div>
        </div>
    );
};

export default WorkIndiv;
