
var currKey = null;
var head = document.getElementsByTagName('head')[0];
var INS = document.getElementById('scene');
var CM = document.getElementById('code'); //now just textarea, later the proper CodeMirror instance.

$(window).keydown(function (event) {
    currKey = event.which;
});
$(window).keyup(function (event) {
    currKey = null;
});

loadScript = function (url) {
  var script= document.createElement('script');
  script.type= 'text/javascript';
  script.src= url;
  head.appendChild(script);
};
dropTextTo = function (element, text) {
  const dataTransfer = new DataTransfer;
  dataTransfer.setData('text', text);
  element.dispatchEvent(new DragEvent('drop', { dataTransfer: dataTransfer }));
  $('#right-info').text(text);
};
assignUrl = function (url) {
  location.assign(url);
};
replaceUrl = function (url) {
  location.replace(url);
};
toRepl = function (code, history = true, resp = true) {
  cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null, code, history, resp);
};
appendLinkTo = function (containerID, name, hrefString) {
  let a = document.createElement('a');
  a.textContent = name;
  a.href = hrefString;
  document.getElementById(containerID).appendChild(a);
};
appendToCM = function (text) {
  CM.replaceRange(text, CodeMirror.Pos(CM.lastLine()));
};
fromUrlToCM = function (url) {
  $.get( url , function (data) {
    CM.setValue(data)
  }, 'text');
};

var FS = false;
goFullScore = function (full) {
  if (FS && !full) {
    let style = document.createElement('style');
    style.innerHTML =
      '.grid-container { grid-template-columns: 1fr 1fr;' +
      'grid-template-rows: 51px 1fr 30px 1fr 80px; }' +
      '#app { display: flex; }';
    document.head.appendChild(style);
    FS = false;
  } else {
    let style = document.createElement('style');
    style.innerHTML =
      '.grid-container { grid-template-columns: 0fr 1fr;' +
      'grid-template-rows: 51px 1fr 30px 0fr 80px; }' +
      '#app { display: none; }';
    document.head.appendChild(style);
    FS = true;
  }
  window.dispatchEvent(new Event('resize'));
  window.setTimeout(function(){ window.dispatchEvent(new Event('resize')); }, 500);
};
