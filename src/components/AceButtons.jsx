import React from 'react';

export default function AceButtons({ aceAddsOne, aceAddsEleven }) {
  return (
    <div className="my-4 rounded-lg bg-stone-200 p-4 shadow-lg dark:bg-gray-800">
      <div className="h-full w-full text-center">
        <div className="flex h-full flex-col justify-between">
          <div className="flex w-full items-center justify-between gap-4">
            <button
              type="button"
              className="w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
              onClick={aceAddsOne}
            >
              1
            </button>
            <button
              type="button"
              className="w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
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
