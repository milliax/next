import Title from '../../../components/Title.js'

export default function Tutorial({ posts }) {

    function listContext(context, index) {
        // parse photo
        const fragment = context.split('{{photo}}')
        return fragment.map((item, index2) => {
            console.log(item)
            return(
                <>
                    {item}
                    {typeof (posts['photo'][index]) !== "undefined" &&
                        typeof (posts['photo'][index][index2]) !== "undefined" &&
                        <>
                            <img src={posts['photo'][index][index2]}/>
                        </>}
                </>
            )
        })
}

return (
    <div>
        <Title title={`${posts.title}`} />

        <section id="wrapper">
            <header>
                <div className="inner">
                    <h2>{posts.title}</h2>
                    <p>{posts.context}</p>
                </div>
            </header>
            <div className="wrapper">
                <div className="inner">
                    {posts['p'].map((data, index) => (
                        <div key={data.title}>
                            <h3 class="major">{data.title}</h3>
                            <p>
                                {listContext(data.context, index)}
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
    console.log(paths)

    return {
        paths,
        fallback: false
    }
}