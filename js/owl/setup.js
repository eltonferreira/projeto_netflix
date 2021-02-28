$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

var video = document.getElementById("video");

function controlAudio() {
    if (video.muted==true) {
        video.muted = false;
        document.getElementById("mute").className = "fas fa-volume-up";
    }
    else {
        video.muted = true;
        document.getElementById("mute").className = "fas fa-volume-mute";
    }
}

function controlPlay() {
    if (video.paused) {
        video.play();
        document.getElementById("pause-play").className = "fas fa-pause";
    }
    else {
        video.pause();
        document.getElementById("pause-play").className = "fas fa-play";
    }
}