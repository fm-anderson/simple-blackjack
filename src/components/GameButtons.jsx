import React from 'react';

// icons
import {
  ArrowDownOnSquareIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/solid';

export default function GameButtons({ count, handleNewCard, handleReload }) {
  return (
    <>
      {count >= 21 ? (
        <span
          className={`mt-4 flex items-center justify-center rounded-lg ${
            count === 21
              ? 'bg-green-200 hover:bg-green-300 text-green-700'
              : 'bg-indigo-200 hover:bg-indigo-300 text-indigo-700'
          }  py-3 text-base shadow-md transition duration-200 ease-in  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200`}
          onClick={handleReload}
        >
          <ArrowPathRoundedSquareIcon className="h-7 w-7" />
        </span>
      ) : (
        <span
          className="mt-4 flex items-center justify-center rounded-lg bg-indigo-600 py-3 text-base text-slate-100 shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
          onClick={handleNewCard}
        >
          <ArrowDownOnSquareIcon className="h-7 w-7" />
        </span>
      )}
    </>
  );
}
