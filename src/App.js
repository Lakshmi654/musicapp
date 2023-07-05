 import{useState, useEffect}from 'react'
import Player from "./components/Player";

function App() {

  const [songs] = useState([
    {
      title: "Daiyya Daiyya",
      artist: "Neha Kakkar",
      img_src: "./images/daiyya-daiyya-hunter.jpg",
      src: "./songs/Daiyya Daiyya Hunter.mp3",
    },
    {
      title: "Paan Dukaniya",
      artist: "Kanika Kapoor, Swaroop Khan",
      img_src: "./images/paan-dukaniya-bholaa.jpg",
      src: "./songs/Paan Dukaniya Bholaa 320 Kbps.mp3",
    },
    {
      title: "Nazar Lag Jayegi",
      artist: "Javed Ali, Ravi Basrur",
      img_src: "./images/nazar-lag-jayegi-bholaa.jpg",
      src: "./songs/Nazar Lag Jayegi Bholaa 320 Kbps.mp3",
    },
    {
      title: "Aadha Main Aadhi Vo",
      artist: "B Praak",
      img_src: "./images/aadha-main-aadhi-vo-bholaa-500-500.jpg",
      src: "./songs/Aadha Main Aadhi Vo Bholaa 320 Kbps.mp3",
    },
    {
      title: "Hona Hi Nahi",
      artist: "Saaj Bhatt",
      img_src: "./images/hona-hi-nahi-jannatein.jpg",
      src: "./songs/Hona Hi Nahi Jannatein 320 Kbps.mp3",
    },
    {
      title: "Bairiya",
      artist: "Arijit Singh",
      img_src: "./images/Bairiya-Arijit-Singh-500-500.jpg",
      src: "./songs/Bairiya Arijit Singh 320 Kbps.mp3",
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    }); 
  }, [currentSongIndex, songs.length]);
  return (
    <div >
     <Player 
     currentSongIndex={currentSongIndex}
     setCurrentSongIndex={setCurrentSongIndex}
     nextSongIndex={nextSongIndex}
     songs={songs}
     />
    </div>
  );
}

export default App;
