var Background = Class.create({
  initialize: function () {
    this.init();
  },
  getServerUrl: function (lang) {
    let url;
    switch (lang) {
      case 'en':
        url = "https://raw.githubusercontent.com/RTa-technology/scp/main/scp-jp/tags/tags.json";
        break;
      case 'ja':
        url = "https://raw.githubusercontent.com/RTa-technology/scp/main/scp-jp/tags/tags.json";
        break;
      default:
        url = "https://raw.githubusercontent.com/RTa-technology/scp/main/scp-jp/tags/tags.json";
    }
    return url;
  },
  load_json: function (callbacks) {
    let url = this.getServerUrl();
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (jsonData) {
      json = jsonData;
    });
    return json;
  },
  getConfig_position: function () {
    var value = localStorage["selected_popposition"];
    if (value) {
      return value;
    } else {
      return "homing";
    }
  },
  setConfig_position: function (value) {
    localStorage["selected_popposition"] = value;
  },
  getConfig_bc_color: function () {
    var value = localStorage["selected_popbc_color"];
    if (value) {
      return value;
    } else {
      return "#fff";
    }
  },
  setConfig_bc_color: function (value) {
    localStorage["selected_popbc_color"] = value;
  },
  getConfig_color: function () {
    var value = localStorage["selected_popcolor"];
    if (value) {
      return value;
    } else {
      return "#333";
    }
  },
  setConfig_color: function (value) {
    localStorage["selected_popcolor"] = value;
  }
});
var bg = new Background();
