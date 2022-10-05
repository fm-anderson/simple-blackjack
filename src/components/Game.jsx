// hooks
import { useState } from 'react';

// components
import Count from './Count';
import Card from './Card';
import AceButtons from './AceButtons';
import GameButtons from './GameButtons';

// libraries
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import JSConfetti from 'js-confetti';
const jsConfetti = new JSConfetti();

export default function GameScreen({ deckId }) {
  const [count, setCount] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [isAce, setIsAce] = useState(false);

  const { isLoading, error, data, refetch } = useQuery(
    ['newCard'],
    () =>
      axios
        .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then((res) => res.data),
    { refetchOnWindowFocus: false }
  );
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  const handleNewCard = async () => {
    await refetch();
    setShowCard(true);
    setCurrentCard(data);
    updateCount(data);
  };

  const updateCount = () => {
    switch (data.cards[0].value) {
      case 'KING':
      case 'QUEEN':
      case 'JACK': {
        setCount((prevCount) => prevCount + 10);
        break;
      }
      case 'ACE': {
        setIsAce(true);
        break;
      }
      default: {
        setCount((prevCount) => prevCount + parseInt(data.cards[0].value));
      }
    }
  };

  const aceAddsOne = () => {
    setCount((prevCount) => prevCount + 1);
    setIsAce(false);
  };

  const aceAddsEleven = () => {
    setCount((prevCount) => prevCount + 11);
    setIsAce(false);
  };

  const checkCount = () => {
    if (count === 21) {
      handleWin();
    }
  };

  const handleWin = async () => {
    await jsConfetti.addConfetti({
      emojis: ['🏆', '🤑', '🎉', '🥇', '💰'],
      emojiSize: 40,
    });
  };

  const handleReload = () => {
    location.reload();
    return false;
  };

  checkCount();

  return (
    <div className='className="justify evenly m-4 flex flex-col place-items-center items-center gap-7 md:flex-row"'>
      <div className="justify evenly flex flex-col md:flex-row">
        <div>
          <Count count={count} />
          <Card count={count} currentCard={currentCard} showCard={showCard} />
          {!isAce && (
            <GameButtons
              count={count}
              handleNewCard={handleNewCard}
              handleReload={handleReload}
            />
          )}

          {isAce && (
            <AceButtons aceAddsOne={aceAddsOne} aceAddsEleven={aceAddsEleven} />
          )}
        </div>
      </div>
    </div>
  );
}
