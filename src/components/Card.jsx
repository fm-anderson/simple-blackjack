import React from 'react';

//assets
import cardBack from '../assets/cardBack.png?url';

//libraries
import { motion } from 'framer-motion';

export default function Card({ count, currentCard, allCards }) {
  return (
    <>
      <div
        className={`${
          count === 21 ? 'bg-green-200' : 'bg-stone-200'
        } rounded-lg px-12 py-12 text-gray-400 shadow-md`}
      >
        {currentCard ? (
          <motion.img
            src={currentCard.cards[0].image}
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        ) : (
          <motion.img
            src={cardBack}
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        )}
      </div>
      <motion.div
        transition={{
          delay: 0.8,
          x: { duration: 1 },
          default: { ease: 'linear' },
        }}
        className={`${
          count === 21 ? 'bg-green-200' : 'bg-stone-200'
        } container my-4 flex items-center justify-evenly rounded-lg px-3 py-2 text-gray-400 shadow-md`}
      >
        {allCards.length === 0 ? (
          <motion.img
            src={cardBack}
            width="50"
            height="10"
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        ) : (
          <></>
        )}

        {allCards.map((card) => (
          <motion.img
            key={card}
            src={card}
            width="50"
            height="10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.5, transition: { duration: 0.3 } }}
          />
        ))}
      </motion.div>
    </>
  );
}
