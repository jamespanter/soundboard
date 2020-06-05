const soundboardContainer = document.getElementById("soundboard-container");
const audioContainer = document.getElementById("audio-container");

let items = [
  {
    title: "Texmex",
    imageFileName: "placeholder3.png",
    soundFileName: "texmex.wav",
  },
  {
    title: "Cat Dragged In",
    imageFileName: "placeholder4.png",
    soundFileName: "lookwhatthecatdraggedin.wav",
  },
  {
    title: "You fucked up",
    imageFileName: "placeholder2.png",
    soundFileName: "nowyoufuckedup.wav",
  },
  {
    title: "Trex Warzone",
    imageFileName: "placeholder4.png",
    soundFileName: "AtrexxexplainswarzoneAudioExtracted.wav",
  },
  {
    title: "Here We Go",
    imageFileName: "placeholder1.png",
    soundFileName: "aloneherewego.wav",
  },
  {
    title: "You Aight",
    imageFileName: "placeholder1.png",
    soundFileName: "youaight.wav",
  },
  {
    title: "Trex Snort",
    imageFileName: "placeholder2.png",
    soundFileName: "trexsnort.wav",
  },
  {
    title: "Stutter",
    imageFileName: "placeholder4.png",
    soundFileName: "stutter.wav",
  },
  {
    title: "Side By Side",
    imageFileName: "placeholder5.png",
    soundFileName: "sidebysidewithanelf.wav",
  },
  {
    title: "Riodenidrio",
    imageFileName: "placeholder1.png",
    soundFileName: "riodeniro.wav",
  },
  {
    title: "My baggings",
    imageFileName: "placeholder3.png",
    soundFileName: "mybaggings.wav",
  },
  {
    title: "Not Too Bad",
    imageFileName: "placeholder5.png",
    soundFileName: "Joenottoobad.wav",
  },
  {
    title: "Im Nigel",
    imageFileName: "placeholder1.png",
    soundFileName: "imnigel.wav",
  },
  {
    title: "Hiccup 1",
    imageFileName: "placeholder4.png",
    soundFileName: "hiccup1.wav",
  },
  {
    title: "Hiccup 2",
    imageFileName: "placeholder3.png",
    soundFileName: "hiccup2.wav",
  },
  {
    title: "Hiccup 3",
    imageFileName: "placeholder2.png",
    soundFileName: "hiccup3.wav",
  },
  {
    title: "Fighting An Elf",
    imageFileName: "placeholder5.png",
    soundFileName: "fightingwithanelf.wav",
  },
  {
    title: "Coolbeans",
    imageFileName: "placeholder1.png",
    soundFileName: "coolbeans.wav",
  },
  {
    title: "Chose My Ass",
    imageFileName: "placeholder2.png",
    soundFileName: "chosemyass.wav",
  },
  {
    title: "Cant Answer Now",
    imageFileName: "placeholder3.png",
    soundFileName: "cantanswernowsorry.wav",
  },
  {
    title: "Stephen Hawking",
    imageFileName: "placeholder5.png",
    soundFileName: "AstephenhawkingAudioExtracted.wav",
  },
  {
    title: "2 Already",
    imageFileName: "placeholder2.png",
    soundFileName: "2already.wav",
  },
];

const mapSoundboardItems = () => {
  soundboardContainer.innerHTML = items
    .map((item) => {
      return `<div class="card">
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
      }" preload="none"><source src=../assets/${
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
