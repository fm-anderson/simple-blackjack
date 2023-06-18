//libraries
import { motion } from 'framer-motion';

export default function Count({ count }) {
  return (
    <>
      {count === 21 ? (
        <motion.div
          className="mb-4 rounded-lg bg-green-400 shadow-md"
          animate={{
            scale: [1, 2, 2, 2, 1],
            rotate: [0, 360],
            transition: { duration: 0.8 },
          }}
        >
          <h1 className="py-2 text-center text-6xl font-semibold opacity-70">
            {count}
          </h1>
        </motion.div>
      ) : (
        <div
          className={`${
            count > 21 ? 'bg-red-400' : 'bg-stone-200'
          } mb-4 rounded-lg shadow-md`}
        >
          <h1 className="py-2 text-center text-6xl font-semibold opacity-70">
            {count}
          </h1>
        </div>
      )}
    </>
  );
}
