let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}

function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2*1000, 'So you know all did was go to work over the summer and do things like work and sleep and code here and there nothing mind breaking but if you really needed to know here it is just your everyday life at work moment im real chill about it.');
}