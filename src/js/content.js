var EditableValue = Class.create();

EditableValue.prototype = {
  initialize: function() {
    this.bg = chrome.extension.getBackgroundPage().bg;
    let json = this.bg.load_json();

    let obj = document.querySelectorAll("div.page-tags  span > a");
    for (var i = 0; i < this.load_length(); i++) {
      this.text = obj.item(i);
      this.element = document.createElement("div");
      Event.observe(this.text, 'mouseover', this.createpop.bindAsEventListener(json,this.text), false);
      Event.observe(this.text, 'onmouseout', this.removepop.bindAsEventListener(json,this.text), false);
    }
  },
  load_length: function () {
    let obj = document.querySelectorAll("div.page-tags  span > a");
    let length = obj.length;
    return length;
  },
  getIndex: function (value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1; //値が存在しなかったとき
  },
  createpop: function(json,text) {
    let index = this.getIndex(text, json, "tag");
    if (index != -1) {
      this.element.innerHTML = json[index].tag + '<br><span style="font-size:0.8em;max-width: unset;"><em>' + json[index].trans + '</em><span style="display:inline-block;max-width: unset;"> (' + json[index].category + ":" +json[index].type+")</span></span><br>" + json[index].desc;
      this.element.className = "tooltip";
      this.element.style = "position: absolute; border: 1px solid black; background: #fff; white-space: break-spaces; padding: 1em; color: #333; font-size: 1.1em;margin:0.5em;max-width: 50vw;z-index: 200;";
      this.appendChild(this.element);
    }
  },
  removepop: function() {
    this.element.remove();
  },
};
