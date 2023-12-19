function rotateHands() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var hourHand = document.getElementById("hour");
    var minuteHand = document.getElementById("minute");
    var secondHand = document.getElementById("second");
    var hourRotation = (hours % 12) * 30 + minutes / 2;
    var minuteRotation = minutes * 6;
    var totalSeconds = minutes * 60 + seconds;
    var secondRotation = (totalSeconds % 60) * 6;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  
    if (seconds === 0) {
      secondHand.style.transition = 'none';
      secondHand.style.transform = 'rotate(0deg)';
      setTimeout(() => {
        secondHand.style.transition = 'all 0.5s ease-in-out';
      }, 100);
    }
  
    requestAnimationFrame(rotateHands);
  }
  
  rotateHands();
  