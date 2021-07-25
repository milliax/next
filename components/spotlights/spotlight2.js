export default function Spotlight3(props){
    return(
        <section className="wrapper spotlight style3">
            <div className="inner">
                <a href={props.link} className="image"><img src={props.picture} alt=""/></a>
                <div className="content">
                    <h2 className="major">{props.title}</h2>
                    <p>{props.context}</p>
                    <a href={props.link} className="special" rel="noreferrer noopener">Learn more</a>
                </div>
            </div>
        </section>
    )
}