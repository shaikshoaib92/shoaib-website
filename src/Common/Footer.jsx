import { montserrat } from "@/pages/Fonts";
import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
  const Container = styled("div")(() => ({
    display: "flex",
    // width: "100%",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "2px solid black",
    position:"relative",
    bottom:0
  }));

  const Text = styled("p")(() => ({
    fontFamily: montserrat.style.fontFamily,
    fontSize: "16px",
  }));
  return (
    <Container>
      <Text>Made with ❤️</Text>
    </Container>
  );
};

export default Footer;
