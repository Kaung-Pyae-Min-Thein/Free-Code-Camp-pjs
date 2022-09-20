import styled from "styled-components";

export const StyledCard = styled.div`
border-radius: 3px;
width: 450px;
padding: 40px 50px;
display: flex;
flex-direction: column;
background-color: #fff;
color: ${props => props.color || "black"};
`;

