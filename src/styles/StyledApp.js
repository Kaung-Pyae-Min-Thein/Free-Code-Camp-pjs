import styled from "styled-components";

export const StyledApp = styled.div`
font-family: "Raleway", sans-serif;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction: column;
background-color: ${props => props.color || "black"};

footer{
  color: #fff;
  a{
    color: #fff;
  }
}
`;