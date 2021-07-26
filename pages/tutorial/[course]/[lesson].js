import Title from '../../../components/Title.js'
import ListContext from '../../../components/ListContext.js'

export default function Tutorial({ posts }) {
    return (
        <div>
            <Title title={`${typeof (posts.title) !== "undefined" && posts.title}`} />

            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>{typeof (posts.title) !== "undefined" && posts.title}</h2>
                        <p>{typeof (posts.context) !== "undefined" && posts.context}</p>
                    </div>
                </header>
                <div className="wrapper">
                    <div className="inner">
                        {typeof (posts['p']) !== "undefined" && posts['p'].map((data, index) => (
                            <div key={data.title}>
                                <h3 class="major">{data.title}</h3>
                                <p>
                                    <ListContext context={data.context} 
                                        additionals={posts.additionals}/>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const lesson = params.lesson
    const course = params.course
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}tutorial/${course}/${lesson}.json`)
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }
}

async function getProperPath(course) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}tutorial/${course}/outline.json`)
    const data = await res.json()
    return data.map((item) => (`/tutorial/${course}/${item.link}`))
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}tutorial/list.json`)
    const data = await res.json()

    const rawPath = data.map((data) => (getProperPath(data.link)))
    const tempPaths = await Promise.all(rawPath)
    let paths = []
    for (let item of tempPaths) {
        for (let routes of item) {
            paths.push(routes)
        }
    }

    return {
        paths,
        fallback: false
    }
}