const Title = (props) => {
    return (
        <div className="title">
            <div className="wrapper">
                <h2 className="title-md">{props.text}</h2>
            </div>
        </div>
    );
};

export default Title;
