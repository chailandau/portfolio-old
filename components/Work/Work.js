import Title from "../Title";
import WorkIndiv from "./WorkIndiv";

const Work = () => {
    return (
        <div className="work">
            <Title text="Recent Work" />

            <WorkIndiv
                title="Half Moon Tavern"
                button="Learn More"
                img="/img/halfmoon.png"
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
