const player = document.querySelector(".video_fraim");
const buttonPlayCenter = player.querySelector(".button_play");
const video = player.querySelector(".video_player");
const buttonPlayPanel = player.querySelector(".panel_button_play");
const curTimeVideo = player.querySelector(".panel_cur_time");
const fullTimeVideo = player.querySelector(".panel_duration_time");

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


function videoTime() {
    console.log(video.currentTime);
    console.log(video.duration);

}

video.ontimeupdate = function() {
    curTimeVideo.innerHTML = creatTime(video.currentTime);
    
    
};

buttonPlayCenter.addEventListener('click', playVideo);
buttonPlayPanel.addEventListener('click', playVideo);
video.addEventListener('click',playVideo);


// buttonPlayCenter.addEventListener('')