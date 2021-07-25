import Banner from "../components/banner";
import Nav from '../components/nav'
import HomeTitle from "../components/homeTitle";
export default function custom404() {
    return (
        <div id="page-wrapper">
            <HomeTitle />
            <Nav />
            <Banner title={"Page Not Found"}
                    context={"Please Try Check your url and try again"}/>
        </div>

    )
}