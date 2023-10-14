import './App.css';
import PortfolioContainer from './PortfolioContainer/PortifolioContainer';
import { FaArrowCircleUp } from "react-icons/fa";
import ScrollService from "./utils/ScrollService";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <ToastContainer />
      <PortfolioContainer />
      <div className="sticky-div"  onClick={() => ScrollService.scrollHandler.scrollToHome()}>
        <FaArrowCircleUp />
      </div>
    </>
  )
}

export default App
