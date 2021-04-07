import styled from "styled-components";

export const Box = styled.div`
  padding: 20px 10px;
  background-image: linear-gradient(to right top, #ffffff, #f1f1f2, #e3e3e4);
  margin: 100px 0 0 0;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  font-size: 11px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #black;
  margin-bottom: 40px;
  font-weight: bold;
`;
