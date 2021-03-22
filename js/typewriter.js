var i = 0;
var j = 0;
var txt = 'Break things, make things, analyze things'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  target = document.getElementById("typewriter");

  var new_speed = speed + 3 * (Math.random() - 0.5);

  if (i < txt.length) {
    target.innerHTML += txt.charAt(i);

    if (txt.charAt(i) == ',') {
      new_speed += 300;
    }

    setTimeout(typeWriter, new_speed);
    console.log(i);
  }
  else if (i == txt.length) {
    document.getElementById("typewriter").innerHTML += ' <span class="blinking">|</span>'
    setTimeout(typeWriter, new_speed);    
  }
  i++;
}

typeWriter()