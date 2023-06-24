
const infoCards = (props) => {
    const {cardHeading,cardText,team,cardImg,links}=props;
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
                        team.map((mem) => (
                                <div className='membernames'>{mem}</div>
                        ))
                }
                 </div>
                    <button> <a href={links[0]}>Live Url</a></button>
                    <button> <a href={links[1]}>Github Repo</a></button>
            </div>
        </>
    );
    
}
    infoCards.defaultProps = {
        cardHeading : 'NAME OF THE PROJECT',
        cardImg : require('../images/project.png'),
        cardText : 'DESCRIPTION UNAVAILABLE',
        href : [],
        team:[]
    }
    
export default infoCards