const soundboardContainer = document.getElementById("soundboard-container");
const audioContainer = document.getElementById("audio-container");

const items = [
  {
    title: "placeholder1",
    imageFileName: "placeholder1.png",
    soundFileName: "placeholder1.wav",
  },
  {
    title: "placeholder2",
    imageFileName: "placeholder2.png",
    soundFileName: "placeholder2.wav",
  },
  {
    title: "placeholder3",
    imageFileName: "placeholder3.png",
    soundFileName: "placeholder3.wav",
  },
  {
    title: "placeholder4",
    imageFileName: "placeholder4.png",
    soundFileName: "placeholder4.wav",
  },
  {
    title: "placeholder5",
    imageFileName: "placeholder5.jpg",
    soundFileName: "placeholder5.mp3",
  },
  {
    title: "placeholder1",
    imageFileName: "placeholder1.png",
    soundFileName: "placeholder1.wav",
  },
  {
    title: "placeholder2",
    imageFileName: "placeholder2.png",
    soundFileName: "placeholder2.wav",
  },
  {
    title: "placeholder3",
    imageFileName: "placeholder3.png",
    soundFileName: "placeholder3.wav",
  },
  {
    title: "placeholder4",
    imageFileName: "placeholder4.png",
    soundFileName: "placeholder4.wav",
  },
  {
    title: "placeholder5",
    imageFileName: "placeholder5.jpg",
    soundFileName: "placeholder5.mp3",
  },
];

const mapSoundboardItems = () => {
  soundboardContainer.innerHTML = items
    .map((item) => {
      return `<div class="card" id=${item.title}>
      <img src=../assets/${item.imageFileName} class="slide-in-left delay1">
      <div class="card-text" class="slide-in-left">
      <h2 class="slide-in-left delay2" >${item.title}</h2>
      <button onclick=playSound("${item.soundFileName}") class="slide-in-left delay2"><i class="fa fa-play" aria-hidden="true"></i></button> 
      </div></div>`;
    })
    .join("");
};

const playSound = (soundFileName) => {
  stopAudio();
  document.getElementById(soundFileName).play();
};

const mapAudioElements = () => {
  audioContainer.innerHTML = items
    .map((item) => {
      return `<audio id="${
        item.soundFileName
      }" preload="auto"><source src=../assets/${
        item.soundFileName
      } type="audio/${item.soundFileName.slice(-3)}"></audio>`;
    })
    .join("");
};

const stopAudio = () => {
  for (let i = 0; i < items.length; i++) {
    const audioFile = document.getElementById(items[i].soundFileName);
    audioFile.currentTime = 0;
    audioFile.pause();
  }
};

mapSoundboardItems();
mapAudioElements();
