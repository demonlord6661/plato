let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}

function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2*1000, 'For the most of Summer it was really bland sleep wake up go to work and so on but what i found fun was the free time it generated over the summer time was like an infinte loop coding error and it was refreshing to have time to myself however short lived it was.');
}

var img = document.createElement('img');
img.src = 'img/grass-backyard.png';

var div = document.getElementById('x');
div.appendChild(img);