import { montserrat } from "@/pages/Fonts";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      style={{
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
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <p
          style={{
            fontFamily: montserrat.style.fontFamily,
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        >
          Home
        </p>
        <p
          style={{
            fontFamily: montserrat.style.fontFamily,
            cursor: "pointer",
          }}
          onClick={() => router.push("/about")}
        >
          About
        </p>
        <p
          style={{
            fontFamily: montserrat.style.fontFamily,
            cursor: "pointer",
          }}
          onClick={() => router.push("/contact")}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default Navbar;
