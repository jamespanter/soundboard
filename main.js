const soundboardContainer = document.getElementById("soundboard-container");
const audioContainer = document.getElementById("audio-container");

let items = [
  {
    title: "Texmex",
    imageFileName: "Texmex.png",
    soundFileName: "texmex.wav",
  },
  {
    title: "Cat Dragged In",
    imageFileName: "CatDraggedIn.png",
    soundFileName: "lookwhatthecatdraggedin.wav",
  },
  {
    title: "You fucked up",
    imageFileName: "YouFuckedUp.png",
    soundFileName: "nowyoufuckedup.wav",
  },
  {
    title: "Loadout Drop",
    imageFileName: "LoadoutDrop.png",
    soundFileName: "AtrexxexplainswarzoneAudioExtracted.wav",
  },
  {
    title: "Here We Go",
    imageFileName: "HereWeGo.png",
    soundFileName: "aloneherewego.wav",
  },
  {
    title: "You Aight",
    imageFileName: "YouAight.png",
    soundFileName: "youaight.wav",
  },
  {
    title: "Snort",
    imageFileName: "Snort.png",
    soundFileName: "trexsnort.wav",
  },
  {
    title: "Stutter",
    imageFileName: "Stutter.png",
    soundFileName: "stutter.wav",
  },
  {
    title: "Rio Denidrio",
    imageFileName: "RioDenidrio.png",
    soundFileName: "riodeniro.wav",
  },
  {
    title: "Mr Baggings",
    imageFileName: "MrBaggins.png",
    soundFileName: "mybaggings.wav",
  },
  {
    title: "Not Too Bad",
    imageFileName: "Nottoobad.png",
    soundFileName: "Joenottoobad.wav",
  },
  {
    title: "Im Nigel",
    imageFileName: "I'mNigel.png",
    soundFileName: "imnigel.wav",
  },
  {
    title: "Hiccup 1",
    imageFileName: "Hiccup1.png",
    soundFileName: "hiccup1.wav",
  },
  {
    title: "Hiccup 2",
    imageFileName: "Hiccup2.png",
    soundFileName: "hiccup2.wav",
  },
  {
    title: "Hiccup 3",
    imageFileName: "Hiccup3.png",
    soundFileName: "hiccup3.wav",
  },
  {
    title: "Fighting With An Elf",
    imageFileName: "Gimly.png",
    soundFileName: "fightingwithanelf.wav",
  },
  {
    title: "Coolbeans",
    imageFileName: "CoolBeans.png",
    soundFileName: "coolbeans.wav",
  },
  {
    title: "Chose My Ass",
    imageFileName: "ChoseMyAss.png",
    soundFileName: "chosemyass.wav",
  },
  {
    title: "Cant Answer Now",
    imageFileName: "Cantanswernow.png",
    soundFileName: "cantanswernowsorry.wav",
  },
  {
    title: "Stephen Hawking",
    imageFileName: "StephenHawking.png",
    soundFileName: "AstephenhawkingAudioExtracted.wav",
  },
  {
    title: "Profanity",
    imageFileName: "Profanity.png",
    soundFileName: "Profanity.wav",
  },
  {
    title: "Fuckin This Girl",
    imageFileName: "Trexx_in_da_club.png",
    soundFileName: "FuckinThisGirl.wav",
  },
  {
    title: "2 Already",
    imageFileName: "2already.png",
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
