const infoCards = (props) => {
    let cardHeading = props.cardHeading;
    let cardImg = './images/project.png';
    let cardText = props.cardText;
    let link = props.href
    return (
        <>
            <div className="card">
                <h1>{cardHeading}</h1>
                    <img src={require('./images/project.png')} alt='.' />
                <div className="description">
                    {cardText}
                </div>
                    <button> <a href={link}>Github Repo</a></button>
            </div>
        </>
    );
}

export default infoCards