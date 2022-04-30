const WorkIndiv = (props) => {
    return (
        <div className="work-indiv">
            <div className="header">
                <h3 className="title-sm">{props.title}</h3>
                <button className="tag">{props.button}</button>
            </div>
        </div>
    );
};

export default WorkIndiv;
