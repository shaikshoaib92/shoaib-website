import React from "react";
import Navbar from "@/Common/Navbar";
import Layout from "@/Common/Layout";
import styled from "@emotion/styled";
import { montserrat } from "../Fonts";

const index = () => {
  const Container = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }));

  const SubContainer = styled("div")(() => ({
    display: "flex",
    // gap: "10px",
    width: "50%",
    justifyContent: "space-between",
  }));

  const InnerContainer = styled("div")(() => ({
    display: "flex",
    flexWrap: "wrap",
    width: "60%",
    flexDirection: "column",
  }));

  const Img = styled("img")(() => ({
    width: "160px",
    height: "285px",
    borderRadius: "10px",
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

  return (
    <Layout>
      <Container>
        <Heading>About Me</Heading>
        <SubContainer>
          <InnerContainer>
            <SubHeading>Who am I?</SubHeading>
            <Text>
              I am a tech enthusiast with a deep love for coding and
              problem-solving. With good experience in the industry, I have
              honed my skills in both front-end and back-end development. My
              goal is to create efficient, user-friendly, and visually appealing
              web applications that leave a lasting impact.
            </Text>
          </InnerContainer>
          <Img src="./home/shb-img-3.jpeg" />
        </SubContainer>
        <SubContainer>
          <Img
            src="./home/shb-img.jpeg"
            style={{
              transform: "scaleX(-1)",
              width: "140px",
            }}
          />
          <InnerContainer
            style={{
              alignItems: "flex-end",
            }}
          >
            <SubHeading>What do I do?</SubHeading>
            <Text
              style={{
                textAlign: "end",
              }}
            >
              As a full stack developer, I specialize in crafting end-to-end
              solutions. From designing intuitive user interfaces to developing
              robust server-side functionalities, I have a solid understanding
              of the entire development process. I thrive in collaborative
              environments, working closely with designers, project managers,
              and fellow developers to bring ideas to life.
            </Text>
          </InnerContainer>
        </SubContainer>
        <SubContainer
        style={{
          position:"relative"
        }}
        >
          <InnerContainer>
            <SubHeading>Skills and Technologies</SubHeading>
            <Text>
              I have a strong command over a wide range of programming
              languages, frameworks, and tools. Some of the key skills I possess
              include:
              <br />
              <br /> <b>Front-end:</b>
              HTML5, CSS3, JavaScript , React.js, Next.js <br />
              <b>UI libraries:</b> Bootstarap , MUI.
              <br />
              <b>Back-end:</b> Node.js, Express.js, Nest.js.
              <br />
              <b>Databases:</b>
              MySQL, PostgreSQL, MongoDB, Oracle
              <br />
              <b>Version Control:</b>
              Git, GitHub.
              <br />
              <b>Other:</b>
              RESTful APIs, GraphQL , Test-driven Development
            </Text>
          </InnerContainer>
          <Img
            src="/home/shb-img-6.jpeg"
            style={{
              position:"absolute",
              right:0,
              top:50,
              width: "200px",
            }}
          />
        </SubContainer>
      </Container>
    </Layout>
  );
};

export default index;
