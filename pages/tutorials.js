import {useState,useEffect} from 'react'
import Title from '../components/Title'
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
            <Title title="Tutorials"/>

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