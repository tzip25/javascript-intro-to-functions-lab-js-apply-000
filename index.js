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