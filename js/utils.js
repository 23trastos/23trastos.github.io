document.write('<script src="js/compiled/out/cljsjs/codemirror/development/codemirror.inc.js"></script>');
document.write('<script src="js/compiled/out/cljsjs/codemirror/common/addon/search/searchcursor.inc.js"></script>');
document.write('<script src="js/compiled/out/cljsjs/codemirror/common/mode/clojure.inc.js"></script>');
document.write('<script src="js/compiled/out/cljsjs/tonejs/development/Tone.inc.js"></script>');

var currKey = null;
var head = document.getElementsByTagName('head')[0];
var INS = document.getElementById('scene');
var CM = document.getElementById('code'); //now just textarea, later the proper CodeMirror instance.
var tempo = 0;
var logINS = [];
var cmDocs = [];

$(window).keydown(function (event) {
  currKey = event.which;
});
$(window).keyup(function (event) {
  currKey = null;
});
$('.close').click(function (event) {
  event.target.parentNode.parentNode.style.display = 'none';
});

loadScript = function (url) {
  var script= document.createElement('script');
  script.type= 'text/javascript';
  script.src= url;
  head.appendChild(script);
};

addInfo = function (text, color) {
  if (text.substring(0,1) == '/') {
    logINS.push(text);
  }
  var d = $('#info');
  var p = $('<p></p>').css('color', color).text('-> ' + text);
  d.append(p);
  d.scrollTop(d.prop('scrollHeight'));
};

displayDiv = function (id, show) {
  if (show) {
    $('#' + id).css('display','block');
  } else {
    $('#' + id).css('display','none');
  }
};

dropTextTo = function (element, text) {
  //addInfo(text, 'olive');
  logINS = [];
  const dataTransfer = new DataTransfer;
  dataTransfer.setData('text', text);
  element.dispatchEvent(new DragEvent('drop', { dataTransfer: dataTransfer }));
  return logINS;
};

loadInscore = function (script) {
  logINS = [];
  inscore.loadInscore(script);
  return logINS;
};

loadInscore2 = function (script) {
  logINS = [];
  inscore.loadInscore2(script);
  return logINS;
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
updateDocs = function(docObj) {
  if (docObj != null) {
    cmDocs.push(docObj);
    CM.swapDoc(docObj.doc);
  }
  else if (cmDocs.length > 0) {
    CM.swapDoc(cmDocs[0].doc);
  }
  else {
    CM.setValue('');
  }
  $('.tabs').empty();
  cmDocs.forEach((elm, index) => {
    $('.tabs').append(
      $('<div>').append($('<a>').attr('href','#swap').text(elm.name + ' ').click(function(){CM.swapDoc(elm.doc);}).append(
        $('<i>').attr('class','material-icons').text('clear').click(function(){cmDocs.splice(index,1);updateDocs();})
      ))
    );
  });
};
fromStringToCM = function (name, string, callback) {
  var newDoc = CodeMirror.Doc(string, 'clojure');
  updateDocs({name: name, doc: newDoc});
  if (typeof callback === 'function') {
    callback();
  }
};
fromUrlToCM = function (url, callback) {
  $.get( url, function (data) {
    fromStringToCM(url, data, callback);
  }, 'text');
};

updateResize = function() {
  window.dispatchEvent(new Event('resize'));
  window.setTimeout(function(){ window.dispatchEvent(new Event('resize')); }, 500);
};

var FS = false;
goFullScore = function (full) {
  if (FS && !full) {
    $('.grid-container').css('grid-template-rows', '51px 1fr 55px 1fr 80px');
    $('#app').css('display', 'flex');
    switch (uiState) {
      case 0:
        goCenter();
        goLeft();
        break;
      case 1:
        goCenter();
        break;
      case 2:
        goRight();
    }
    $('#fs').text('fullscreen');
    FS = false;
  } else {
    $('.grid-container').css({
      'grid-template-columns': '0% auto',
      'grid-template-rows': '51px auto 30px 0px 80px'});
    $('#app').css('display', 'none');
    $('#fs').text('fullscreen_exit');
    FS = true;
  }
  updateResize();
};

var uiState = 1;
goLeft = function() {
  if (uiState == 2) {goCenter()}
  else {
    $('.grid-container').css('grid-template-areas', '"header header" "notebook scene" "info scene" "code scene" "footer footer"');
    $('#goL').css('visibility', 'hidden');
    uiState = 0;
  }
  updateResize();
}
goRight = function() {
  if (uiState == 0) {goCenter()}
  else {
    $('.grid-container').css('grid-template-columns', '1fr 0fr');
    $('#goR').css('visibility', 'hidden');
    uiState = 2;
  }
  updateResize();
}
goCenter = function() {
  $('.grid-container').css({
    'grid-template-columns': '1fr 1fr',
    'grid-template-areas': '"header header" "notebook scene" "notebook info" "notebook code" "footer footer"'
  });
  $('.go').css('visibility', 'visible');
  uiState = 1;
}

// define a new console
var console = (function(oldCons){
  return {
    log: function(text){
      oldCons.log(text);
      addInfo(text, 'midnightblue');
    },
    info: function (text) {
      oldCons.info(text);
      addInfo(text, 'darkslategrey');
    },
    warn: function (text) {
      oldCons.warn(text);
      addInfo(text, 'firebrick');
    },
    error: function (text) {
      oldCons.error(text);
    }
  };
}(window.console));

//Then redefine the old console
window.console = console;

var saveData = function(blob, fileName) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}

