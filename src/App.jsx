import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { FaEdit } from "react-icons/fa";
import Form from "./components/form";

import './App.css'
import SimpleBarChart from "./components/projectCreation";


function App() {
  
const [showForm, setShowForm] = useState(false);

  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setShowForm(false);
  };

  

  //For cCurrent Date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  //For ScreenShot
  const pageRef = useRef();

  const handleCaptureClick = async () => {
    const element = pageRef.current;
    const canvas = await html2canvas(element);
    const dataUrl = canvas.toDataURL("image/png");

    // Download the screenshot automatically
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "screenshot.png";
    link.click();
  };

 
 return (
  ///page div
   <div ref={pageRef}
   style={{
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  height: '100vh',
  padding: '5px',
  border: '2px solid black',
  boxSizing: 'border-box',
  backgroundColor:'yellow'

   }}
   
   >

 
    {/* For title  */}
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:"red" }} >
    <h1
      style={{
        fontWeight: "bold",
        fontSize: "25px",
        // marginTop: "2px",
        // marginBottom: "2px",
        textAlign: "center",
      }}
    >
      C2P Decision Matrix Weekly Status Report {" "}
      <span style={{ fontSize: "18px", fontWeight: "normal" }}>
        | {formattedDate}
        </span>
    </h1>
    <div
        onClick={handleCaptureClick}
        style={{
          marginLeft:"20px",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        📸
      </div>
   
          <FaEdit style={{marginLeft:"2vw",
          fontSize: "20px",
          cursor: "pointer"}} 
          onClick={handleEditClick}
          />
    
      

      </div>
      {showForm && <Form onSubmit={handleFormSubmit} />}

        {/* Lower Div  */}
      <div
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:"blue", width:"full" , height:"100%" ,margin:"5px" , boxSizing: 'border-box',}}
      >
        {/* Left Div  */}
        <div
        style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0' }}
        
        >
          This is Left
        
         <SimpleBarChart/>

        </div>
        {/* Right Div  */}
        <div
        style={{ width: '100%', height: '100%', backgroundColor: '#d0d0d0' }}
        >
          This is Right

        </div>
        
      </div>

  </div>
);

}

export default App