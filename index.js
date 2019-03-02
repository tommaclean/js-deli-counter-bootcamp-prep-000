var i = 0
var ticketNum = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  i++;
  ticketNum.push(i);
  return(`Welcome, ${name}. You are ticket number ${i}`);
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!";
    } else 
    return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  let i = 0;
  var line = [];
  while (i < katzDeliLine.length) {
    line.push(` ` + [i + 1] + `. ` + katzDeliLine[i]);
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return `The line is currently:${line}`;
}

