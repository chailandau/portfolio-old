import Title from "../Title";
import ToolIndiv from "./ToolIndiv";

const Tools = () => {
    return (
        <div className="tools">
            <div className="wrapper">
                <Title text="Tools I use" />
                <div className="grid">
                    <ToolIndiv icon="" alt="" name="HTML" />
                    <ToolIndiv icon="" alt="" name="CSS" />
                    <ToolIndiv icon="" alt="" name="JS" />
                    <ToolIndiv icon="" alt="" name="React" />
                    <ToolIndiv icon="" alt="" name="Next.js" />
                    <ToolIndiv icon="" alt="" name="Git" />
                    <ToolIndiv icon="" alt="" name="VSCode" />
                    <ToolIndiv icon="" alt="" name="WordPress" />
                    <ToolIndiv icon="" alt="" name="ACF" />
                    <ToolIndiv icon="" alt="" name="Firebase" />
                    <ToolIndiv icon="" alt="" name="Adobe CC" />
                    <ToolIndiv icon="" alt="" name="Figma" />
                    <ToolIndiv icon="" alt="" name="Strapi" />
                    <ToolIndiv icon="" alt="" name="SASS" />
                </div>
            </div>
        </div>
    );
};

export default Tools;
