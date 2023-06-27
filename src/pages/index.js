import Layout from "@/Common/Layout";
import { montserrat } from "./Fonts";
import Background from "@/Common/Background";
import styled from "@emotion/styled";

const Container = styled("div")(() => ({
  backgroundImage: "/home/bgimg.jpg",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100vh",
  position: "relative",
}));

const TextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
}));
const InnerTextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
}));

const Heading = styled("p")(() => ({
  top: 100,
  left: 480,
  fontSize: "40px",
  fontWeight: "700",
  margin: 0,
  color: "#000080",
  fontFamily: montserrat.style.fontFamily,
}));

const SubHeading = styled("p")(() => ({
  top: 100,
  left: 480,
  fontSize: "30px",
  fontWeight: "600",
  margin: 0,
  color: "#008080",
  fontFamily: montserrat.style.fontFamily,
}));

const SubHeading2 = styled("p")(() => ({
  top: 100,
  left: 480,
  fontSize: "25px",
  fontWeight: "500",
  margin: 0,
  color: "gray",
  fontFamily: montserrat.style.fontFamily,
}));

const Text = styled("p")(() => ({
  fontSize: "14px",
  color: "#888888",
  fontFamily: montserrat.style.fontFamily,
}));

const Img = styled("img")(() => ({
  height: "70%",
  width: "400px",
  marginTop: "80px",
  borderRadius: "50px",
  border: "1px solid black",
}));

export default function Home() {
  return (
    <Layout>

      {/* <Background />
      <Container>
        <TextContainer>
          <InnerTextContainer>
            <Heading>
              I'm
              <span> Shaik Shoaib.</span>
            </Heading>
            <SubHeading>Full Stack Developer</SubHeading>
            <SubHeading2>Based in India</SubHeading2>
          </InnerTextContainer>
          <Text>
            Welcome to my portfolio website, where I showcase my skills,
            projects, and journey in the world of web development.
          </Text>
        </TextContainer>
        <Img src="/home/shb-img-2.jpeg" />
      </Container> */}
    </Layout>
  );
}
