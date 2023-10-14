import { TOTALSCREENS } from "../utils/commonUtils"

const PortfolioContainer = () => {
    const mapAllScreens = () => {
        return(
            TOTALSCREENS.map((screen) => (
                (screen.component) ? <screen.component screenName={screen.screenName} key={screen.screenName} id={screen.screenName} /> : <div key={screen.screenName}></div>
            ))
        )
    }
    return (
        <>
            <div className="portifolio-container">

                {mapAllScreens()}
            </div>
        </>
    )
}

export default PortfolioContainer