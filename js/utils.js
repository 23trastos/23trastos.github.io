var gFS = false;
var head = document.getElementsByTagName('head')[0];
var INS = document.getElementById('scene');
var CM = document.getElementById('code'); //now just textarea, later the proper CodeMirror instance.
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
};
assignUrl = function (url) {
  location.assign(url);
};
replaceUrl = function (url) {
  location.replace(url);
};
toRepl = function (code, history, resp) {
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
