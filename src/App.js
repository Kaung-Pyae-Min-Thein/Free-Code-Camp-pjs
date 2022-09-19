
import { useState, useEffect } from 'react';
import './App.css';
import { StyledApp } from "./styles";
import { Card } from './components';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [color, setColor] = useState('');
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const random = (targetData) => {
    return Math.floor(Math.random() * targetData.length);
  };

  async function getQuote() {
    try {

      const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const { quotes } = response.data;
      setQuote(quotes[random(quotes)]);
    }
    catch (error) {
      console.log(error);
    }
  }

  const getRandom = () => {
    getQuote();
    const randomColor = colors[random(colors)];
    setColor(randomColor);
  };
  useEffect(() => {
    getRandom();
  }, []);

  return (
    <StyledApp color={color}>
      <Card color={color} quote={quote} getRandom={getRandom} />
    </StyledApp>
  );
}

export default App;
