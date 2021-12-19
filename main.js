Webcam.set({
    width: 350px,
    height: 350px,
    image_format: 'png',
    png_quaility: 90
});
 
camera = document.getElementById("camera");

Webcam.attach('#camera');
