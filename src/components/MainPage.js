import React from "react";
import Layout from "./Layout";
import img1 from "./images/homepage.png";

const MainPage = ({ children }) => {
  return (
    <div>
      <Layout />
      <main
        style={{
          minHeight: "90vh",
          border: "0px solid red",
          backgroundImage:
            `url(${img1})`,
            backgroundSize: 'cover'
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainPage;
