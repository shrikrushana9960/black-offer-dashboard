import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar style={{ background: "black" }} variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="https://cdn.pixabay.com/photo/2023/10/13/03/29/dashboard-8312011_1280.png"
              style={{ height: 50, width: 50, marginRight: "20px" }}
            />
            Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
