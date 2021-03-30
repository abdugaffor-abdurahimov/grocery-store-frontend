import styled from "styled-components";

export const Box = styled.div`
  padding: 20px 10px;
  background-image: linear-gradient(
    to right top,
    #ffffff,
    #f1f1f2,
    #e3e3e4,
    #d5d5d7,
    #c7c8ca,
    #bdc0c4,
    #b3b8bd,
    #a8b1b6,
    #9dadb2,
    #92a9ad,
    #87a5a7,
    #7da19e
  );
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
  /* background: red; */
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
  color: #fff;
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
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
