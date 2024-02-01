import React from "react";
import MainPage from "./MainPage";
import Card from "./Card";
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import img2 from "./images/chatbotImage.png";

const HomePage = () => {
  const chatbotIconStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "50px", // Adjust the width as needed
    height: "auto", // Maintain aspect ratio
  };
  // const navigate=useNavigate();
  // const openChatbotInNewTab = () => {
  //   const anchor = document.createElement("a");
  //   anchor.href = "/chatbot";
  //   anchor.target = "_blank";
  //   anchor.click();
  // };
  // const openChatbotInNewTab = () => {
  //   // Open the chatbot route in a new tab
  //   window.open("/chatbot", "_blank");
  // };

  return (
    <MainPage>
      <h3 style={{ textAlign: "center" }}>AI Services</h3>
      <div className="d-flex justify-content-around">
        <Card
        image={
          "data:image/jpeg;base64,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"
        }
          name="Text"
          description="Enter text content into the provided textarea, and predict its sentiment"
        />
        <Card
          image={"https://www.speechly.com/uploads/webspeech.jpg"}
          name="Speech-to-Text"
          description="Upload the file here"
        />
        <div style={chatbotIconStyle}>
        {/* <img
            src={img2}
            alt="chatBot"
            style={imgStyle}
            onClick={openChatbotInNewTab}
          /> */}
          <img src={img2} alt="chatBot" style={imgStyle} onClick={()=>navigate('/chatbot')} />
        </div>
      </div>
    </MainPage>
  );
};

export default HomePage;
