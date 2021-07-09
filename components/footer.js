import {useState} from 'react'
import Image from 'next/image'
export default function Footer(props){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [comment,setComment] = useState('')

    const Send = async ()=>{
        try{
            const query = `&entry.1105467687=${name}&entry.2133051960=${email}&entry.788216262=${comment}&entry.996384014=${window.location.href}&submit=SUBMIT`;
            const googleForm = `https://docs.google.com/forms/d/e/1FAIpQLSdY8rCNTc06qRgXKI2-CHwpBWG1pgUj4un6u8hCnKVZaeZ66g/formResponse`
            const url = encodeURI(`${googleForm}?${query}`)
            await fetch(url,{
                method: 'POST',
                mode: 'no-cors'
            })
            window.alert(`Message sent successful`)
        }catch (err){
            window.alert(`Message sent FAILED: ${err}`)
        }
        setComment('')
        setName('')
        setEmail('')
    }
    return(
        <section id="footer">
            <div className="inner">
                <h2 className="major">{props.title}</h2>
                <p>{props.context}</p>
                <form onSubmit={(e)=>{e.preventDefault();Send()}}>
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={name} onChange={e=>{setName(e.target.value)}} required/>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}} required/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea rows="4" value={comment} onChange={e=>{setComment(e.target.value)}} required/>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message"/></li>
                    </ul>
                </form>
                <ul className="contact">
                    <li className="icon solid fa-home">
                        Untitled Inc<br/>
                        1234 Somewhere in Taiwan
                    </li>
                    <li className="icon solid fa-envelope"><a href={"mailto:wei@sivir.pw"}>wei@sivir.pw</a></li>
                    <li className="icon brands fa-twitter"><a href={"https://twitter.com/milliacs"} rel="noreferrer noopener" target={'_blank'}>twitter.com/milliacs</a></li>
                    <li className="icon brands fa-instagram"><a href={"https://www.instagram.com/hungw.c/"} rel="noreferrer noopener" target={'_blank'}>instagram.com/unknown</a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled Inc. All rights reserved.</li>
                    <li>Design: <a href="http://html5up.net" rel="noreferrer noopener" target='_blank'>HTML5 UP</a></li>
                    <li>Construct: Milliax</li>
                    <li>Powered by <span><Image src={"/vercel.svg"} alt={"Vercel Logo"} width={90} height={20} /></span></li>
                </ul>
            </div>
        </section>
    )
}