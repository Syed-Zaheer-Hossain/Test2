let closed = document.getElementById('closed')
let videoElement = document.getElementById('videoElement');
let stream

// console.log(document.getElementById('closed'))

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
.then(function(mediastream) {
    videoElement.srcObject = mediastream;
    stream = mediastream;
})
.catch(function(err) {
    console.log('Error accessing camera:', err);
});


// console.log(closed)

closed.addEventListener('click',()=>{
    // console.log("called close")
    if (stream) {
        // Stop the stream
        var tracks = stream.getTracks();
        tracks.forEach(function(track) {
            track.stop();
        });

        // Clear the srcObject to stop the video
        videoElement.srcObject = null;
        // videoElement.style.display= 'none';

    }
    // navigator.mediaDevices.getUserMedia({ video : true})
    // .then(()=>{
    //     videoElement.srcObject = null;
    //     navigator.mediaDevices.getUserMedia({video : false});
    // })
    // .catch(function(err) {
    //     console.log('error closing camera',err);
    // })
})