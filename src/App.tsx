import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div
      class="min-h-screen bg-cover bg-center text-white font-sans p-6"
      style={{ "background-image": "url('david-lynch-bg.png')" }}
    >
      {/* TOP ROW */}
      <div class="flex justify-end mb-4">
        <div class="flex flex-col gap-2 items-end">
          <div class="bg-white/20 p-2 rounded">Los Angeles, CA</div>
          <div class="bg-white/20 p-2 rounded">Thursday, May 1st 2025</div>
        </div>
      </div>

      {/* MIDDLE ROW */}
      <div class="flex justify-end gap-4 mb-4">
        <div class="bg-white/20 p-2 rounded">Image 1</div>
        <div class="bg-white/20 p-2 rounded">Image 1</div>
      </div>

      {/* BOTTOM ROW */}
      <div class="flex justify-between items-end">
        <div class="bg-white/20 p-2 rounded">Image 1</div>
        <div class="bg-white/20 p-2 rounded">
          Lorem ipsum sans si dolor, abracadrabra abracadabra
        </div>
      </div>
    </div>
  );
}

export default App;
