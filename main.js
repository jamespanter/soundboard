const soundboardContainer = document.getElementById("soundboard-container");
const audioContainer = document.getElementById("audio-container");

let items = [
  {
    title: "Texmex",
    imageFileName: "Texmex-min.png",
    soundFileName: "texmex.wav",
  },
  {
    title: "Cat Dragged In",
    imageFileName: "CatDraggedIn-min.png",
    soundFileName: "lookwhatthecatdraggedin.wav",
  },
  {
    title: "You fucked up",
    imageFileName: "YouFuckedUp-min.png",
    soundFileName: "nowyoufuckedup.wav",
  },
  {
    title: "Loadout Drop",
    imageFileName: "LoadoutDrop-min.png",
    soundFileName: "AtrexxexplainswarzoneAudioExtracted.wav",
  },
  {
    title: "Here We Go",
    imageFileName: "HereWeGo-min.png",
    soundFileName: "aloneherewego.wav",
  },
  {
    title: "You Aight",
    imageFileName: "YouAight-min.png",
    soundFileName: "youaight.wav",
  },
  {
    title: "Snort",
    imageFileName: "Snort-min.png",
    soundFileName: "trexsnort.wav",
  },
  {
    title: "Stutter",
    imageFileName: "Stutter-min.png",
    soundFileName: "stutter.wav",
  },
  {
    title: "Rio Denidrio",
    imageFileName: "RioDenidrio-min.png",
    soundFileName: "riodeniro.wav",
  },
  {
    title: "Mr Baggings",
    imageFileName: "MrBaggins-min.png",
    soundFileName: "mybaggings.wav",
  },
  {
    title: "Not Too Bad",
    imageFileName: "Nottoobad-min.png",
    soundFileName: "Joenottoobad.wav",
  },
  {
    title: "Im Nigel",
    imageFileName: "I'mNigel-min.png",
    soundFileName: "imnigel.wav",
  },
  {
    title: "Hiccup 1",
    imageFileName: "Hiccup1-min.png",
    soundFileName: "hiccup1.wav",
  },
  {
    title: "Hiccup 2",
    imageFileName: "Hiccup2-min.png",
    soundFileName: "hiccup2.wav",
  },
  {
    title: "Hiccup 3",
    imageFileName: "Hiccup3-min.png",
    soundFileName: "hiccup3.wav",
  },
  {
    title: "Fighting With An Elf",
    imageFileName: "Gimly-min.png",
    soundFileName: "fightingwithanelf.wav",
  },
  {
    title: "Coolbeans",
    imageFileName: "CoolBeans-min.png",
    soundFileName: "coolbeans.wav",
  },
  {
    title: "Chose My Ass",
    imageFileName: "ChoseMyAss-min.png",
    soundFileName: "chosemyass.wav",
  },
  {
    title: "Cant Answer Now",
    imageFileName: "Cantanswernow-min.png",
    soundFileName: "cantanswernowsorry.wav",
  },
  {
    title: "Stephen Hawking",
    imageFileName: "StephenHawking-min.png",
    soundFileName: "AstephenhawkingAudioExtracted.wav",
  },
  {
    title: "Profanity",
    imageFileName: "Profanity-min.png",
    soundFileName: "Profanity.wav",
  },
  {
    title: "Fuckin This Girl",
    imageFileName: "Trexx_in_da_club-min.png",
    soundFileName: "FuckinThisGirl.wav",
  },
  {
    title: "2 Already",
    imageFileName: "2already-min.png",
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
