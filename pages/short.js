import Title from '../components/Title'
import { useState } from 'react'
import Swal from 'sweetalert2'
import QRCode from 'qrcode.react'

export default function Short() {
    const [url, setUrl] = useState('')
    const [token, setToken] = useState('')
    const [testing, setTesting] = useState(false)
    const [status, setStatus] = useState('')
    const [result, setResult] = useState(false)

    const send = async () => {
        if (url.slice(0, 4) !== "http") {
            setUrl(`http://${url}`)
        }
        setStatus('檢測中')
        setTesting(true)
        try {
            await fetch(url, {
                mode: 'no-cors'
            })
        } catch (err) {
            setTesting(false)
            return await Swal.fire({
                icon: 'error',
                title: '連結無法使用'
            })
        }
        obtainToken()
    }

    const obtainToken = async () => {
        setStatus('產生連結中')
        const body = { url }
        console.log(JSON.stringify(body))
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_FUNCTIONS_ENDPOINT}/add`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response)
            const response = await res.json()
            setToken(response.token)
        } catch (err) {
            setTesting(false)
            return await Swal.fire({
                icon: 'error',
                title: '未知的錯誤',
                text: err
            })
        }
        setTesting(false)
        setResult(true)
    }

    return (
        <div className={"Short"}>
            <Title title="Short" />

            <section id="wrapper">
                <header>
                    <div className="inner">
                        <h2>Short link generator</h2>
                        <p>An easier way to share your link</p>
                    </div>
                </header>

                <div className="wrapper">
                    <div className="inner">

                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                send();
                            }}>
                            <input type="text"
                                value={url}
                                onChange={(e) => { setUrl(e.target.value) }} />
                            <div className="col-6 col-12-medium"
                                style={{
                                    marginTop: "12px"
                                }}>
                                <ul className="actions stacked">
                                    <li><button className="button primary fit">產生</button></li>
                                </ul>
                            </div>
                        </form>
                        <center>
                            <div hidden={!testing}>
                                {status}
                            </div>
                        </center>
                        {result &&
                            <div>
                                <pre className="col-6 col-12-medium">
                                    <code>
                                        <a href={`https://sivir.pw/r/${token}`}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >{`https://sivir.pw/r/${token}`}</a>
                                    </code>
                                </pre>
                                <div style={{ display: 'flex',justifyContent: 'center' }}>
                                    <QRCode value={`https://sivir.pw/r/${token}`} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}