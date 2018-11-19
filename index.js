function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var spy = string.toUpperCase();
  console.log(spy);
}

function logWhisper(string) {
  var spy = string.toLowerCase();
  console.log(spy);
}

var uppercase = "HELLO!"

function sayHiToGrandma(string) {
  if (string.toUpperCase === uppercase) {
    return `YES INDEED!`;
  } else if (string.toLowerCase === string) {
    return `I can't hear you!`;
  } else {
    return `I love you, too.`;
  }
}