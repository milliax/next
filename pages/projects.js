import Title from '../components/Title'
import Focus from "../components/focussection";

function Projects({data}) {
    return (
        <div className={"Projects"}>
            <Title title="Projects"/>

            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>Projects</h2>
                        <p>the followings are my projects</p>
                    </div>
                </header>

                <div className="wrapper">
                    <div className="inner">
                        <section className="features">
                            {data && data.map((data) => {
                                return (
                                    <Focus picture={data.picture}
                                           title={data.title}
                                           context={data.context}
                                           link={`project/${data.link}`}
                                           key={data.title}/>
                                )
                            })}
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}project/list.json`)
    const data = await res.json()

    return {
        props: { data }
    }
}

export default Projects