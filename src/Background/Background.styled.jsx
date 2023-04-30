import styled from "styled-components";
// import bg1 from "../assets/react.svg";

// prettier-ignore
export const BackgroundImageRandom = styled.div`
  background-image: url("./bg-${(props) => props.randomNumber}.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;
