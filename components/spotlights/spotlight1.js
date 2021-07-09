export default function Spotlight1(props){
    return(
        <section className="wrapper spotlight style1">
            <div className="inner">
                <a href={props.link} className="image"><img src={props.picture} alt=""/></a>
                <div className="content">
                    <h2 className="major">{props.title}</h2>
                    <p>{props.context.split('\n').map(line =>{return(<>{line}<br /></>)})}</p>
                    <a href={props.link} className="special" rel="noreferrer noopener" target='_blank'>Learn more</a>
                </div>
            </div>
        </section>
    )
}