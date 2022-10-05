export default function Count({ count }) {
  return (
    <div
      className={`${
        count > 21 ? 'bg-red-400' : 'bg-green-400'
      } mb-4 rounded-lg shadow-md`}
    >
      <h1 className="py-2 text-center text-8xl font-semibold opacity-70">
        {count}
      </h1>
    </div>
  );
}
