import './App.styled.jsx';
import React, { useState } from 'react';
import { Container, Title, TitleStat, StyleNoStats } from './App.styled';
import { Buttons } from '../Buttons/Buttons.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allButtons = [
    ['good', () => setGood(state => state + 1)],
    ['neutral', () => setNeutral(state => state + 1)],
    ['bad', () => setBad(state => state + 1)],
  ];

  const totalFeddbacks = good + neutral + bad;
  const positiveAverage = ((good + 0.001) / (totalFeddbacks + 0.001)) * 100;
  const statData = {
    ...{ good, neutral, bad },
    ...{ total: totalFeddbacks, positive: positiveAverage },
  };

  return (
    <Container>
      <Title>Plaese leave feedback</Title>
      <Buttons buttons={allButtons}></Buttons>
      <TitleStat value={positiveAverage} total={totalFeddbacks}>
        Statstics:
        {totalFeddbacks !== 0 ? (
          <Statistics data={statData}></Statistics>
        ) : (
          <StyleNoStats>No feedback given</StyleNoStats>
        )}
      </TitleStat>
    </Container>
  );
};

export default App;
