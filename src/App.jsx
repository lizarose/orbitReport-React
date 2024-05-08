import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";


function App() {
  //compare changes in state and update the state
  const [sat, setSat] = useState(satData);

  //uses Set method to create new array from satData- will be used to create buttons
  //[Low, Medium, High] buttons for orbit types
  const displaySats = [...new Set(satData.map((data) =>
  data.orbitType))];

  //filters satellite data based on orbit type selected, making sure only the orbit types shown match the selected button
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType} 
        setSat={setSat}             
        displaySats={displaySats}   //orbit types
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;