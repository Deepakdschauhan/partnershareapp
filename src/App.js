import React, { useState } from "react";
import Names from "../src/components/names";
import Frms from "../src/components/frm";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/Footer";
import Hedss from "../src/components/hedss";
import "./App.css";
import "./frm.css";
function App() {
  const [nameData, setNameData] = useState({
    name1: "",
    name2: "",
    name3: "",
  });

  const [frmData, setFrmData] = useState({
    value1: "",
    value2: "",
    value3: "",
  });

  const [print, setPrint] = useState(false);
  const [prin, setPrin] = useState(false);

  const handleNameChange = (field, value) => {
    setNameData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFrmChange = (field, value) => {
    setFrmData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Hedss />
      <Navbar />
      <div id="fullpage">
        <div id="firsthalf">
          <Names
            nameData={nameData}
            onInputname={handleNameChange}
            setprint={setPrint}
          />
        </div>

        <div id="secondhalf">
          <Frms
            nameData={nameData}
            FrmValue={frmData}
            OnInValue={handleFrmChange}
            print={print}
            prin={prin}
            setprin={setPrin}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
