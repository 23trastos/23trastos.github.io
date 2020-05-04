var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// object types
var kArcType = "arc";
var kCurveType = "curve";
var kEllipseType = "ellipse";
var kGuidoCodeType = "gmn";
var kGuidoPianoRollType = "pianoroll";
var kFaustType = "faust";
var kFaustfType = "faustf";
var kHtmlType = "html";
var kImgType = "img";
var kLineType = "line";
var kPolygonType = "polygon";
var kRectType = "rect";
var kSvgfType = "svgf";
var kSvgType = "svg";
var kSyncType = "sync";
var kTextfType = "txtf";
var kTextType = "txt";
var kMusicxmlType = "musicxml";
var kVideoType = "video";
var kVerovioType = "verovio";
var kVeroviofType = "veroviof";
var kWebSocketType = "websocket";
var kInscore = "inscore";
var kInscore2 = "inscore2";
// events types
var kMouseEnterID = 1;
var kMouseLeaveID = 2;
var kMouseDownID = 3;
var kMouseUpID = 4;
var kMouseMoveID = 5;
var kMouseDClickID = 6;
//----------------------------------------------------------------------------
// a download function
//----------------------------------------------------------------------------
function download(filename, text) {
    downloadMedia(filename, text, "text/plain;charset=utf-8,");
    // var element = document.createElement('a');
    // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    // element.setAttribute('download', filename);
    // element.style.display = 'none';
    // document.body.appendChild(element);
    // element.click();
    // document.body.removeChild(element);
}
function downloadMedia(filename, data, type) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:' + type + encodeURIComponent(data));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
///<reference path="../src/lib/inscore.d.ts"/>
///<reference path="constants.ts"/>
var INScoreDiv = /** @class */ (function () {
    function INScoreDiv(div, version) {
        this.fDiv = div;
        this.fVersion = version;
    }
    return INScoreDiv;
}());
//----------------------------------------------------------------------------
var INScoreBase = /** @class */ (function () {
    function INScoreBase() {
        this.fExtHandlers = {};
        this.makeExtTable();
    }
    //------------------------------------------------------------------------
    // internals
    INScoreBase.prototype.makeExtTable = function () {
        this.fExtHandlers["txt"] = kTextType;
        this.fExtHandlers["text"] = kTextType;
        this.fExtHandlers["mei"] = kVerovioType;
        this.fExtHandlers["xml"] = kMusicxmlType;
        this.fExtHandlers["musicxml"] = kMusicxmlType;
        this.fExtHandlers["svg"] = kSvgType;
        this.fExtHandlers["html"] = kHtmlType;
        this.fExtHandlers["htm"] = kHtmlType;
        this.fExtHandlers["gmn"] = kGuidoCodeType;
        this.fExtHandlers["dsp"] = kFaustType;
        this.fExtHandlers["jpg"] = kImgType;
        this.fExtHandlers["jpeg"] = kImgType;
        this.fExtHandlers["gif"] = kImgType;
        this.fExtHandlers["png"] = kImgType;
        this.fExtHandlers["bmp"] = kImgType;
        this.fExtHandlers["tiff"] = kImgType;
        this.fExtHandlers["wmv"] = kVideoType;
        this.fExtHandlers["avi"] = kVideoType;
        this.fExtHandlers["mpg"] = kVideoType;
        this.fExtHandlers["mpeg"] = kVideoType;
        this.fExtHandlers["mp4"] = kVideoType;
        this.fExtHandlers["m4v"] = kVideoType;
        this.fExtHandlers["mov"] = kVideoType;
        this.fExtHandlers["vob"] = kVideoType;
        this.fExtHandlers["inscore"] = kInscore;
        this.fExtHandlers["inscore2"] = kInscore2;
    };
    INScoreBase.prototype.getSceneAddress = function (div) {
        var scene = div.id;
        return "/ITL/" + (scene ? scene : "scene");
    };
    INScoreBase.prototype.getInscoreDivs = function () {
        this.fDivs = new Array();
        var divs = document.getElementsByClassName("inscore");
        for (var i = 0; i < divs.length; i++)
            this.addInscoreDiv(divs[i], 1);
        divs = document.getElementsByClassName("inscore2");
        for (var i = 0; i < divs.length; i++)
            this.addInscoreDiv(divs[i], 2);
    };
    INScoreBase.prototype.addInscoreDiv = function (div, version) {
        this.fDivs.push(new INScoreDiv(div, version));
    };
    //------------------------------------------------------------------------
    // initialization
    INScoreBase.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        gGlue.start().then(function () { _this.initialise(); success(_this); });
                    })];
            });
        });
    };
    INScoreBase.prototype.initialise = function () {
        this.getInscoreDivs();
        for (var i = 0; i < this.fDivs.length; i++) {
            this.initDiv(this.fDivs[i].fDiv, this.fDivs[i].fVersion == 2);
            this.allowdrop(this.fDivs[i].fDiv);
        }
        this.watchResize();
    };
    //------------------------------------------------------------------------
    // inscore div initialization
    INScoreBase.prototype.initDiv = function (div, v2) {
        // do not post the message otherwise content will be loaded before the scene is created
        inscore.loadInscore(this.getSceneAddress(div) + " new;", false);
        var content = div.innerText;
        div.innerText = "";
        if (content.length) {
            this.loadInscore(content, v2);
            // if (v2)
            // 	inscore.loadInscore2 (content);
            // else
            // 	inscore.loadInscore (content, false);
        }
    };
    //------------------------------------------------------------------------
    // utilities
    INScoreBase.prototype.getFileProperties = function (file) {
        var ext = file.substring(file.lastIndexOf('.') + 1, file.length).toLocaleLowerCase();
        var name = file.substring(0, file.lastIndexOf('.'));
        return { name: name, ext: ext };
    };
    INScoreBase.prototype.loadInscore = function (content, v2) {
        var status = false;
        if (v2)
            status = inscore.loadInscore2(content);
        else
            status = inscore.loadInscore(content, v2);
        if (!status)
            showlog(true);
    };
    //------------------------------------------------------------------------
    // load an inscore file - called when an inscore file is dropped
    INScoreBase.prototype.loadFromFile = function (content, v2, name) {
        this.loadInscore(content, v2);
    };
    //------------------------------------------------------------------------
    // load an inscore script - called when text is dropped
    INScoreBase.prototype.loadFromText = function (content, v2) {
        this.loadInscore(content, true);
        // if (!inscore.loadInscore (content, true)) showlog(true);
    };
    //------------------------------------------------------------------------
    // load an inscore file
    INScoreBase.prototype.fetchInscore = function (file, v2) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = function (event) { _this.loadFromFile(reader.result.toString(), v2, file.name); };
    };
    //------------------------------------------------------------------------
    // build a receivable name for an INScore object
    INScoreBase.prototype.fileName2InscoreName = function (name) {
        var myRegex = /^[a-zA-Z-_][-_a-zA-Z0-9]+$/.test(name);
        if (!myRegex) {
            var first = name[0];
            var myRegex_1 = /^[0-9]$/.test(first);
            if (myRegex_1) {
                name = '_' + name;
            }
            for (var i = 1; i < name.length; i++) {
                var myRegex_2 = /^[-_a-zA-Z0-9]$/.test(name[i]);
                if (!myRegex_2) {
                    name = name.replace(name[i], "_");
                }
            }
        }
        return name;
    };
    //------------------------------------------------------------------------
    // load an arbitrary file
    INScoreBase.prototype.loadTextFile = function (file, type, dest) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = function (event) {
            var msg = inscore.newMessageM("set");
            inscore.msgAddStr(msg, type);
            inscore.msgAddStr(msg, reader.result.toString());
            inscore.postMessage(dest, msg);
        };
    };
    //------------------------------------------------------------------------
    // load an arbitrary file
    INScoreBase.prototype.loadFile = function (file, fileName, type, div) {
        var dst = this.getSceneAddress(div) + "/" + this.fileName2InscoreName(fileName);
        switch (type) {
            case kGuidoCodeType:
            case kMusicxmlType:
            case kSvgType:
            case kHtmlType:
            case kTextType:
                this.loadTextFile(file, type, dst);
                break;
            case kFaustType:
            case kVerovioType:
            case kImgType:
            case kVideoType:
                break;
        }
    };
    //------------------------------------------------------------------------
    // files drop support
    INScoreBase.prototype.filedropped = function (e) {
        var filelist = e.dataTransfer.files;
        if (!filelist)
            return;
        var filecount = filelist.length;
        for (var i = 0; i < filecount; i++) {
            var file = filelist[i];
            var fileName = filelist[i].name;
            var properties = this.getFileProperties(fileName);
            var type = this.fExtHandlers[properties.ext];
            switch (type) {
                case kInscore:
                    this.fetchInscore(file, false);
                    break;
                case kInscore2:
                    this.fetchInscore(file, true);
                    break;
                default:
                    this.loadFile(file, fileName, type, e.target);
                    break;
            }
        }
    };
    INScoreBase.prototype.drop = function (e) {
        var data = e.dataTransfer.getData("Text");
        if (data)
            this.loadFromText(data, true);
        else
            this.filedropped(e);
        var div = e.target;
        div.style.border = div.getAttribute('savedborder');
    };
    //------------------------------------------------------------------------
    // activate drag & drop on inscore divs
    INScoreBase.prototype.accept = function (event) { return event.target == event.currentTarget; };
    INScoreBase.prototype.allowdrop = function (div) {
        var _this = this;
        div.addEventListener("dragenter", function (event) { if (_this.accept(event))
            _this.dragEnter(event); }, true);
        div.addEventListener("dragleave", function (event) { if (_this.accept(event))
            _this.dragLeave(event); }, true);
        div.addEventListener("dragover", function (event) { event.preventDefault(); }, true);
        div.addEventListener("drop", function (event) { _this.dragLeave(event); _this.drop(event); }, true);
    };
    INScoreBase.prototype.dragEnter = function (event) {
        event.stopImmediatePropagation();
        event.preventDefault();
    };
    INScoreBase.prototype.dragLeave = function (event) {
        event.stopImmediatePropagation();
        event.preventDefault();
    };
    //------------------------------------------------------------------------
    // activate drag & drop on inscore divs
    INScoreBase.prototype.watchResize = function () {
        var _this = this;
        window.addEventListener("resize", function (e) {
            for (var i = 0; i < _this.fDivs.length; i++) {
                inscore.postMessageStr(_this.getSceneAddress(_this.fDivs[i].fDiv), "refresh");
            }
        });
    };
    return INScoreBase;
}());
///<reference path="inscoreBase.ts"/>
///<reference path="editor.ts"/>
//----------------------------------------------------------------------------
// a simple glue to inscore engine
//----------------------------------------------------------------------------
var EditorGlue = /** @class */ (function (_super) {
    __extends(EditorGlue, _super);
    function EditorGlue() {
        var _this = _super.call(this) || this;
        $("#fullscreen").click(function (event) { _this.loadPreview(); });
        _this.fKeyHandler = _this.closePreview;
        return _this;
    }
    // load a script in an arbitrary div
    EditorGlue.prototype.loadScript = function (div, script) {
        var _this = this;
        var w = div.clientWidth;
        var h = div.clientHeight;
        if (!w || !h)
            setTimeout(function () { return _this.loadScript(div, script); }, 50);
        else {
            inscore.loadInscore(script, true);
            this.addInscoreDiv(div, 1);
        }
    };
    EditorGlue.prototype.closePreview = function (event) {
        if (event.key == 'Escape') {
            $("#fsclose").click();
            window.removeEventListener("keydown", this.fKeyHandler, { capture: true });
        }
    };
    EditorGlue.prototype.loadPreview = function () {
        var div = document.getElementById("fullscore");
        this.initDiv(div, false);
        var address = this.getSceneAddress(div);
        var score = address + " new;\n";
        score += editor.value.replace(/\/ITL\/scene/g, address);
        var preview = document.getElementById("preview");
        preview.style.visibility = "visible";
        this.loadScript(div, score);
        window.addEventListener("keydown", this.fKeyHandler, { capture: true });
    };
    EditorGlue.prototype.loadFromFile = function (content, v2, name) {
        editor.setInscore(content, name);
    };
    EditorGlue.prototype.dragEnter = function (event) {
        $("#scene").css("opacity", 0.3);
        _super.prototype.dragEnter.call(this, event);
    };
    EditorGlue.prototype.dragLeave = function (event) {
        $("#scene").css("opacity", 1);
        _super.prototype.dragLeave.call(this, event);
    };
    return EditorGlue;
}(INScoreBase));
function load(name, path) {
    if (path) {
        fetch("./" + path)
            .then(function (response) { return response.text(); })
            .then(function (code) {
            editor.setInscore(code, path);
        });
    }
}
function mylog(text, level) {
    var dest = document.getElementById("right-info");
    if (level == 1)
        text = '<span class="warning">' + text + '</span>';
    else if (level == 2)
        text = '<span class="error">' + text + '</span>';
    dest.innerHTML = text;
}
var oldcons = console;
var console = (function (oldCons) {
    return {
        log: function (text) {
            oldCons.log(text);
            mylog(text, 0);
        },
        warn: function (text) {
            oldCons.warn(text);
            mylog(text, 1);
        },
        error: function (text) {
            oldCons.error(text);
            mylog(text, 2);
        }
    };
}(window.console));
///<reference path="editorGlue.ts"/>
///<reference path="editor.ts"/>
//------------------------------------------------------------------------
var glue = new EditorGlue();
glue.start().then(function () {
    $("#version").text(inscore.versionStr());
});
