import Head from "next/head";
import Link from "next/link";
import Nav from '../components/nav'
import Focus from "../components/focussection";

function Projects({data}) {
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