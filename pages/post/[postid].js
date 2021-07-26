import ListContext from '../../components/ListContext'
import Title from '../../components/Title'

export default function Post({posts}){
    
    return(
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
                            <div key={index}>
                                {typeof(data.title) !== "undefined" &&
                                    <h3 class="major">{data.title}</h3>}
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
    const postId = params.postid
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/post/${postId}/zh-tw.json`)
    const posts = await res.json()
    return{
        props: {
            posts
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}post/lists.json`)
    const data = await res.json()
    console.log(data)
    const paths = data.map((item)=>(`/post/${item.link}`))
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}