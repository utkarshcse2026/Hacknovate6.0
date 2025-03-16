import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import musicFile from "/hp2.mp3";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Create audio instance
    const audioElement = new Audio(musicFile);
    audioElement.loop = true;
    setAudio(audioElement);

    // Try to play on first user interaction
    const playAudio = () => {
      audioElement.play().catch((error) => console.log("Autoplay blocked:", error));
      document.removeEventListener("click", playAudio);
    };

    document.addEventListener("click", playAudio);

    // Cleanup function
    return () => {
      document.removeEventListener("click", playAudio);
      audioElement.pause();
      audioElement.src = "";
    };
  }, []);

  // Handle mute toggle
  const toggleMute = () => {
    if (audio) {
      if (isMuted) {
        audio.volume = 1;
      } else {
        audio.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <button 
      onClick={toggleMute}
      className="fixed bottom-8 left-4 p-2 bg-white bg-opacity-80 rounded-full shadow-md hover:bg-opacity-100 transition-all z-50"
      aria-label={isMuted ? "Unmute music" : "Mute music"}
    >
      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </button>
  );
};

export default BackgroundMusic;