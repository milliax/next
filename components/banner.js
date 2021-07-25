export default function Banner(props){
    return(
        <section id="banner">
            <div className="inner">
                <div className="logo"><span className="icon fa-gem" /></div>
                <h2>{props.title}</h2>
                <p>{props.context}</p>
            </div>
        </section>
    )
}