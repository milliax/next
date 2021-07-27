import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'Milliax in PWA'
const APP_DESCRIPTION = 'Milliax\' s secret space in pwa'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }
    render() {
        return (
            <Html lang='en' dir='ltr'>
                <Head>
                    <meta name='application-name' content='Milliax' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Milliax' />
                    <meta name='description' content="Milliax' s secret place" />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
                    <meta name='msapplication-TileColor' content='#2B5797' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#000000' />

                    <link rel='apple-touch-icon' href='/static/icons/touch-icon-iphone.png' />
                    <link rel='apple-touch-icon' sizes='152x152' href='/static/icons/touch-icon-ipad.png' />
                    <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/touch-icon-iphone-retina.png' />
                    <link rel='apple-touch-icon' sizes='167x167' href='/static/icons/touch-icon-ipad-retina.png' />

                    <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
                    <link rel='manifest' href='/static/manifest.json' />
                    <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:url' content='https://sivir.pw' />
                    <meta name='twitter:title' content="Milliax" />
                    <meta name='twitter:description' content="Milliax' s secret place" />
                    <meta name='twitter:image' content='https://sivir.pw/static/icons/android-chrome-192x192.png' />
                    <meta name='twitter:creator' content='@DavidWShadow' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Milliax' />
                    <meta property='og:description' content="Milliax' s secret place" />
                    <meta property='og:site_name' content='Milliax' />
                    <meta property='og:url' content='https://sivir.pw' />
                    <meta property='og:image' content='https://sivir.pw/static/icons/apple-touch-icon.png' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}
