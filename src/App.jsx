import { useState } from 'react';

function App() {
  const [color, setColor] = useState("white");

  return (
    <div  style={{ backgroundColor: color, transition: "background-color 0.2s ease"  }} className="w-full h-screen">
      <div className="fixed flex flex-wrap justify-center gap-2 p-4 bottom-12 inset-x-0">
        <button onClick={() => setColor("red")} className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg">Red</button>
        <button onClick={() => setColor("green")} className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">Green</button>
        <button onClick={() => setColor("blue")} className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">Blue</button>
        <button onClick={() => setColor("yellow")} className="bg-yellow-500 text-black px-4 py-2 rounded-full shadow-lg">Yellow</button>
        <button onClick={() => setColor("black")} className="bg-black text-white px-4 py-2 rounded-full shadow-lg">Black</button>
        <button onClick={() => setColor("brown")} className="bg-amber-700 text-white px-4 py-2 rounded-full shadow-lg">Brown</button>
        <button onClick={() => setColor("pink")} className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg">Pink</button>
        <button onClick={() => setColor("orange")} className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg">Orange</button>
        <button onClick={() => setColor("purple")} className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg">Purple</button>
        <button onClick={() => setColor("cyan")} className="bg-cyan-500 text-black px-4 py-2 rounded-full shadow-lg">Cyan</button>
        <button onClick={() => setColor("magenta")} className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg">Magenta</button>
        <button onClick={() => setColor("lime")} className="bg-lime-500 text-black px-4 py-2 rounded-full shadow-lg">Lime</button>
        <button onClick={() => setColor("teal")} className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-lg">Teal</button>
        <button onClick={() => setColor("indigo")} className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg">Indigo</button>
        <button onClick={() => setColor("gold")} className="bg-yellow-600 text-black px-4 py-2 rounded-full shadow-lg">Gold</button>
        <button onClick={() => setColor("silver")} className="bg-gray-400 text-black px-4 py-2 rounded-full shadow-lg">Silver</button>
        <button onClick={() => setColor("navy")} className="bg-blue-900 text-white px-4 py-2 rounded-full shadow-lg">Navy</button>
        <button onClick={() => setColor("maroon")} className="bg-red-900 text-white px-4 py-2 rounded-full shadow-lg">Maroon</button>
        <button onClick={() => setColor("olive")} className="bg-olive-500 text-black px-4 py-2 rounded-full shadow-lg">Olive</button>
      </div>
    </div>
  );
}

export default App;