//MediaStream record
if (navigator.mediaDevices) {

  console.log('getUserMedia supported.');
  $('#record').css('visibility','visible');
  var mediaRecorder = null;
  var firstTime = true;
  var needVideo = false;
  var initMediaRecorder = function() {

    var chunks = [];
    if (firstTime) {
      $("#record").remove();
      var menu = $('#menu');
      var audioSelect = $('<select>',{
        change: getStream
      }).appendTo(menu).get(0);
      var videoSelect = $('<select>',{
        change: getStream
      }).appendTo(menu).get(0);
      var vidRec = $('<a>',{
        text: 'videoREC',
        href: '#/record'
      }).appendTo(menu);
      var audRec = $('<a>',{
        text: 'audioREC',
        href: '#/record'
      }).appendTo(menu);
      var stop = $('<a>',{
        text: 'STOP',
        href: '#/stop'
      }).appendTo(menu);
    }

    getStream().then(getDevices).then(gotDevices).then(function(){
      if (firstTime) {
        vidRec.click(function() {
          needVideo = true;
          mediaRecorder.start();
          console.log(mediaRecorder.state);
          console.log("recorder started");
          vidRec.css('background','red');
          vidRec.css('color','black');
        });
        audRec.click(function() {
          needVideo = false;
          mediaRecorder.start();
          console.log(mediaRecorder.state);
          console.log("recorder started");
          audRec.css('background','red');
          audRec.css('color','black');
        });
        stop.click(function() {
          mediaRecorder.stop();
          console.log(mediaRecorder.state);
          console.log("recorder stopped");
          vidRec.css('background','');
          vidRec.css('color','');
          audRec.css('background','');
          audRec.css('color','');
        });
        firstTime = false;
      }
    });

    function getDevices() {
      // AFAICT in Safari this only gets default devices until gUM is called :/
      return navigator.mediaDevices.enumerateDevices();
    }

    function gotDevices(deviceInfos) {
      window.deviceInfos = deviceInfos; // make available to console
      console.log('Available input and output devices:', deviceInfos);
      for (const deviceInfo of deviceInfos) {
        const option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'audioinput') {
          option.text = deviceInfo.label || `Microphone ${audioSelect.length + 1}`;
          audioSelect.appendChild(option);
        } else if (deviceInfo.kind === 'videoinput') {
          option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
          videoSelect.appendChild(option);
        }
      }
    }

    function getStream() {
      if (window.stream) {
        window.stream.getTracks().forEach(track => {
          track.stop();
        });
      }
      const audioSource = audioSelect.value;
      const constraints = {
        audio: {echoCancellation: false, noiseSuppression: false, deviceId: audioSource ? {exact: audioSource} : undefined}
      };
      const videoSource = videoSelect.value;
      constraints.video = {deviceId: videoSource ? {exact: videoSource} : undefined}
      return navigator.mediaDevices.getUserMedia(constraints).
      then(gotStream).catch(function(err) {
        console.log('The following error occurred: ' + err);
      });
    }

    function gotStream(stream) {
      var options = {
        audioBitsPerSecond : 128000,
        videoBitsPerSecond : 2500000,
        mimeType : 'video/webm;codecs=vp9,opus'
      };
      mediaRecorder = new MediaRecorder(stream);
      audioSelect.selectedIndex = [...audioSelect.options].
      findIndex(option => option.text === stream.getAudioTracks()[0].label);

      videoSelect.selectedIndex = [...videoSelect.options].
      findIndex(option => option.text === stream.getVideoTracks()[0].label);
      window.stream = stream;

      mediaRecorder.onstop = function(e) {
        console.log("data available after MediaRecorder.stop() called.");

        var clipName = prompt('Enter a name for your clip / Introduce un nombre para este clip:') + "_" + tempo;

        var clipContainer = document.createElement('article');
        var clipLabel = document.createElement('p');
        var clip = null;
        if (needVideo) {
          clip = document.createElement('video');
        } else {
          clip = document.createElement('audio');
        }
        var deleteButton = document.createElement('button');
        var downloadButton = document.createElement('button');

        clipContainer.classList.add('clip');
        clip.setAttribute('controls', '');
        deleteButton.innerHTML = "Delete";
        downloadButton.innerHTML = "Download";
        clipLabel.innerHTML = clipName;

        clipContainer.appendChild(clip);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        clipContainer.appendChild(downloadButton);
        $('#clips').append(clipContainer);
        displayDiv('modalClips',true);

        clip.controls = true;
        var blob = null;
        if (needVideo) {
          blob = new Blob(chunks, { 'type' : 'video/webm;codecs=vp9,opus'});
        } else {
          blob = new Blob(chunks, { 'type' : 'audio/ogg;codecs=opus'});
        }
        chunks = [];
        var clipURL = URL.createObjectURL(blob);
        clip.src = clipURL;
        console.log("recorder stopped");

        deleteButton.onclick = function(e) {
          evtTgt = e.target;
          evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        }

        downloadButton.onclick = function(e) {
          saveData(blob, clipName + '.webm');
        }
      };

      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      };
    }
  };
}
