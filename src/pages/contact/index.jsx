import Layout from "@/Common/Layout";
import styled from "@emotion/styled";
import React from "react";
import { montserrat } from "../Fonts";
import { useRouter } from "next/router";

const index = () => {
  const Container = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }));

  const InnerContainer = styled("div")(() => ({
    display: "flex",
    flexWrap: "wrap",
    width: "60%",
    flexDirection: "column",
  }));

  const Heading = styled("p")(() => ({
    fontSize: "40px",
    fontFamily: montserrat.style.fontFamily,
    color: "#000080",
  }));

  const SubHeading = styled("p")(() => ({
    fontSize: "30px",
    fontFamily: montserrat.style.fontFamily,
    color: "#008080",
  }));

  const Text = styled("p")(() => ({
    fontSize: "14px",
    fontFamily: montserrat.style.fontFamily,
    color: "#888888",
    lineHeight: "25px",
  }));

  const Icon = styled("img")(() => ({
    position: "absolute",
    width: "50px",
    height: "50px",
    cursor:"pointer"
  }));

  const ConnectText = styled("p")(() => ({
    fontSize: "25px",
    fontWeight: "500",
    margin: 0,
    color: "gray",
    fontFamily: montserrat.style.fontFamily,
  }));

  const ImgDiv = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    position: "relative",
    top: 50,
  }));

  const router = useRouter();

  return (
    <Layout>
      <Container>
        <Heading>Contact</Heading>
        <InnerContainer>
          <SubHeading>Let's Connect</SubHeading>
          <Text>
            I am always open to new opportunities and collaborations. If you
            have a project in mind or simply want to discuss anything related to
            web development, feel free to get in touch with me. You can find my
            contact information at the bottom of this page. Thank you for
            visiting my portfolio website. I invite you to explore my projects
            and learn more about my journey as a full stack developer. Let's
            create something amazing together!
          </Text>
        </InnerContainer>
        <ImgDiv>
          <ConnectText>Click on the Icon to connect</ConnectText>
          <img
            src="/Icons/working-men.jpg"
            style={{
              width: "500px",
              height: "600px",
            }}
          />
          <Icon
            src="/Icons/LInkedin.png"
            style={{
              left: 0,
              top: 200,
            }}
            onClick={()=>router.push("https://www.linkedin.com/in/shaik-shoaib-dev/")}
            />
          <Icon
            src="/Icons/Twitter.webp"
            style={{
                left: 220,
                top: 50,
            }}
            onClick={()=>router.push("https://twitter.com/shoaib9262?t=vyrSh3vlS9Bkp4Kby_GD-Q&s=09")}
            />
          <Icon
            src="/Icons/WhatsApp.svg.png"
            style={{
                left: 300,
                top: 110,
            }}
            onClick={()=>router.push("https://wa.me/8341745385")}
            />
          <Icon
            src="/Icons/Gmail-logo.png"
            style={{
                width: "110px",
                left: 450,
                top: 230,
            }}
            onClick={()=>router.push("mailto: shaikshoaib9537@gmail.com")} 
            />
        </ImgDiv>
      </Container>
    </Layout>
  );
};

export default index;
