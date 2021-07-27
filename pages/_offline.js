import Head from 'next/head'
export default function Offline(){
    return(
        <div id="page-wrapper">
            <HomeTitle />
            <Head> 
                <title key="title">Offline</title>
            </Head>
            <Nav />
            <Banner title={"Page Not Found"}
                    context={"Please Try Check your url and try again"}/>
        </div>
    )
}