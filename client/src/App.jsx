import './App.css';
import PortfolioContainer from './PortfolioContainer/PortifolioContainer';
import { FaArrowCircleUp } from "react-icons/fa";
import ScrollService from "./utils/ScrollService";


const App = () => {
  return (
    <>
      <PortfolioContainer />
      <div className="sticky-div"  onClick={() => ScrollService.scrollHandler.scrollToHome()}>
        <FaArrowCircleUp />
      </div>
    </>
  )
}

export default App
