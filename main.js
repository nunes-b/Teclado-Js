// get all keys
const keys = document.querySelectorAll(".key");

//play notes
function playNote(event) {
  //keyCode
  let audioKeyCode = getKeyCode(event);

  //typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  // if key exists
  const cantFoundAnyKey = !key;

  if (cantFoundAnyKey) {
    return;
  }
  // play audio
  addPlayingClass(key);
  playAudio(audioKeyCode);
}
// add playclass css
function addPlayingClass(key) {
  key.classList.add("playing");
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"; // true or false (boolean)
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

//play audio 
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}
// remove class css
function removePlayingClass(event) {
  event.target.classList.remove("playing");
}
//click with mouse
keys.forEach(function (key) {
  key.addEventListener("click", playNote);
  key.addEventListener("transitionend", removePlayingClass);
});

//type keyboard
window.addEventListener("keydown", playNote);
