export default function Project(){
    return(
        <div>
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

                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps(context){
    const lesson = context.lesson
    const course = context.course
    return {
        props:{
            post
        }
    }
}

export async function getStaticPaths(){
    let paths = []

    
    return{
        paths,
        fallback: false
    }
}