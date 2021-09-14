import ListContext from '../../../components/ListContext'
import Title from '../../../components/Title'
import { MDXRemote } from "next-mdx-remote"
import {MDXProvider} from "@mdx-js/react"
import Image from "next/image"

// for server
import { serialize } from "next-mdx-remote/serialize"


const ResponsiveImage = props =>(
    <Image alt={props.alt} layout="responsive" height="720" width="1280" {...props}/>
)

const components={
    img: ResponsiveImage
}


export default function Post({ posts,info }) {
    return (
        <div>
            <Title title={`${info.title}-Posts`} />

            <section id="wrapper">
                <header>
	                <div className="inner">
                        <h2>{info.title}</h2>
                        <p>{info.title}</p>
                    </div>
                </header>
                <div className="wrapper">
                    <div className="inner">
                        <MDXRemote {...posts} components={components}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const postId = params.postid
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/post/${postId}/zh-tw.md`)
    const text = await res.text()
    const mdxSource = await serialize(text)
    
    const res2 = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}post/lists.json`)
    const data = await res2.json()
    
    let info = {
        link: "not_found",
        title: "查無資訊",
        context: "Wrong params"
    }

    for(let e of data){
        if(e.link === postId){
            info = e
        }
    }

    return {
        props: {
            posts: mdxSource,
            info
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}post/lists.json`)
    const data = await res.json()
    const paths = data.map((item) => (`/post/new/${item.link}`))
    return {
        paths,
        fallback: false
    }
}
