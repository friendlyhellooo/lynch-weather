import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="flex-grow flex items-center justify-center p-8 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div class="bg-white text-black p-6 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold mb-2">🌪 Tailwind Test</h2>
        <p class="text-lg">If you can see this, Tailwind is working 🎉</p>
      </div>
    </main>
  );
}

export default App;
