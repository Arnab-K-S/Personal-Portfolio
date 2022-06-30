
const infoCards = (props) => {
    let cardHeading = props.cardHeading;
    let cardText = props.cardText;
    let cardImg = props.cardImg;  
    let link = props.href
    let TeamMembers=props.team
    return (
        <>
            <div className="card">
                <h1>{cardHeading}</h1>
                <div className="projectimages">
                <img src={cardImg} alt='.' />
                </div>
                <div className="description">
                    {cardText}
                </div>
                    <div className='members'>
                {
                        TeamMembers.map((mem) => (
                                <div className='membernames'>{mem}</div>
                        ))
                }
                 </div>
                    <button> <a href={link[0]}>Live Url</a></button>
                    <button> <a href={link[1]}>Github Repo</a></button>
            </div>
        </>
    );
    
}
    infoCards.defaultProps = {
        cardHeading : 'NAME OF THE PROJECT',
        cardImg : require('./images/project.png'),
        cardText : 'DESCRIPTION UNAVAILABLE',
        href : [],
        team:[]
    }
    
export default infoCards