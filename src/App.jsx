import React, { useState } from "react";
import "./App.css";
import wsiImage from "/src/assets/wsi.png";  // Place your WSI image in the 'src' folder
import BloodTable from "./Components/FindingDetails";

function App() {
  const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level
  const [transformOrigin, setTransformOrigin] = useState("center center");

  const zoomStep = 0.2;
  const maxZoom = 3;
  const minZoom = 1;

  // Function to increase zoom level
  const zoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + zoomStep, maxZoom));
  };

  // Function to decrease zoom level
  const zoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - zoomStep, minZoom));
  };

  // Function to handle zoom based on mouse wheel
  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      zoomIn();
    } else if (event.deltaY > 0) {
      zoomOut();
    }
  };

  // Update transform origin based on mouse position
  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  // Reset transform origin when mouse leaves
  const handleMouseLeave = () => {
    setTransformOrigin("center center");
  };

  return (
    <div className="viewer-container">
      {/* Left Panel for Findings Details */}
      <div className="left-panel">
        <h2>Findings Details</h2>
        <BloodTable/>
      </div>

      {/* Main Viewer Area */}
      <div className="main-view">
        {/* Hub View in Top Right */}
        <div className="hub-view">
          <img src={wsiImage} alt="WSI Hub View" className="hub-image" />
          <div className="hub-pointer" style={{ left: `${zoomLevel * 20}%`, top: `${zoomLevel * 20}%` }}>
            {/* Pointer indicating viewing area */}
          </div>
        </div>

        {/* Interactive Image with Zoom */}
        <div
          className="zoom-container"
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={wsiImage}
            alt="Whole Slide Image"
            className="zoom-image"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: transformOrigin,
            }}
          />
        </div>

        {/* Zoom Controls */}
        <div className="controls">
          <button onClick={zoomIn}>Zoom In</button>
          <button onClick={zoomOut}>Zoom Out</button>
        </div>
      </div>
    </div>
  );
}

export default App;
