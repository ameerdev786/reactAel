import React,{useState} from 'react'
import { Counter } from "../features/counter/Counter";
import SideFIlters from "../components/filters/SideFIlters";
import DisplayInfo from "../components/maincomponents/DisplayInfo";
import PriceForm from "../components/maincomponents/PriceForm";
import Kp1 from "../components/maincomponents/Kp1";
import Kp2 from "../components/maincomponents/Kp2";
import Kp3 from "../components/maincomponents/Kp3";
import Kp4 from "../components/maincomponents/Kp4";
import "../App.css";
import "../style/mainComp.css";
import "../index.css";
import { FaSearch, FaBars } from "react-icons/fa";
function Home() {
      const [openFilters, setFIltetrs] = useState(true);
      const[sellingPrice,setSellingPrice]=useState(0)

  return (
    <div className='Ael'>
      {" "}
      <FaBars
        className="hamburger"
        onClick={() => {
          setFIltetrs(() => !openFilters);
        }}
      />
      <SideFIlters setFIltetrs={setFIltetrs} openFilters={openFilters} />
      <div className="main">
        <div className="infogrid">
          <div>
            <PriceForm setSellingPrice={setSellingPrice} />
          </div>
          <div>
            <DisplayInfo sellingPrice={sellingPrice}/>
            {/* <Kp4 /> */}
          </div>
          <div className="kps">
            <Kp1 />
            <Kp2 />
            <Kp3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home