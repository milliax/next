import Link from "next/link";

export default function Nav(){
    return(
        <nav id="menu">
            <div className="inner">
                <h2>Menu</h2>
                <ul className="links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tutorials">Tutorials</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/posts">Posts</Link></li>
                </ul>
                <a href="#" className="close">Close</a>
            </div>
        </nav>
    )
}