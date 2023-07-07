import styled from "@emotion/styled";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { montserrat } from "@/pages/Fonts";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "718px",
  backgroundColor: "#000080",
  alignItems: "center",
  boxShadow: "7px -1px 25px -9px rgba(69,69,77,1)",
  borderRadius: "2px",
  position: "relative",
}));

const InnerContainer = styled("div")(() => ({
  marginTop: "100px",
}));

const MenuItem = styled("p")(() => ({
  fontFamily: montserrat.style.fontFamily,
  color: "grey",
  fontSize: "20px",
  fontWeight: 500,
}));

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open ? (
        <></>
        // <MenuIcon
        //   style={{
        //     paddingLeft: "10px",
        //     paddingTop: "10px",
        //     width: "40px",
        //     height: "40px",
        //     position: "relative",
        //     left: 0,
        //     zIndex: -1,
        //   }}
        //   onClick={() => {
        //     console.log("I am clicked");
        //     setOpen(!open)}}
        // />
      ) : (
        <Container
          style={{
            width: open ? "50%" : 0,
            transform: "1s",
            transition: "0.8s",
          }}
        >
          <CloseIcon
            style={{
              color: "white",
              position: "absolute",
              right: 10,
              top: 10,
              width: "30px",
              height: "30px",
            }}
            onClick={() => setOpen(false)}
          />
          <InnerContainer>
            <MenuItem
              style={{
                color: router.pathname == "/" ? "white" : "",
                display: open ? "block" : "none",
              }}
              onClick={() => router.push("/")}
            >
              Home
            </MenuItem>
            <MenuItem
              style={{
                color: router.pathname == "/about" ? "white" : "",
                display: open ? "block" : "none",
              }}
              onClick={() => router.push("/about")}
            >
              About
            </MenuItem>

            <MenuItem
              style={{
                color: router.pathname == "/contact" ? "white" : "",
                display: open ? "block" : "none",
              }}
              onClick={() => router.push("/contact")}
            >
              Contact
            </MenuItem>
          </InnerContainer>
        </Container>
      )}
    </>
  );
};

export default Sidebar;
