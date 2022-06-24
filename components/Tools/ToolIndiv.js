const ToolIndiv = (props) => {
    return (
        <div className="tool">
            <div className="icon">
                <img src={props.icon} alt={props.alt} />
            </div>
            <div className="tool_name">{props.name}</div>
        </div>
    );
};

export default ToolIndiv;
