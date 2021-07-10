import Link from 'next/link'
import Nav from '../components/nav'
import HomeTitle from "../components/homeTitle";
import Banner from "../components/banner";
import Spotlight1 from "../components/spotlights/spotlight1";
import Spotlight2 from "../components/spotlights/spotlight3";
import Focus from "../components/focussection";

function Home({projects}) {
    const focusTitle = "collection"
    const focusContext = "descriptions"
    return (
        <div className={'Home'}>

            <div id="page-wrapper">
                <HomeTitle/>
                <Nav/>
                <Banner title={"I am Milliax"}
                        context={"oh I don' t know what to say \n below are some of my projects"}/>

                <section id="wrapper">
                    <Spotlight1 link={"/projects"}
                                title={"projects"}
                                context={"The followings are my projects"}
                                picture="https://raw.sivir.pw/public/images/pic01.jpg"
                                key={"projects"}/>

                    <Spotlight2 link={"/tutorials"}
                                title={"tutorials"}
                                context={"During my self-studying time.\nI realized that if someone writes a tutorial in advance, then we can learn things more efficient and correct."}
                                picture="https://raw.sivir.pw/public/images/pic02.jpg"
                                key={"tutorials"}/>

                    <section className="wrapper alt style1">
                        <div className="inner">
                        <h2 className="major">{focusTitle}</h2>
                        <p>{focusContext}</p>
                        <section className="features">
                            {projects.slice(0,4).map((data)=>{
                                return(
                                    <Focus picture={data.picture}
                                           title={data.title}
                                           context={data.context}
                                           link={`/post/${data.link}`}
                                           key={data.title}/>
                                )
                            })}
                        </section>
                        <ul className="actions">
                            <li><Link href="/posts" className="button">Browse All</Link></li>
                        </ul>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}project/list.json`)
    const projects = await res.json()

    return {
        props: { projects }
    }
}

export default Home