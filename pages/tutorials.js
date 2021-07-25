import {useState,useEffect} from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from "next/link";
import Focus from '../components/focussection'

export default function Tutorials(){
    const [focusData,setFocusData] = useState([])
    const fetchfocusData = async ()=>{
        const url = process.env.NEXT_PUBLIC_ENDPOINT + 'tutorial/list.json'
        const data = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
        const json = await data.json()
        console.log(json)
        setFocusData(json)
    }
    useEffect(()=>{
        fetchfocusData()
    },[])
    return(
        <div className={"Tutorials"}>
            <Head>
                <title key={"title"}>Tutorials</title>
            </Head>

            <header id="header">
                <h1><Link href={"/"}>Home</Link></h1>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Nav />

            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>Tutorials</h2>
                        <p>During my self-studying time.
                            I realized that if someone writes a tutorial in advance, then we can learn things more efficient and correct.</p>
                    </div>
                </header>

                <div className="wrapper">
                    <div className="inner">
                        <section className="features">
                            {focusData.map(data=>{
                                return(
                                    <Focus picture={"https://raw.sivir.pw/public/images/pic04.jpg"}
                                           title={data.title}
                                           context={data.context}
                                           request={`tutorial/${data.link}`} />
                                )
                            })}
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}