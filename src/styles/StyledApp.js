import styled from "styled-components";

export const StyledApp = styled.div`
font-family: "Raleway", sans-serif;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: ${props => props.color || "black"};
`;