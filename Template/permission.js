function getpermission() {
  const pro = navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
}

getpermission();
