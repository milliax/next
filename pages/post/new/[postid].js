import ListContext from '../../../components/ListContext'
import Title from '../../../components/Title'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// for server
import {serialize} from "next-mdx-remote/serialize"


export default function Post({posts}){
    
    return(
        <div>
            <Title title={`${typeof (posts.title) !== "undefined" && posts.title}`} />

            <section id="wrapper">
	    {/*<header>
	     <div className="inner">
                        <h2>{typeof (posts.title) !== "undefined" && posts.title}</h2>
                        <p>{typeof (posts.context) !== "undefined" && posts.context}</p>
                    </div>
                </header>*/}
                <div className="wrapper">
	    	    <div className="inner">
                        <ReactMarkdown children={posts} remarkPlugins={[remarkGfm]} />
	    	    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const postId = params.postid
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/post/${postId}/zh-tw.md`)
    const mdxSource = await serialize(res)
    return{
        props: {
		posts: mdxSource
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}post/lists.json`)
    const data = await res.json()
    console.log(data)
    const paths = data.map((item)=>(`/post/new/${item.link}`))
    console.log(paths)
    return {
        paths,
        fallback: true
    }
}
