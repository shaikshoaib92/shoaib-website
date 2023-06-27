import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          marginTop: "60px",
          // overflow: "scroll",
          //   overflowX: "hidden",
          width: "100%",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
