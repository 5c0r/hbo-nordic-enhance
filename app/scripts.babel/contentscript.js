"use strict";

document.body.addEventListener("keydown", ev => {
  // console.log("keydown", ev);

  const thatCode = ev.keyCode || ev.which;
  const videoElement = document.getElementById(
    "vjs_video_1_Clpp_html5_mse_api"
  );

  // TODO: Duration can be customized
  // TODO: Worst code ever written ! Booohooo

  // Space
  if (thatCode == 32) {
    videoElement.paused ? videoElement.play() : videoElement.pause();
  }

  // Bach
  if (thatCode == 37) {
    // Or until the HBO logo
    const newTime =
      videoElement.currentTime - 10.0 <= 0.0
        ? 0.0
        : videoElement.currentTime - 10.0;
    videoElement.currentTime = newTime;
  }

  // Forward
  if (thatCode == 39) {
    // Or until the HBO logo
    const newTime =
      videoElement.currentTime + 10 >= videoElement.duration
        ? videoElement.duration
        : videoElement.currentTime + 10;

    videoElement.currentTime = newTime;
  }

  // Up
  if (thatCode == 38) {
    videoElement.volume + 0.15 >= 1.0
      ? (videoElement.volume = 1.0)
      : (videoElement.volume += 0.15);
  }

  // Down
  if (thatCode == 40) {
    videoElement.volume - 0.15 <= 0.0
      ? (videoElement.volume = 0.0)
      : (videoElement.volume -= 0.15);
  }

  if (thatCode == 77) {
    videoElement.muted
      ? (videoElement.muted = false)
      : (videoElement.muted = true);
  }
});
