import Title from '../components/Title'
import Focus from '../components/focussection'

export default function Tools({ data }) {
    return (
        <div className={"Tools"}>
            <Title title="Tools" />

            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>Tools</h2>
                        <p>Small Tools that convenient our lifes</p>
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
                                        link={data.link}
                                        key={data.title} />
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
    const data = [
        {
            title: "短網址",
            link: "/short"
        }
    ]

    return {
        props: { data }
    }
}