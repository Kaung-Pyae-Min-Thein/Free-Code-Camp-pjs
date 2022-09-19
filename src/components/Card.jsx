import { StyledCard, StyledQuote, StyledButtons } from "../styles";
import { FaQuoteLeft, FaQuoteRight, FaTwitter, FaFacebookF } from "react-icons/fa";

export const Card = ({ quote, color, getRandom }) => {
  return (
    <StyledCard color={color} id="quote-box">

      <StyledQuote>
        <h1 id="text"><FaQuoteLeft />{quote.quote} <FaQuoteRight /></h1>
        <h2 id="author">- {quote.author}</h2>
      </StyledQuote>

      <StyledButtons color={color}>
        <a target="_top" href="https:\\twitter.com/intent/tweet" title="Tweet this quote!" id="tweet-quote">
          <FaTwitter />
        </a>

        <a href="https:\\facebook.com">
          <FaFacebookF />
        </a>

        <button id="new-quote" onClick={() => getRandom()}>New Quote</button>

      </StyledButtons>
      
    </StyledCard>
  );


};