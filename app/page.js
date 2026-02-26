"use client";
export default function LoveWebsite() {

  const handleNoHover = (e) => {
    const button = e.target;
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    button.style.transform = `translate(${x}px, ${y}px)`;
  };

  const showLoveMessage = () => {
    document.getElementById("question-section").style.display = "none";
    document.getElementById("love-section").style.display = "block";

    const music = document.getElementById("bg-music");
    if (music) music.play();
  };

  return (
    <div style={{textAlign:"center",padding:"40px"}}>

      <audio id="bg-music" loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <div id="question-section">
        <h1>Harshita ❤️</h1>
        <h2>Will you go on a Date with me?</h2>

        <button onClick={showLoveMessage}>
          Yes 💖
        </button>

        <button onMouseEnter={handleNoHover}>
          Nahi 😜
        </button>
      </div>

      <div id="love-section" style={{display:"none"}}>
        <h1>I Love You ❤️</h1>
        <h3>— Shashank</h3>

        <img src="/photo1.jpg" width="250"/>
        <img src="/photo2.jpg" width="250"/>
        <img src="/photo3.jpg" width="250"/>
        <img src="/photo4.jpg" width="250"/>

      </div>

    </div>
  );
}
