import "./diagnosis.css"

const DDescription = (props) => {
    const diseases = props.dataSet.join(', ')
    const results = "Results: ".concat(diseases);
    return(
        <p className="navbarHeader">
            {results}
        </p>
    );
}

export default DDescription