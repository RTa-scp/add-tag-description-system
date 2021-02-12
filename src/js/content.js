var json;
var json_trans;
var DATA_URL;
var errmsg;
var JP = 'https://script.google.com/macros/s/AKfycbwJCGLDJtZeBQ9pmnFfb8xwiLbIA2Wd_8vB4WPiEXAyx214SbM/exec';
var EN = 'https://script.google.com/macros/s/AKfycbwJCGLDJtZeBQ9pmnFfb8xwiLbIA2Wd_8vB4WPiEXAyx214SbM/exec?lang=en';
var CN = 'https://script.google.com/macros/s/AKfycbwJCGLDJtZeBQ9pmnFfb8xwiLbIA2Wd_8vB4WPiEXAyx214SbM/exec?lang=cn';

function lang() {
  if (document.documentElement.lang === "en") {
    DATA_URL = EN;
    errmsg = "The tag does not exist.";
  } else if (document.documentElement.lang === "ja") {
    DATA_URL = JP;
    errmsg = "該当のタグは存在しません。";
  } else if (document.documentElement.lang === "cn") {
    DATA_URL = CN;
    errmsg = "标签不存在。";
  }
}
lang();

function a() {
  fetch(DATA_URL).then(function(response) {
    return response.json();
  }).then(function(jsonData) {
    json = jsonData;
  });
}

function getIndex(value, arr, prop) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][prop] === value) {
      return i;
    }
  }
  return -1; //値が存在しなかったとき
}
a();
// ストレージから設定値を取得
chrome.storage.sync.get(null, function(items) {
  selected_popposition = items.selected_popposition;
  selected_popbc_color = items.selected_popbc_color;
  selected_popcolor = items.selected_popcolor;
});
var obj = document.querySelectorAll("div.page-tags  span > a");
var length = obj.length;
for (var i = 0; i < length; i++) {
  obj.item(i).onmouseover = function() {
    var element = document.createElement("div");
    var index = getIndex(this.textContent, json, "tag");
    if (index !== -1) {
      element.innerHTML = json[index].tag + '<br><span style="font-size:0.8em;max-width: unset;"><em>' + json[index].trans + "</em> (" + json[index].category + ")</span><br>" + json[index].discription;
      element.className = "tooltip";
      if (selected_popcolor == undefined) {
        selected_popcolor = "#333"
      }
      if (selected_popbc_color == undefined) {
        selected_popbc_color = "#fff"
      }
      if (selected_popposition == "br") {
        element.style = "position: fixed; border: 1px solid black; background:" + selected_popbc_color + "; white-space: break-spaces; padding: 1em; color:" + selected_popcolor + "; font-size: 1.1em;margin:0.5em;max-width: 50vw;z-index: 200;bottom:0;right:0;";
      }
      if (selected_popposition == "homing" || selected_popposition == undefined) {
        element.style = "position: absolute; border: 1px solid black; background:" + selected_popbc_color + "; white-space: break-spaces; padding: 1em; color:" + selected_popcolor + "; font-size: 1.1em;margin:0.5em;max-width: 50vw;z-index: 200;";
      }
      this.appendChild(element);
    } else {
      element.innerHTML = errmsg;
      element.className = "tooltip";
      element.style = "position: absolute; border: 1px solid black; background:white; white-space: break-spaces; padding: 1em; color: #333; font-size: 1.1em;margin: 0.5em;z-index: 200;";
      this.appendChild(element);
    }
  }
  obj.item(i).onmouseout = function() {
    this.removeChild(this.childNodes.item(this.childNodes.length - 1));
  }
}
