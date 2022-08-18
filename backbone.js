let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}
//sun button main body
function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2*1000, 'For the most of Summer it was really bland, sleep wake up go to work and so on but what i found fun was the free time it generated over the summer time was like an infinite loop coding error and it was refreshing to have time to myself.');
}
//code under here is for the fade in of the boxes and time control
let elementsArray = document.querySelectorAll(".tile");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn);
function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeIn();
