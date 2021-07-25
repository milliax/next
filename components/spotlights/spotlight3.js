export default function Spotlight2(props){
    return(
        <section className="wrapper alt spotlight style2">
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