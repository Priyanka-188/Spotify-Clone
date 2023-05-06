console.log("Welcome to Spotify Clone");

//Initalise the variables
let songindex = 1; //initially first song is played
let audioElement = new Audio("song/1.mp3");
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");


let songs = [
  {
    songName: "Pataka Gudi-Highway",
    filepath: "song/1.mp3",
    coverpath: "covers/cover1.jpg",
  },
  {
    songName: "Mere Nishan h Kaha - OMG",
    filepath: "song/2.mp3",
    coverpath: "covers/cover2.jpg",
  },
  {
    songName: "Whatever It Takes ",
    filepath: "song/3.mp3",
    coverpath: "covers/cover3.jpg",
  },
  {
    songName: "Jeete h Chal - Neerja",
    filepath: "song/4.mp3",
    coverpath: "covers/cover4.jpg",
  },
  {
    songName: "Paniyo Sa - Atif Aslam",
    filepath: "song/5.mp3",
    coverpath: "covers/cover5.jpg",
  },
  {
    songName: "Maa - Neerja",
    filepath: "song/6.mp3",
    coverpath: "covers/cover1.jpg",
  },
  {
    songName: "Pitah hi sb hain - Boss ",
    filepath: "song/7.mp3",
    coverpath: "covers/cover7.jpg",
  },
  {
    songName: "Dilbar - Nora Fetehi",
    filepath: "song/8.mp3",
    coverpath: "covers/cover8.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

// audioElement.play();

//Handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Listen to events
audioElement.addEventListener("timeupdate", () => {
  //Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);

      makeAllPlays();
      songindex = parseInt(e.target.id)+1;
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `song/${songindex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
      masterSongName.innerText = songs[songindex-1].songName;
    });
  }
  );

document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 8) {
    songindex = 1;
  } else {
    songindex += 1;
  }
  audioElement.src = `song/${songindex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  masterSongName.innerText = songs[songindex-1].songName;
  
});

document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 1) {
    songindex = 8;
  } else {
    songindex -= 1;
  }
  audioElement.src = `song/${songindex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  masterSongName.innerText = songs[songindex-1].songName;
  
});
