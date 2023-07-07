import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "@emotion/styled";
import { isDesktop, isMobile } from "react-device-detect";
import Sidebar from "./Sidebar";

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const SubContainer = styled("div")(() => ({
  marginTop: "60px",
  width: "100%",
  overflowX: "hidden",
  overflowY: "hidden",
}));

const MobileContainer = styled("div")(() => ({
  display: "flex",
  margin: -10,
}));

const MobileSubContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  padding:"10px"
}));

const Layout = ({ children }) => {
  if (isMobile) {
    return (
      <MobileContainer>
        <Sidebar />
        <MobileSubContainer>{children}</MobileSubContainer>
      </MobileContainer>
    );
  }
  if (isDesktop) {
    return (
      <Container>
        <Navbar />
        <SubContainer>{children}</SubContainer>
        <Footer />
      </Container>
    );
  }
};

export default Layout;
