import React, { useState } from "react";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import {
  default as card,
  default as station
} from "../../styles/Stations/Stations.module.css";
import PlayerComponent from "../common/PlayerComponent/PlayerComponent";
import SingleStation from "../singleStation/SingleStation";
const data = [
  { name: "putin fm", id: 1, point: "66,6" },
  { name: "drible fm", id: 2, point: "66,6" },
  { name: "putin fm", id: 3, point: "66,6" },
  { name: "putin fm", id: 4, point: "66,6" },
  { name: "putin fm", id: 5, point: "66,6" },
];

const Stations = () => {
  const [state, setState] = useState(false);
  const [fData, setFdata] = useState();
  const handleClick = (id) => {
    setState(true);
    console.log(state, id);
    const filterData = data.find((data) => data.id === id);
    console.log(filterData);
    setFdata(filterData);
  };
  return (
    <div className={station.station}>
      <div className={card.maincard}>
        <Header />
         {
           state && <PlayerComponent/>
         }
        <div>
          {/* <div> */}
          {data.map((data) => (
            <SingleStation
              state={state}
              key={data.id}
              data={data}
              fData={fData}
              handleClick={handleClick}
            />
          ))}
         <Footer state={state} fData={fData}/>
        
        </div>
      </div>
    </div>
  );
};

export default Stations;
