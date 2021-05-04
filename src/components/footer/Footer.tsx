import React from "react";
import { Box, Container, Row, Column, FooterLink, Heading } from "./styles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>DEMO SOLO CAPSTONE</h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Delivery</FooterLink>
            <FooterLink href="#">Discount</FooterLink>
            <FooterLink href="#">Fast</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Tashkent</FooterLink>
            <FooterLink href="#">Samarqand</FooterLink>
            <FooterLink href="#">Samarqand</FooterLink>
            <FooterLink href="#">Jizzax</FooterLink>
          </Column>
          <Column>
            <Heading>Locations</Heading>
            <FooterLink href="#">
              <span style={{ marginLeft: "10px" }}>Tashkent</span>
            </FooterLink>
            <FooterLink href="#">
              <span style={{ marginLeft: "10px" }}>Samarqand</span>
            </FooterLink>
            <FooterLink href="#">
              <span style={{ marginLeft: "10px" }}>Buhoro</span>
            </FooterLink>
            <FooterLink href="#">
              <span style={{ marginLeft: "10px" }}>Jizzax</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
