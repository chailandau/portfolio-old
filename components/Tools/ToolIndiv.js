import Image from "next/image";

const ToolIndiv = (props) => {
    return (
        <div className="tool">
            <div className="icon">
                <Image
                    src={props.icon}
                    layout="intrinsic"
                    alt={props.alt}
                    height="150"
                    width="152"
                />
            </div>
            <div className="name">{props.name}</div>
        </div>
    );
};

export default ToolIndiv;
