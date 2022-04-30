import Title from "../Title";
import WorkIndiv from "./WorkIndiv";

const Work = () => {
    return (
        <div className="work">
            <Title text="Recent Work" />
            <div className="wrapper">
                <WorkIndiv title="Half Moon Tavern" button="Learn More" />
            </div>
        </div>
    );
};

export default Work;
