export default function LoveWebsite() { const handleNoHover = (e) => { const button = e.target; const x = Math.random() * 300 - 150; const y = Math.random() * 200 - 100; button.style.transform = translate(${x}px, ${y}px); };

const showLoveMessage = () => { document.getElementById("question-section").style.display = "none"; document.getElementById("love-section").style.display = "block";

const music = document.getElementById("bg-music");
if (music) music.play();

};

return ( <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center p-6"> {/* BACKGROUND MUSIC /} <audio id="bg-music" loop> {/ Replace with your romantic song in public folder */} <source src="/music.mp3" type="audio/mpeg" /> </audio>

{/* QUESTION SECTION */}
  <div id="question-section" className="space-y-6">
    <h1 className="text-4xl font-bold text-pink-600">
      Harshita ❤️
    </h1>

    <p className="text-2xl text-gray-700">
      Will you go on a Date with me?
    </p>

    <div className="flex gap-6 justify-center">
      <button
        onClick={showLoveMessage}
        className="bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
      >
        Yes 💖
      </button>

      <button
        onMouseEnter={handleNoHover}
        className="bg-gray-400 text-white px-6 py-3 rounded-2xl shadow-lg transition"
      >
        Nahi 😜
      </button>
    </div>
  </div>

  {/* LOVE REVEAL SECTION */}
  <div id="love-section" style={{ display: "none" }} className="space-y-8">
    <h2 className="text-4xl font-bold text-pink-700">
      I Love You ❤️
    </h2>

    <p className="text-lg text-gray-700">
      — Shashank
    </p>

    {/* PHOTO GALLERY */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <img src="/photo1.jpg" className="rounded-2xl shadow-lg" />
      <img src="/photo2.jpg" className="rounded-2xl shadow-lg" />
      <img src="/photo3.jpg" className="rounded-2xl shadow-lg" />
      <img src="/photo4.jpg" className="rounded-2xl shadow-lg" />
    </div>

    <p className="text-xl text-pink-600 font-semibold mt-6">
      Every moment with you feels special ✨
    </p>
  </div>
</div>

); }
