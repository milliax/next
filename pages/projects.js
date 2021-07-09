import Head from "next/head";
import Link from "next/link";
import Nav from '../components/nav'
import Focus from "../components/focussection";

function Projects({posts}) {
    return (
        <div className={"Projects"}>
            <Head>
                <title key={"title"}>Projects</title>
            </Head>
            <header id="header">
                <h1><Link href={"/"}>Home</Link></h1>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Nav/>

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
                            {posts.map((data) => {
                                console.log(posts)
                                return (
                                    <Focus picture={typeof(data.picture) !== "undefined"? data.picture:"https://raw.sivir.pw/public/images/pic04.jpg"}
                                           title={data.title}
                                           context={data.context}
                                           link={`project/${data.link}`}/>
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
    const res = await fetch(`${process.env.DB_HOST}project/list.json`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }
}

export default Projects