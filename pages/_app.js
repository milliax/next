import React, {useEffect} from 'react'
import Head from 'next/head'
import '../styles/main.css'
import {useRouter} from "next/router";
import * as ga from "../components/GA";
import Footer from "../components/footer";

export default function MyApp({Component, pageProps}) {
    const router = useRouter()

    function handleRouteChange(url){
        ga.pageview(url)
    }

    useEffect(()=>{
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    },[router.events])

    return (
        <React.Fragment>
            <Head>
                <title key={"title"}>Milliax' s space</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name={"description"}
                      content={""} key={"metaContent"}/>
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />
            </Head>
            <Component {...pageProps}/>
            <Footer title={"About me"} context={"You can get further information through these approaches"}/>
            <script src="/assets/js/jquery.min.js" />
            <script src="/assets/js/jquery.scrollex.min.js" />
            <script src="/assets/js/browser.min.js" />
            <script src="/assets/js/breakpoints.min.js" />
            <script src="/assets/js/util.js" />
            <script src="/assets/js/main.js" />
        </React.Fragment>
    )
}
