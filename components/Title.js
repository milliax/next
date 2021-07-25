import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
export default function Title(props) {
    return (
        <>
            <Head>
                <title key={"title"}>{typeof(props.title) !== "undefined"? `${props.title} - Milliax`: 'Milliax\' s Space'}</title>
            </Head>

            <header id="header">
                <h1><Link href={"/"}>Home</Link></h1>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
            <Nav />
        </>
    )
}