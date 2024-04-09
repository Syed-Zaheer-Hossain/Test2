let register = document.getElementById("register");
let cam = document.getElementById("cam");
let closed = document.getElementById("close");
let selected = document.querySelector('#dropdown');
let text = document.getElementById('text');
let videoElement = document.getElementById('videoElement');
let stream
let intname = document.getElementById('intname');
let predname = document.getElementById('predname');
let datetime = document.getElementById('datetime');
let batch = document.getElementById('batch');

register.addEventListener('click',()=>{
    if(text.value =="" && selected.value == 'sel'){
        alert("Dear Student\nKindly Enter your Name and Select your class");
    }
    else if(text.value ==""){
        alert("Dear Student\nKindly Enter your Name");
    }
    else if(selected.value == 'sel'){
        alert("Dear Student\nKindly Select your class");
    }
    else{
        cam.classList.add('camdisp');
        // Access the camera
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(mediastream) {
            videoElement.srcObject = mediastream;
            stream = mediastream;
        })
        .catch(function(err) {
            console.log('Error accessing camera:', err);
        });

        // Get the current date
        var currentDate = new Date();

        // Get the current time
        var currentTime = currentDate.toLocaleTimeString();

        // Format the date as a string
        var dateString = currentDate.toDateString();

        var dattetime = dateString + "  " + currentTime;

        intname.value = text.value;
        batch.value = selected.value;
        datetime.value = dattetime;
        console.log(dattetime);
    }
})

closed.addEventListener('click', ()=>{
    cam.classList.remove('camdisp');
    selected.value = 'sel';
    text.value = "";
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
})