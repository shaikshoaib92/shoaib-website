import { montserrat } from "@/pages/Fonts";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "50px",
  position: "fixed",
  top: 0,
  backgroundColor: "#ffff",
  padding: "10px",
  borderBottom: "2px solid black",
  zIndex: 1,
}));

const SubContainer = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));

const Page = styled("div")(() => ({
  fontFamily: montserrat.style.fontFamily,
  cursor: "pointer",
}));

const Acitve = ({ active, children }) => {
  const ActiveContainer = styled("div")(() => ({
    borderBottom: active ? "2px solid red" : "",
    padding: "10px",
  }));
  <ActiveContainer>{children}</ActiveContainer>;
};

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <Container>
      <SubContainer>
        <Page onClick={() => router.push("/")}>Home</Page>
        <Page onClick={() => router.push("/about")}>About</Page>
        <Page onClick={() => router.push("/contact")}>Contact</Page>
      </SubContainer>
    </Container>
  );
};

export default Navbar;

{
  /* </Acitve>
        <Acitve active={path === "/about" ? true : false}>
        <Acitve active={path === "/contact" ? true : false}>
        </Acitve> */
}
