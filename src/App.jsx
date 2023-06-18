// hooks
import useAxios from 'axios-hooks';

// components
import Navbar from './components/Navbar';
import Game from './components/Game';

function App() {
  const [{ data, loading, error }] = useAxios(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const deckId = data.deck_id;

  return (
    <>
      <Navbar />
      <main className="grid min-h-full place-items-center bg-gradient-to-b from-slate-300 to-slate-100 text-slate-900 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
        <Game deckId={deckId} />
      </main>
    </>
  );
}

export default App;
