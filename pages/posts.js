import Title from '../components/Title'
import Focus from '../components/focussection'
export default function Posts({data}){
    return(
        <div className={"Posts"}>
            <Title title="Posts" />

            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>Posts</h2>
                        <p>the followings are my posts</p>
                    </div>
                </header>

                <div className="wrapper">
                    <div className="inner">
                        <section className="features">
                            {data && data.map((data) => {
                                return (
                                    <Focus title={data.title}
                                           context={data.context}
                                           link={`/post/${data.link}`}
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}post/lists.json`)
    const data = await res.json()

    return {
        props: { data }
    }
}

