import styled from "styled-components";



export const StyledQuote = styled.div`
  width: 450px;
  svg{
    margin-right: 0.4em;
    :last-child{
      margin-left: 0.4em;
      margin-right: 0;
    }
  }
  #text{
    font-weight: 500;
    font-size: 1.75em;
    text-align: center;
    
  }
  #author{
    font-size: 1em;
    padding-top: 20px;
    text-align: right;
    font-weight: 400;
  }
`;