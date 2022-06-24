import Title from "../Title";
import ToolIndiv from "./ToolIndiv";

const Tools = () => {
    return (
        <div className="tools">
            <div className="wrapper">
                <Title text="Toolbox" />
                <div className="grid">
                    <ToolIndiv icon="/img/icons/html.png" alt="html logo" name="HTML" />
                    <ToolIndiv icon="/img/icons/css.png" alt="css logo" name="CSS" />
                    <ToolIndiv icon="/img/icons/js.png" alt="javascript logo" name="JS" />
                    <ToolIndiv icon="/img/icons/react.png" alt="react logo" name="React" />
                    <ToolIndiv icon="/img/icons/nextjs.png" alt="next js logo" name="Next.js" />
                    <ToolIndiv icon="/img/icons/git.png" alt="git logo" name="Git" />
                    <ToolIndiv
                        icon="/img/icons/vscode.png"
                        alt="visual studio code logo"
                        name="VSCode"
                    />
                    <ToolIndiv
                        icon="/img/icons/wordpress.png"
                        alt="wordpress logo"
                        name="WordPress"
                    />
                    <ToolIndiv
                        icon="/img/icons/acf.png"
                        alt="advanced custom fields logo"
                        name="ACF"
                    />
                    <ToolIndiv icon="/img/icons/firebase.png" alt="firebase logo" name="Firebase" />
                    <ToolIndiv
                        icon="/img/icons/adobe_cc.png"
                        alt="adobe creative cloud logo"
                        name="Adobe CC"
                    />
                    <ToolIndiv icon="/img/icons/figma.png" alt="figma logo" name="Figma" />
                    <ToolIndiv icon="/img/icons/strapi.png" alt="strapi logo" name="Strapi" />
                    <ToolIndiv icon="/img/icons/sass.png" alt="sass logo" name="SASS" />
                </div>
            </div>
        </div>
    );
};

export default Tools;
