import React from 'react';
import { Transition } from '@headlessui/react';
import cardBack from '../assets/cardBack.png?url';

export default function Card({ count, currentCard, showCard }) {
  return (
    <div
      className={`${
        count === 21 ? 'bg-green-200' : 'bg-stone-200'
      } rounded-lg px-12 py-12 text-gray-400 shadow-md`}
    >
      {currentCard ? (
        <Transition
          show={showCard}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img
            src={currentCard.cards[0].image}
            className="rounded-lg shadow-lg"
          />
        </Transition>
      ) : (
        <Transition
          show={!showCard}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img src={cardBack} className="rounded-lg shadow-lg" />
        </Transition>
      )}
    </div>
  );
}
