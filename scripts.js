let stickynote = document.getElementById('popup');
let exit = document.getElementById('exit');

exit.addEventListener('click', () => {
  stickynote.style.display="none";
});

// Drawing Board ⭐💗🌈

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 200;
    canvas.height = 200;
    canvas.style.backgroundColor = "white";
    canvas.style.borderRadius = "5px";

    let painting = false;

    function startPosition(){
        painting = true;
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {

    
        if(!painting) return;

        const rect = canvas.getBoundingClientRect();
        const color = document.getElementById("")
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;


        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#ff91ce"; 

       
        ctx.lineTo(x,y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x,y);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});


// Audio ⭐💗🌈

  const audioIcon = document.querySelector('.audio-icon');
    const audioPlayer = document.querySelector('.audio-player');

    audioIcon.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            audioPlayer.style.display = 'none';
        } else {
            audioPlayer.pause();
            audioPlayer.style.display = 'none';
        }
    });
