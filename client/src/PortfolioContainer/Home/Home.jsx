import Header from "./Header/Header"
import Profile from "./Profile/Profile"
import Footer from "./Footer/Footer"
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="home-container">
            <Header />
            <Profile />
            <Footer />
        </div>
        </>
    )
}

export default Home
