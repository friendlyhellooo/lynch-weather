import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="min-h-screen flex items-center justify-center">
      <div
        class="w-[400px] h-[300px] flex flex-col justify-between bg-cover bg-center text-white font-sans p-4 rounded shadow-lg"
        style={{ "background-image": "url('/david-lynch-bg.png')" }}
      >
        {/* 🔝 Top Section */}
        <div>
          {/* Top Row */}
          <div class="flex justify-end mb-2">
            <div class="flex flex-col items-end gap-1">
              <div class="bg-white/20 p-2 rounded">Los Angeles, CA</div>
              <div class="bg-white/20 p-2 rounded">Thursday, May 1st 2025</div>
            </div>
          </div>

          {/* Middle Row */}
          <div class="flex justify-end gap-2">
            <div class="bg-white/20 p-2 rounded">Image 1</div>
            <div class="bg-white/20 p-2 rounded">Image 2</div>
          </div>
        </div>

        {/* 🔚 Bottom Row */}
        <div class="flex justify-between">
          <div class="bg-white/20 p-2 rounded">Bottom Left</div>
          <div class="bg-white/20 p-2 rounded">Bottom Right</div>
        </div>
      </div>
    </div>
  );
}

export default App;
