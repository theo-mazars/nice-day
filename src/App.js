import React from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import { merge, flipInX, bounceInUp, tada } from "react-animations";
import Confetti from "react-dom-confetti";

const Bounce = styled.div`
  animation: 3s ${keyframes`${merge(flipInX, bounceInUp)}`} 1;
`;

const Tada = styled.div`
  animation: 3s ${keyframes`${tada}`} infinite;
`;

const config = {
  angle: 0,
  spread: 360,
  startVelocity: 100,
  elementCount: 35,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 1,
  width: "20px",
  height: "20px",
  perspective: "500px",
  colors: ["#000", "#333", "#666"],
};

const quotes = [
  "Happiness depends upon ourselves",
  "The purpose of our lives is to be happy",
  "Embrace the glorious mess that you are",
  "Being happy never goes out of style",
  "Happiness is the best makeup",
  "The mere sense of living is joy enough",
  "The only thing that will make you happy is being happy with who you are",
  "If you want to be happy, be",
  "Start each day with a grateful heart",
];

function App() {
  const [confetti, setConfetti] = React.useState(false);
  const [quote, setQuote] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setConfetti(!confetti);
    }, 2000);
  }, [confetti]);

  React.useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * (quotes.length - 1))]);
  }, [quote]);

  return (
    <div className="App">
      <Confetti active={confetti} config={config} />
      <Bounce>
        <h1>Have a nice day !</h1>
        {quote && (
          <Tada>
            <h2 style={{ width: "450px" }}>{quote}</h2>
          </Tada>
        )}
      </Bounce>
    </div>
  );
}

export default App;
