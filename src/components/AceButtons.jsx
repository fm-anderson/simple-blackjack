import React from 'react';

export default function AceButtons({ aceAddsOne, aceAddsEleven }) {
  return (
    <div className="shadow-lg rounded-lg p-4 bg-stone-200 dark:bg-gray-800 my-4">
      <div className="w-full h-full text-center">
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between gap-4 w-full">
            <button
              type="button"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
              onClick={aceAddsOne}
            >
              1
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
              onClick={aceAddsEleven}
            >
              11
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
