const video = document.querySelector("#video");
const btn = document.querySelector("#btn");
const canvas = document.querySelector("#canvas");

if(navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({video: true})
  .then(stream => {
    video.srcObject = stream
      })
      .catch(error => {
        console.log("error")
      })


}

btn.addEventListener("click", () => {
const width = video.videoWidth, height = video.videoHeight;
const context = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

context.drawImage(video, 0, 0, width, height);
const imgUrl = canvas.toDataURL("image/png");
document.querySelector("#d1-btn").href = imgUrl;
document.querySelector("#d1-btn").click();
})