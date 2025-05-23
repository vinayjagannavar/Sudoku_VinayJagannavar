import Sudoku from "./components/Sudoku";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6">Sudoku Game</h1>
      <div className="w-[min(95vw,500px)]">
        <Sudoku />
      </div>
    </div>
  );
}

export default App;
