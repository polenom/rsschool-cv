const player = document.querySelector(".video_fraim");
const buttonPlayCenter = player.querySelector(".button_play");
const video = player.querySelector(".video_player");
const buttonPlayPanel = player.querySelector(".panel_button_play");
const curTimeVideo = player.querySelector(".panel_cur_time");
const fullTimeVideo = player.querySelector(".panel_duration_time");
const videoTimerRange = player.querySelector('.progress-video_range');
const soundIcon = player.querySelector(".panel_volume");
const soundIconRange = player.querySelector(".range-volume_range");
function creatTime(timeInSek) {
    let min = Math.trunc(timeInSek/60)<10? '0'+Math.trunc(timeInSek/60):Math.trunc(timeInSek/60);
    let sec = timeInSek%60 < 10? '0'+Math.trunc(timeInSek%60):Math.trunc(timeInSek%60);
    return `${min}:${sec}`;
}
function playVideo() {
    
    if (video.paused) {
        video.play();
        buttonPlayCenter.classList.add('object_hidden');
        buttonPlayPanel.classList.add('panel_button_play_change');
    } else {
        video.pause();
        buttonPlayCenter.classList.remove('object_hidden');
        buttonPlayPanel.classList.remove('panel_button_play_change');
    }
    fullTimeVideo.innerHTML = creatTime(video.duration);
} 
function switc(e) {
    
    video.currentTime =  e.offsetX/videoTimerRange.offsetWidth *video.duration;

}

function soundDisable() {
    if (video.volume == 0) {
        video.volume = 1;
        soundIcon.classList.remove('panel_volume_mute');
    } else {
        video.volume = 0;
        soundIcon.classList.add('panel_volume_mute');
    }
}

function soundVolume(e) {
    let volumeCordina = e.offsetX;
    if (e.offsetX < 0) {
        volumeCordina = 0;
    } else if (e.offsetX > soundIconRange.offsetWidth){
        volumeCordina = soundIconRange.offsetWidth;
    }
    video.volume = Math.trunc(volumeCordina/soundIconRange.offsetWidth*100)/100
    
}

function videoTime() {
    console.log(video.currentTime);
    console.log(video.duration);

}

video.ontimeupdate = function() {
    curTimeVideo.innerHTML = creatTime(video.currentTime);
    videoTimerRange.value = Math.trunc(video.currentTime/video.duration*100) ;
    
};

function windVideo(e) {
    console.log(e.keyCode );
    
    switch (e.keyCode) {
        case 39:
            
            video.currentTime +=10;
            break;
        case 37:
            video.currentTime -=10;
            break;
    }

}

document.addEventListener('keydown', windVideo )

video.addEventListener

buttonPlayCenter.addEventListener('click', playVideo);
buttonPlayPanel.addEventListener('click', playVideo);
video.addEventListener('click',playVideo);
// video.addEventListener('timeupdate', )
let mouse = false;
videoTimerRange.addEventListener('click', switc);
videoTimerRange.addEventListener('mousemove', (e) => mouse&&switc(e));
videoTimerRange.addEventListener('mousedown',()=> mouse = true);
videoTimerRange.addEventListener('mouseup',()=> mouse = false);

soundIcon.addEventListener('click', soundDisable );
soundIconRange.addEventListener('click',soundVolume);
soundIconRange.addEventListener('mousedown',() => mouse = true);
soundIconRange.addEventListener('mouseup',() => mouse = false );
soundIconRange.addEventListener('mousemove', (e) => mouse && soundVolume(e) );
// buttonPlayCenter.addEventListener('')