$('#habitude').on('click', function() {
  window.open('https://habitudeapp.herokuapp.com/', '_blank')
});

$('#note').on('click', function() {
  window.open('https://infonotebook.herokuapp.com/', '_blank')
});

$('#burger').on('click', function() {
    window.open('https://burgeryummy.herokuapp.com/burgers', '_blank')
});

$('#note').on('click', function() {
    window.open('https://infonotebook.herokuapp.com/', '_blank')
});

$('#book').on('click', function() {
    window.open('https://marimartin.github.io/Book-Market/index.html','_blank')
});

$('#weather').on('click', function() {
    window.open('https://bbeyenene.github.io/Weather-Forcast/waz-app.html', '_blank')
});

$('#pass').on('click', function() {
    window.open('https://bbeyenene.github.io/Passwor-generator/password.html', '_blank')
});

$('#work-day').on('click', function() {
    window.open('https://bbeyenene.github.io/Work-Day-Scheduler/', '_blank')
});

$('#quiz').on('click', function() {
    window.open('https://bbeyenene.github.io/Code-Quize/', '_blank')
});
$('#team').on('click', function() {
    window.open('https://bbeyenene.github.io/Employee-Information-Template-Engine/output/team.html', '_blank')
});

var date = moment().format('YYYY');
$("#momentjs").text(date)
console.log(date)


dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}