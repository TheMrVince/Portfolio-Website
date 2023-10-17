console.log("Script loaded"); // Check if the script is loaded



let musicPlayer = document.querySelector(".music_player_container");
let trackName = document.querySelector(".track_name");
let prevBtn = document.querySelector(".previous_track");
let playPauseBtn = document.querySelector(".play_pause");
let nextBtn = document.querySelector(".next_track")

let trackIndex = 0
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");

let trackList = [
    {
        name: "001 - Title",
        path: "trackList/001 - Title.mp3",
    },
    {
        name: "003 - Lost At A Sleepover",
        path: "trackList/003 - Lost At A Sleepover.mp3",
    },
    {
        name: "005 - By Your Side",
        path: "trackList/005 - By Your Side..mp3",
    },
    {
        name: "006 - Let's Get Together Now!",
        path: "trackList/006 - Let's Get Together Now!.mp3",
    },
    {
        name: "172 - DUET",
        path: "trackList/172 - DUET.mp3",
    },
];

function loadTrack(trackIndex){
    currentTrack.src = trackList[trackIndex].path;
    currentTrack.load()
    trackName.textContent = trackList[trackIndex].name;
    currentTrack.addEventListener("ended", nextTrack);
}

loadTrack(trackIndex);
window.scrollTo(0,0); 

function playPauseTrack(){
    if(!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack(){
    currentTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

function pauseTrack(){
    currentTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

function nextTrack(){
    if (trackIndex < trackList.length - 1) trackIndex += 1;
    else trackIndex = 0;
    loadTrack(trackIndex);
    playTrack();
}

function prevTrack(){
    if (trackIndex > 0) trackIndex -= 1;
    else trackIndex = trackList.length - 1;
    loadTrack(trackIndex);
    playTrack();
}

playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

console.log("Event listeners added"); // Check if the event listeners are added

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".left_side_container");
    const lightBulb = document.querySelector(".lightbulb");
    const whiteSpace = document.querySelector(".whiteSpace");
    // Add the 'active' class to slide in the container
    setTimeout(() => {
        lightBulb.classList.add("active");
        
    }, 1000); // You can adjust the delay to control when the slide-in occurs

    setTimeout(() => {
        lightBulb.style.transform = "translate(-100px, -400px)";
        container.classList.add("active");
    }, 2500); // You can adjust the delay to control when the slide-in occurs

    setTimeout(() => {
        lightBulb.style.transform = "translate(0px, -400px)";
    }, 4500); // You can adjust the delay to control when the slide-in occurs

    setTimeout(() => {
        lightBulb.style.transform = "translate(0px, -400px)";
    }, 4500); // You can adjust the delay to control when the slide-in occurs

    setTimeout(() => {
        whiteSpace.classList.add("active");
    }, 7000); // You can adjust the delay to control when the slide-in occurs

});