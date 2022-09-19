import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;


  button, a{
    height: 38px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: ${props => props.color || "black"};
    font-size: 0.85em;
    padding: 8px 18px 6px 18px;
    cursor: pointer;
    :hover{
      opacity: 0.9;
    }  
  }
  button{
    margin-left: auto;
  }
  a{
    font-size: 1.2em;
    padding: 0;
    padding-top: 8px;
    font-size: 1.2em;
    height: 30px;
    width: 40px;
    margin-right: 5px;
    text-align: center;
  }
`;