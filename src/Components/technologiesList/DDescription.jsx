import "./DDescription.css"

const DDescription = (props) => {
    return(
        <div>
            {/* Hello World! */}
            {props.dataSet.map( (title) => {
                return (
                    <div className="navbarHeader">
                        {title}
                    </div>
                )
            })}
        </div>
    );
}

export default DDescription